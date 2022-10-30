import servbot from 'servbot'
import { watch } from 'watchlist'

const dev = true
const write = true

const DIST_PATH = 'dist'
const SRC_PATHS = ['src', 'scripts/render.js', 'dist/main.css']

const server = servbot({
  root: DIST_PATH,
  reload: true,
  fallback: 'index.html',
  verbose: true,
})

server.listen(8080)
;(async () => {
  await watch(SRC_PATHS, async () => {
    console.log('Restarting server')
    const { render } = await import('./render.js')
    await render(dev, write).finally(server.reload)
  })
})()
