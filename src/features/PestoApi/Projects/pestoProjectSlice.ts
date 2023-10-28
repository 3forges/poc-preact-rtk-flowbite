import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"
import axios from "axios"

/**
 * very important ref: 
 * https://stackoverflow.com/questions/63516716/redux-toolkit-is-it-possible-to-dispatch-other-actions-from-the-same-slice-in-o
 * ---------------------------------------------------------
 **/
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
export const API_GET_PESTO_PROJECT_BY_ID: AxiosRequest = {
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
  "createPestoProject",
  async (project: PestoProjectApiEntity): Promise<PestoApiRequestState> => {
    API_CREATE_PESTO_PROJECT.data = project
    try {
      const { data } = await axios<PestoProjectApiEntity[]>(API_CREATE_PESTO_PROJECT)
      return {
        value: data,
        status: "pending",
      }
    } catch (error) {
      console.log(` ERROR - [createPestoProject] `, error)
      throw error
    }
  }
)
/**
 * Nouvelle fonctions chirrugie JB
 */
export const getAllPestoProjectsAsync = createAsyncThunk(
  "getAllPestoProjects",
  async (): Promise<PestoApiRequestState> => {
    try {
      const { data } = await axios<PestoProjectApiEntity[]>(API_LIST_ALL_PESTO_PROJECTS)
      return {
        value: data,
        status: "pending",
      }
    } catch (error) {
      console.log(` ERROR - [getAllPestoProjects] `, error)
      throw error
    }
  }
)
export const getPestoProjectByIdAsync = createAsyncThunk(
  "getPestoProjectById",
  async (project_id: string): Promise<PestoApiRequestState> => {
    API_GET_PESTO_PROJECT_BY_ID.url = "/" + project_id
    try {
      const { data } = await axios<PestoProjectApiEntity[]>(API_GET_PESTO_PROJECT_BY_ID)
      return {
        value: data,
        status: "pending",
      }
    } catch (error) {
      console.log(` ERROR - [getPestoProjectByIdAsync] `, error)
      throw error
    }
  }
)

/**
 * Nouvelle fonctions chirrugie JB
 */
export const updatePestoProjectAsync = createAsyncThunk(
  "updatePestoProject",
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
      console.log(` ERROR - [updatePestoProject] `, error)
      throw error
    }
  }
)
/**
 * Nouvelle fonctions chirrugie JB
 */
export const deletePestoProjectByIdAsync = createAsyncThunk(
  "deletePestoProjectById",
  async (project_id: string): Promise<PestoApiRequestState> => {
    API_DELETE_ENTITY_BY_ID.url = "/" + project_id
    try {
      const { data } = await axios<PestoProjectApiEntity[]>(API_DELETE_ENTITY_BY_ID)
      return {
        value: data,
        status: "pending",
      }
    } catch (error) {
      console.log(` ERROR - [deletePestoProjectById] `, error)
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
  // API_CREATE_PESTO_PROJECT.data = project
  // return requestPestoApiAsync(API_CREATE_PESTO_PROJECT)
  return createPestoProjectAsync(project)
}
/**
 * FUNCTION TO REQUEST PROJECT LIST
 *
 *  use: `< ... onClick={() => dispatch(RequestProjectList())}>`
 * @returns [json] (PestoProjectApiEntity[])
 */
export const RequestProjectList = () => {
  return getAllPestoProjectsAsync()
}
export const RequestProjectById = (project_id: string) => {
  return getPestoProjectByIdAsync(project_id)
}
/**
 * FONCTION UPDATE PROJECT
 *
 *  use: `< ... onClick={() => dispatch(UpdateProject(data))}>`
 * @param data (PestoProjectApiEntity)
 * @returns void
 */
export const  UpdateProject = (project: PestoProjectApiEntity) => {
  // console.log(project)
  // API_UPDATE_PROJECT_BY_ID.url = "/" + project._id
  // API_UPDATE_PROJECT_BY_ID.data = project
  // return requestPestoApiAsync(API_UPDATE_PROJECT_BY_ID)
  // const apiResponse = updatePestoProjectAsync(project)
  //return apiResponse;
  return updatePestoProjectAsync(project)
}
/**
 * FUNCTION DELETE PROJECT
 *
 *  use: `< ... onClick={() => dispatch(DeleteProjectById(item._id))}>`
 * @param project_id (string)
 * @returns void
 */
export const DeleteProjectById = (project_id: string) => {
  //API_DELETE_ENTITY_BY_ID.url = "/" + id
  //return requestPestoApiAsync(API_DELETE_ENTITY_BY_ID)
  return deletePestoProjectByIdAsync(project_id);
}

export const pestoProjectSlice = createSlice({
  name: "pestoProject",
  initialState,
  reducers: {
    /* EMPTY */
    
  },
  extraReducers: (builder) => {
    /**
     * Create Pesto Project Reducer 
     */
    builder
      .addCase(createPestoProjectAsync.pending, (state) => {
        state.status = "pending"
        console.log(" PESTO REDUCER [createPestoProjectAsync] pending...")
      })
      .addCase(createPestoProjectAsync.fulfilled, (state, action) => {
        state.status = "completed"
        console.log(" PESTO REDUCER [createPestoProjectAsync] fulfilled, payload: ", action.payload)
        state.value = action.payload.value
      })
      .addCase(createPestoProjectAsync.rejected, (state) => {
        state.status = "failed"
        console.log(" PESTO REDUCER [createPestoProjectAsync] failed")
      })
    /**
     * Get all Pesto Projects Extra Reducer 
     */
    builder
      .addCase(getAllPestoProjectsAsync.pending, (state) => {
        state.status = "pending"
        console.log(" PESTO REDUCER [getAllPestoProjectsAsync] pending...")
      })
      .addCase(getAllPestoProjectsAsync.fulfilled, (state, action) => {
        state.status = "completed"
        console.log(" PESTO REDUCER [getAllPestoProjectsAsync] fulfilled, payload: ", action.payload)
        state.value = action.payload.value
      })
      .addCase(getAllPestoProjectsAsync.rejected, (state) => {
        state.status = "failed"
        console.log(" PESTO REDUCER [getAllPestoProjectsAsync] failed")
      })
    
    /**
     * Get one Pesto Project by ID Extra Reducer 
     */
    builder
      .addCase(getPestoProjectByIdAsync.pending, (state) => {
        state.status = "pending"
        console.log(" PESTO REDUCER [getPestoProjectByIdAsync] pending...")
      })
      .addCase(getPestoProjectByIdAsync.fulfilled, (state, action) => {
        state.status = "completed"
        console.log(" PESTO REDUCER [getPestoProjectByIdAsync] fulfilled, payload: ", action.payload)
        state.value = action.payload.value
      })
      .addCase(getPestoProjectByIdAsync.rejected, (state) => {
        state.status = "failed"
        console.log(" PESTO REDUCER [getPestoProjectByIdAsync] failed")
      })

      
    /**
     * Update Pesto Project Reducer 
     */
    builder
      .addCase(updatePestoProjectAsync.pending, (state) => {
        state.status = "pending"
        console.log(" PESTO REDUCER [updatePestoProjectAsync] pending...")
      })
      .addCase(updatePestoProjectAsync.fulfilled, (state, action) => {
        state.status = "completed"
        console.log(" PESTO REDUCER [updatePestoProjectAsync] fulfilled, payload: ", action.payload)
        state.value = action.payload.value
      })
      .addCase(updatePestoProjectAsync.rejected, (state) => {
        state.status = "failed"
        console.log(" PESTO REDUCER [updatePestoProjectAsync] failed")
      })
    /**
     * Delete Pesto Project Reducer 
     */
    builder
      .addCase(deletePestoProjectByIdAsync.pending, (state, action) => { 
        state.status = "pending"
        console.log(` PESTO REDUCER [deletePestoProjectByIdAsync] pending... {action.type}=[${action.type}], full action is :`, action)
      })
      .addCase(deletePestoProjectByIdAsync.fulfilled, (state, action) => {
        state.status = "completed"
        console.log(" PESTO REDUCER [deletePestoProjectByIdAsync] fulfilled, payload: ", action.payload)
        state.value = action.payload.value
      })
      .addCase(deletePestoProjectByIdAsync.rejected, (state) => {
        state.status = "failed"
        console.log(" PESTO REDUCER [deletePestoProjectByIdAsync] failed")
      })
  },
})
/*
  PESTO REDUCERS
  
  A function that accepts an initial state, 
  an object full of reducer functions, 
  and a "slice name", and automatically generates action creators and 
  action types that correspond to the reducers and state.

  The reducer argument is passed to createReducer().
  */
/**
 *  YOUR STORE FOR ANY PAGES
 *
 *  use:  `const maVar = useAppSelector(ROOSTATE VAR)`
 */

/**
 * REQUEST VALUE STORE
 *
 *  use:  `const maVar = useAppSelector(reque st_Output)`
 * @param state
 * @returns json (PestoProjectApiEntity)
 */
// export const reques t_Output = (state: RootState) => state.getAllPestoProjects.value

export const pestoProjectRequestOutput = (state: RootState) => state.pestoProject.value

export default pestoProjectSlice.reducer

