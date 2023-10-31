import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'

import React from "react"
//import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"

/**
 * 
 */
import {ApiProvider } from "@reduxjs/toolkit/query/react"

// import App from "./App"
import "./index.css"
import { pestoApi } from './app/api.ts'


render(
    <React.StrictMode>
        {//<ApiProvider api={api}>
        }
        <ApiProvider api={pestoApi}>
      <Provider store={store}>
          <App />
      </Provider>
      </ApiProvider>
        {//</ApiProvider>
        }
    </React.StrictMode>,
   document.getElementById('root')!
)
