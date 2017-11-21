import url from 'url'
import pathToRegexp from 'path-to-regexp'
import { fetchUser, fetchRepos } from '../services/stars'

export default {
  state: {
    username: '',
    limit: 10,
    thresh: 1,
    total: 0,
    stars: 0,
    repos: [],
    loading: false,
  },

  subscriptions({ history }, innerActions) {
    const { fetch } = innerActions
    const handler = () => {
      const uri = url.parse(location.hash.substr(1))
      const match = pathToRegexp('/:username').exec(uri.pathname)
      if (match) {
        fetch({ username: match[1], limit: 10, thresh: 1 })
      }
    }
    handler()
    history.listen(handler)
  },

  fetch: {
    * effect({ username }, d, c, innerActions) {
      yield innerActions.fetchUser(username)
    },
    prepare: (state, { username, limit, thresh }) => ({
      ...state,
      username,
      limit,
      thresh,
      total: 0,
      stars: 0,
      repos: [],
      loading: true,
    }),
  },

  fetchUser: {
    * effect(username, { call }, { success, failed }, innerActions) {
      try {
        const { data } = yield call(fetchUser, username)
        if (data) {
          const { public_repos } = data
          yield success(public_repos)
          yield innerActions.fetchRepos({
            username,
            pageCount: Math.ceil(public_repos / 100), // eslint-disable-line
          })
        } else {
          yield failed()
        }
      } catch (err) {
        yield failed()
        throw err
      }
    },
    success: (state, total) => ({ ...state, total }),
    failed: state => ({ ...state, loading: false }),
  },

  fetchRepos: {
    * effect({ username, pageCount }, { call }, { success, failed }) {
      const repos = []
      try {
        for (let i = 0; i < pageCount; i += 1) {
          const { data } = yield call(fetchRepos, username, i + 1)
          repos.push(...data.map((
            { name, html_url, stargazers_count }) =>
            ({ name, url: html_url, stars: stargazers_count }),
          ))
        }
      } catch (err) {
        yield failed()
        throw err
      }

      const stars = repos.reduce((memo, item) => memo + item.stars, 0)
      yield success({ stars, repos })
    },
    success: (state, { stars, repos }) => {
      const { limit, thresh } = state
      const left = repos
        .sort((a, b) => (b.stars - a.stars))
        .filter(item => item.stars >= thresh)
        .slice(0, limit)

      return { ...state, stars, repos: left, loading: false }
    },
    failed: state => ({ ...state, loading: false }),
  },
}
