import React from 'react'
import arrowLeft from './arrow-left.svg'
import './PageShell.css'
import { PageContextProvider } from './usePageContext'
import { Link } from './Link'

export { PageShell }

function PageShell({ pageContext, children }) {
  //console.log('import.meta.env.BASE_URL', import.meta.env.BASE_URL);
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Sidebar>
            MD
          </Sidebar>
          <Rightpanel>
            <Navigation>
              <ArrowLeft />
              <Link className="navitem" href="/about">
                ChatProject
              </Link>
              /
              <Link className="navitem" href="/">
                Add datasource
              </Link>
            </Navigation>
            <Content>
              {children}
            </Content>
          </Rightpanel>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Layout({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        margin: 'auto'
      }}
    >
      {children}
    </div>
  )
}

function Sidebar({ children }) {
  return (
    <div
      style={{
        padding: 8,
        width: 48,
        flexShrink: 0,
        display: 'flex',
        borderRight: '1px solid var(--zinc-200, #E4E4E7)',
        background: 'var(--special-white, #FFF)',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: '1.8em'
      }}
    >
      {children}
    </div>
  )
}

function Rightpanel({ children }) {
  return (
    <div
      style={{
        padding: 0,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {children}
    </div>
  )
}

function Navigation({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        left: 48,
        width: '100%',
        height: 48,
        padding: '8px 16px',
        alignItems: 'center',
        alignContent: 'center',
        gap: 8,
        flexWrap: 'wrap',
        borderBottom: '1px solid var(--colors-zinc-200, #E4E4E7)',
        background: 'var(--colors-special-white, #FFF)'
      }}>
      {children}
    </div>
  );
}

function Content({ children }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        minHeight: '100vh'
      }}
    >
      <div
      style={{
        width: 1024,
        margin: 'auto'
      }}>
        {children}
      </div>
    </div>
  )
}

function ArrowLeft() {
  return (
    <div
      style={{
        marginTop: 6
      }}
    >
      <a href="/">
        <img src={arrowLeft} style={{width: 16, height: 16}} alt="Left Arrow" />
      </a>
    </div>
  )
}