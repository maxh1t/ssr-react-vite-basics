import { Application } from 'express'
import fs from 'fs'
import path from 'path'
import { HTML_KEY } from './constants'

const HTML_TEMPLATE_PATH = path.resolve(process.cwd(), 'index.html')
const ENTRY_SERVER_PATH = path.resolve(process.cwd(), 'src/entry-server.tsx')

export async function setupDev(app: Application) {
  const vite = await (
    await import('vite')
  ).createServer({
    root: process.cwd(),
    server: { middlewareMode: true },
    appType: 'custom',
  })

  app.use(vite.middlewares)

  app.get('*', async (req, res, next) => {
    try {
      let template = fs.readFileSync(HTML_TEMPLATE_PATH, 'utf-8')
      template = await vite.transformIndexHtml(req.originalUrl, template)

      const { render } = await vite.ssrLoadModule(ENTRY_SERVER_PATH)
      const appHtml = await render(req.url)

      const html = template.replace(HTML_KEY, appHtml)
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite.ssrFixStacktrace(e as Error)
      console.error((e as Error).stack)
      next(e)
    }
  })
}
