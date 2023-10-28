import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
// import { getAllPestoProjectSlice, updatePestoProjectSlice, createPestoProjectSlice, deletePestoProjectSlice } from "../features/PestoApi/Projects/pestoProjectSlice"
import pestoProjectReducer from "../features/PestoApi/Projects/pestoProjectSlice"

export const store = configureStore({
  reducer: {
    // getAllPestoProjects: getAllPestoProjectSlice.reducer,
    // updatePestoProject: updatePestoProjectSlice.reducer,
    // createPestoProject: createPestoProjectSlice.reducer,
    // deletePestoProject: deletePestoProjectSlice.reducer,
    // somethingElse: pestoProjectReducer,
    pestoProject: pestoProjectReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
