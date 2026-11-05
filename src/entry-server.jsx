import { renderToString } from 'react-dom/server';
import App from './App';

export function renderPage(path) {
  return renderToString(<App path={path} />);
}
