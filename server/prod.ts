import { Application } from 'express'
import fs from 'fs'
import path from 'path'

import compression from 'compression'
import sirv from 'sirv'
import { HTML_KEY } from './constants'

const CLIENT_PATH = path.resolve(process.cwd(), 'dist/client')
const HTML_TEMPLATE_PATH = path.resolve(process.cwd(), 'dist/client/index.html')
const ENTRY_SERVER_PATH = path.resolve(process.cwd(), 'dist/ssr/entry-server.js')

export async function setupProd(app: Application) {
  app.use(compression())
  app.use(sirv(CLIENT_PATH))

  app.get('*', async (_, res, next) => {
    try {
      const template = fs.readFileSync(HTML_TEMPLATE_PATH, 'utf-8')

      const { render } = await import(ENTRY_SERVER_PATH)
      const appHtml = await render()

      const html = template.replace(HTML_KEY, appHtml)
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      next(e)
    }
  })
}