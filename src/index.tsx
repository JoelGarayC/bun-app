import { serve } from 'bun'
import index from './index.html'

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    '/*': index,

    '/api/hello': {
      async GET(req) {
        return Response.json({
          message: 'Hola, mundo',
          method: 'GET'
        })
      },
      async PUT(req) {
        return Response.json({
          message: 'Hola, mundo (actualizado)',
          method: 'PUT'
        })
      }
    },

    '/api/hello/:name': async (req) => {
      const name = req.params.name
      return Response.json({
        message: `Hola, ${name}!`
      })
    }
  },

  development: process.env.NODE_ENV !== 'production'
})

console.log(`🚀 Server running at ${server.url}`)
