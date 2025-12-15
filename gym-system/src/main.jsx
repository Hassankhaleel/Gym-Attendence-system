import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Theme } from '@radix-ui/themes/dist/cjs/index.js'
import { Provider } from 'react-redux'
import { store } from './Redux/Setup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme>
      <Provider store={store}>
        <App />
      </Provider>
    </Theme>
  </StrictMode>,
)
