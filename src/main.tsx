import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'

import React from "react"
//import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
// import App from "./App"
import "./index.css"

// render(<App />, document.getElementById('app')!)
render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
   document.getElementById('root')!
)
