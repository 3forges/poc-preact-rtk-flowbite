import { configureStore, ThunkAction, Action/*, Middleware*/ } from "@reduxjs/toolkit"
// Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from '@reduxjs/toolkit/query'
import { setupListeners } from '@reduxjs/toolkit/query/react'
// import { getAllPestoProjectSlice, updatePestoProjectSlice, createPestoProjectSlice, deletePestoProjectSlice } from "../features/PestoApi/Projects/pestoProjectSlice"
import pestoProjectListReducer from "../features/PestoApi/Projects/pestoProjectSlice"


import logger from 'redux-logger'

// import untypedMiddleware from 'untyped-middleware'
import { pestoApi } from "./api"

export const store = configureStore({
  // middleware: mySuperDooperMiddleware,
  reducer: {
    // getAllPestoProjects: getAllPestoProjectSlice.reducer,
    // updatePestoProject: updatePestoProjectSlice.reducer,
    // createPestoProject: createPestoProjectSlice.reducer,
    // deletePestoProject: deletePestoProjectSlice.reducer,
    // somethingElse: pestoProjectReducer,
    pestoProjectList: pestoProjectListReducer,
    [pestoApi.reducerPath]: pestoApi.reducer, 
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  // middleware: (getDefaultMiddleware) =>
  //   [getDefaultMiddleware().concat(middleware),]

  // --- loger middleware ?
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(
        // correctly typed middlewares can just be used
        pestoApi.middleware,
        // you can also type middlewares manually
        /*
        untypedMiddleware as Middleware<
          (action: Action<'specialAction'>) => number,
          RootState
        >
        */
      )
      // prepend and concat calls can be chained
      .concat(logger),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>


// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)