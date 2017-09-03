import { polyfill } from 'es6-promise'
import fetch from 'isomorphic-fetch'

polyfill()

const CLIENT_ID = '248852dba780bfc64c13'
const CLIENT_SECRET = '84421262d7a72c8551a6705add17899d65ed7e86'
const TOKEN = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`


export async function fetchUser(username) {
  return fetch(`https://api.github.com/users/${username}?${TOKEN}`)
    .then(res => (res.json()))
    .then(data => ({ data }))
}

export async function fetchRepos(username, pageIndex) {
  return fetch(`https://api.github.com/users/${username}/repos?${TOKEN}&per_page=100&page=${pageIndex}`)
    .then(res => (res.json()))
    .then(data => ({ data }))
}
