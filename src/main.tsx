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

import { SidebarContext } from './context/SideBarContext.tsx'

render(
    <React.StrictMode>
        <SidebarContext.Provider value={{
            isOpenOnSmallScreens: false,
            isPageWithSidebar: true,
            setOpenOnSmallScreens: (screenSize) => {
                // https://www.flowbite-react.com/docs/components/sidebar#
                console.log(` >>> screenSize is : `, screenSize)
            }
            }}>

        <ApiProvider api={pestoApi}>
      <Provider store={store}>
          <App />
      </Provider>
      </ApiProvider>
        </SidebarContext.Provider>
    </React.StrictMode>,
   document.getElementById('root')!
)
