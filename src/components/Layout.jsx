import React from 'react'
import PropTypes from 'prop-types'
import GithubBadge from './GithubBadge'
import style from './Layout.less'

const Layout = props => (
  <div className={style.layout}>
    <GithubBadge />
    <h1 className={style.title}>VSTAR</h1>
    {props.children}
    <div className={style.footer}>
      Create with <a
        href="https://github.com/mickeyjsx/mickey"
        rel="noopener noreferrer"
        target="_blank"
      >mickey</a>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
