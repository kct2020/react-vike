import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { store } from './store'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { PageShell } from './PageShell'

export { render }
export { onBeforeRender }
export { passToClient }

const passToClient = ['PRELOADED_STATE']

async function render(pageContext) {
  const { pageHtml } = pageContext
  return escapeInject`<!DOCTYPE html>
    <html>
      <title>MindsDB Web</title>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}

async function onBeforeRender(pageContext) {

  const { Page } = pageContext
  const pageHtml = renderToString(
    <Provider store={store}>
      <PageShell pageContext={pageContext}>
        <Page />
      </PageShell>
    </Provider>
  )

  // Grab the initial state from our Redux store
  const PRELOADED_STATE = store.getState()

  return {
    pageContext: {
      PRELOADED_STATE,
      pageHtml
    }
  }
}
