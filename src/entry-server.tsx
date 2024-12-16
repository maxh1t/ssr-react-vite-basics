import { renderToString } from 'react-dom/server'
import { App } from './components/App'
import { StaticRouter } from 'react-router'

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
}
