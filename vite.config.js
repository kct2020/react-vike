import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

export default ({command})  => {
  if (command === 'serve') {
    return {
      plugins: [react(), vike({prerender: true})]
    }
  } else {
    // Build
    return {
      plugins: [react(), vike({prerender: true})],
      base: '/~antun/mindsdb/client',
      ssr: {
        noExternal: [
          '@reduxjs/toolkit'
        ]
      }
    }
  }
}
