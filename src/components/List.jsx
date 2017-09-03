import React from 'react'
import { connect } from 'mickey'
import style from './List.less'

const mapStateToProps = store => ({
  data: store.stars,
})
@connect(mapStateToProps)
export default class List extends React.Component {
  render() {
    const { loading, stars, repos } = this.props.data
    if (!loading && repos.length) {
      return (
        <div className={style.list}>
          <p>Total: <i>{stars}</i>⭐</p>
          <ul>
            {repos.map(item => (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
                <span>
                  <i>{item.stars}</i>⭐
                </span>
              </li>
            ))}
          </ul>
        </div>
      )
    }

    return null
  }
}
