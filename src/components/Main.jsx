import React from 'react'
import SearchForm from './SearchForm'
import List from './List'
import style from './Main.less'

const Main = () => (
  <div className={style.main} >
    <SearchForm />
    <List />
  </div>
)

export default Main
