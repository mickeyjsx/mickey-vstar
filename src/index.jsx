import React from 'react'
import { message } from 'antd'
import createApp from 'mickey'
import Routers from './router'
import './index.html'

const app = createApp({
  historyMode: 'hash',
  hooks: {
    onError(error) {
      message.error(error.message)
    },
  },
})

app.load()
app.render(<Routers />, document.getElementById('app'))
