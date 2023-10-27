import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"
import axios from "axios"

const API_PORT = "3000"
const API_HOST = "localhost"
const API_BASE_URL = `http://${API_HOST}:${API_PORT}`

// TYPES POUR LA REQUETE AXIOS
type ApiHeader = {
  Accept: string
  "Content-Type": string
}
export enum urls { // STRICT URLS/HOOKS
  PESTOPROJECT = `${API_BASE_URL}/pesto-project`,
  PESTOCONTENT = `${API_BASE_URL}/pesto-content`,
  PESTOCONTENTTYPE = `${API_BASE_URL}/pesto-content-type`,
  PESTOPROJECTNAME = `${API_BASE_URL}/pesto-project/name`,
  PESTOPROJECTURI = `${API_BASE_URL}/pesto-project/uri`,
  PESTOCONTENTTYPEPROJECT = `${API_BASE_URL}/pesto-content-type/project`,
}
export enum methods { // STRICT METHODS
  POST = "POST",
  GET = "GET",
  DELETE = "DELETE",
  PUT = "PUT",
  PATCH = "PATCH",
}
// PESTO DATA TYPES
export type PestoProjectApiEntity = {
  _id?: number
  name: string
  git_ssh_uri: string
  description: string
  createdAt?: string
  __v?: number
}
// AXIOS REQUEST READY
export type AxiosRequest = {
  baseURL: urls
  url?: string
  method: methods
  data?: PestoProjectApiEntity
  headers?: ApiHeader
}

// PESTO REQUEST STATE
interface PestoApiRequestState {
  value: PestoProjectApiEntity[]
  status: "completed" | "pending" | "failed" // ça loulou, ça s'appelle une
                                        // énumération anoyme
}

const initialState: PestoApiRequestState = {
  value: [],
  status: "completed",
}


const requestPestoApiAsync = createAsyncThunk(
  "pestoApi/request",
  async (req: AxiosRequest): Promise<PestoApiRequestState> => {
    try {
      const { data } = await axios<PestoProjectApiEntity[]>(req)
      return {
        value: data,
        status: "pending",
      }
    } catch (error) {
      console.log(` ERROR - [requestPestoApiAsync] `, error)
      throw error
    }
  },
)



// EVERY CRUD PROJECTS REQUEST IN AXIOS FORMAT
export const API_LIST_ALL_PESTO_PROJECTS: AxiosRequest = {
  baseURL: urls.PESTOPROJECT,
  method: methods.GET,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
}
export const API_CREATE_PESTO_PROJECT: AxiosRequest = {
  baseURL: urls.PESTOPROJECT,
  method: methods.POST,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
}
export const API_UPDATE_PROJECT_BY_ID: AxiosRequest = {
  baseURL: urls.PESTOPROJECT,
  method: methods.PUT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
}
export const API_DELETE_ENTITY_BY_ID: AxiosRequest = {
  baseURL: urls.PESTOPROJECT,
  method: methods.DELETE,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
}


/**
 * !!!!!!!!!!!! !!!!!!!!!!!! !!!!!!!!!!!! 
 *    DEBUT CHIRURGIE ARCHI JB
 * !!!!!!!!!!!! !!!!!!!!!!!! !!!!!!!!!!!! 
 */

/**
 * Nouvelle fonctions chirrugie JB
 */
export const createPestoProjectAsync = createAsyncThunk(
  "pestoApi/getAllPestoProjects",
  async (project: PestoProjectApiEntity): Promise<PestoApiRequestState> => {
    API_CREATE_PESTO_PROJECT.data = project
    try {
      const { data } = await axios<PestoProjectApiEntity[]>(API_CREATE_PESTO_PROJECT)
      return {
        value: data,
        status: "pending",
      }
    } catch (error) {
      console.log(` ERROR - [getAllPestoProjectsAsync] `, error)
      throw error
    }
  }
)
/**
 * Nouvelle fonctions chirrugie JB
 */
export const getAllPestoProjectsAsync = createAsyncThunk(
  "pestoApi/getAllPestoProjects",
  async (): Promise<PestoApiRequestState> => {
    try {
      const { data } = await axios<PestoProjectApiEntity[]>(API_DELETE_ENTITY_BY_ID)
      return {
        value: data,
        status: "pending",
      }
    } catch (error) {
      console.log(` ERROR - [getAllPestoProjectsAsync] `, error)
      throw error
    }
  }
)

/**
 * Nouvelle fonctions chirrugie JB
 */
export const updatePestoProjectAsync = createAsyncThunk(
  "pestoApi/getAllPestoProjects",
  async (project: PestoProjectApiEntity): Promise<PestoApiRequestState> => {
      //
    API_UPDATE_PROJECT_BY_ID.url = "/" + project._id
    API_UPDATE_PROJECT_BY_ID.data = project
    try {
      const { data } = await axios<PestoProjectApiEntity[]>(API_UPDATE_PROJECT_BY_ID)
      return {
        value: data,
        status: "pending",
      }
    } catch (error) {
      console.log(` ERROR - [getAllPestoProjectsAsync] `, error)
      throw error
    }
  }
)
/**
 * Nouvelle fonctions chirrugie JB
 */
export const deletePestoProjectByIdAsync = createAsyncThunk(
  "pestoApi/getAllPestoProjects",
  async (project_id: string): Promise<PestoApiRequestState> => {
    API_DELETE_ENTITY_BY_ID.url = "/" + project_id
    try {
      const { data } = await axios<PestoProjectApiEntity[]>(API_LIST_ALL_PESTO_PROJECTS)
      return {
        value: data,
        status: "pending",
      }
    } catch (error) {
      console.log(` ERROR - [getAllPestoProjectsAsync] `, error)
      throw error
    }
  }
)

/**
 * !!!!!!!!!!!! !!!!!!!!!!!! !!!!!!!!!!!! 
 *    FIN CHIRURGIE ARCHI JB
 * !!!!!!!!!!!! !!!!!!!!!!!! !!!!!!!!!!!! 
 */



/**
 * --------------------------------------------------------------
 *                   METHODS FOR YOUR PAGES
 *  --------------------------------------------------------------
 */

/**
 * FUNCTION TO CREATE A NEW PROJECT
 *
 *  use: `< ... onclick={dispatch(CreateProject(data))}>`
 * @param data (PestoProjectApiEntity)
 * @returns request to api
 */
export const CreateProject = (project: PestoProjectApiEntity) => {
  API_CREATE_PESTO_PROJECT.data = project
  return requestPestoApiAsync(API_CREATE_PESTO_PROJECT)
}
/**
 * FUNCTION TO REQUEST PROJECT LIST
 *
 *  use: `< ... onClick={() => dispatch(RequestProjectList())}>`
 * @returns [json] (PestoProjectApiEntity[])
 */
export const RequestProjectList = () => {
  return requestPestoApiAsync(API_LIST_ALL_PESTO_PROJECTS)
}
/**
 * FONCTION UPDATE PROJECT
 *
 *  use: `< ... onClick={() => dispatch(UpdateProjectById(data))}>`
 * @param data (PestoProjectApiEntity)
 * @returns void
 */
export const UpdateProjectById = (project: PestoProjectApiEntity) => {
  console.log(project)
  API_UPDATE_PROJECT_BY_ID.url = "/" + project._id
  API_UPDATE_PROJECT_BY_ID.data = project
  return requestPestoApiAsync(API_UPDATE_PROJECT_BY_ID)
}
/**
 * FUNCTION DELETE PROJECT
 *
 *  use: `< ... onClick={() => dispatch(DeleteProjectById(item._id))}>`
 * @param id (string)
 * @returns void
 */
export const DeleteProjectById = (id: string) => {
  API_DELETE_ENTITY_BY_ID.url = "/" + id
  return requestPestoApiAsync(API_DELETE_ENTITY_BY_ID)
}

/*
  PESTO REDUCERS
  
  A function that accepts an initial state, 
  an object full of reducer functions, 
  and a "slice name", and automatically generates action creators and 
  action types that correspond to the reducers and state.

  The reducer argument is passed to createReducer().
 */
const pestoProjectSlice = createSlice({
  name: "pestoProject",
  initialState,
  reducers: {
    /* EMPTY */
  },
  extraReducers: (builder) => {
    /**
     * Get all Pesto Projects Extra Reducer 
     */

    /**
     * Create Pesto Projects Extra Reducer 
     */

    /**
     * Update Pesto Projects Extra Reducer 
     */
    
    builder
      .addCase(updatePestoProjectAsync.pending, (state) => {
        state.status = "pending"
        console.log(" PESTO REDUCER updatePestoProjectAsync pending...")
      })
      .addCase(updatePestoProjectAsync.fulfilled, (state, action) => {
        state.status = "completed"
        console.log(" PESTO REDUCER updatePestoProjectAsync fulfilled, payload: ", action.payload)
        state.value = action.payload.value
      })
      .addCase(updatePestoProjectAsync.rejected, (state) => {
        state.status = "failed"
        console.log(" PESTO REDUCER updatePestoProjectAsync failed")
      })
    /**
     * Delete Pesto Project Extra Reducer 
     */
    /**
     * Legacy extra reducer
     */
    builder
      .addCase(requestPestoApiAsync.pending, (state) => {
        state.status = "pending"
        console.log(" PESTO REDUCER requestPestoApiAsync pending...")
      })
      .addCase(requestPestoApiAsync.fulfilled, (state, action) => {
        state.status = "completed"
        console.log(" PESTO REDUCER fetch fulfilled, payload: ", action.payload)
        state.value = action.payload.value
      })
      .addCase(requestPestoApiAsync.rejected, (state) => {
        state.status = "failed"
        console.log(" PESTO REDUCER requestPestoApiAsync failed")
      })
  },
})

/**
 *  YOUR STORE FOR ANY PAGES
 *
 *  use:  `const maVar = useAppSelector(ROOSTATE VAR)`
 */

/**
 * REQUEST VALUE STORE
 *
 *  use:  `const maVar = useAppSelector(request_Output)`
 * @param state
 * @returns json (PestoProjectApiEntity)
 */
export const request_Output = (state: RootState) => state.pestoProject.value
/**
 * GEt all projects from STORE
 *
 *  use:  `const maVar = useAppSelector(request_Output)`
 * @param state
 * @returns json (PestoProjectApiEntity)
 */
export const getAllPRojects_Output = (state: RootState) => state.pestoProject.value

export default pestoProjectSlice.reducer
