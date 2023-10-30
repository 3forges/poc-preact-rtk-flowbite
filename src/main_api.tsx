import { render } from 'preact'
import {createApi, ApiProvider, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import './index.css'

import { useState } from "preact/hooks";
//import React from "preact"
//import ReactDOM from "react-dom/client"
//import { Provider } from "react-redux"
//import { store } from "./app/store.js"
// import App from "./App"
import "./index.css"
const API_PORT = "3000"
const API_HOST = "localhost"
const API_BASE_URL = `http://${API_HOST}:${API_PORT}/`

interface PestoProjectApiEntity {
  _id: string
  name: string
  git_ssh_uri: string
  description: string
  createdAt?: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL
  }),
  endpoints: build => ({
    projectList: build.query<PestoProjectApiEntity[], void>({
      query() {
        return {
          url: "pesto-project",
          params: {
            limit: 10
          },
          method: 'GET'
        }
      }
    }),
    projectDetail: build.query<PestoProjectApiEntity, {
      _id?: string, 
      name?: string
      git_ssh_uri?: string
      description?: string
      createdAt?: string
    }>({
      query: ({_id}) => { console.log("I am the query Fn ",_id); return ({url: `pesto-project/${_id}`})}
    }),
  }),
})

const { useProjectListQuery, useProjectDetailQuery } = api

function ProjectDetail( {id}: {id : string} ): JSX.Element {
  const { data, isLoading, isError, isUninitialized } = useProjectDetailQuery({
    _id: id,
  })
/*
  if (isLoading || isUninitialized) {
    return <div>loading ...</div>
  }
  if (isError) {
    return <div>something went wrong !</div>
  }
*/
  return (
    <article>
      <div>{JSON.stringify(data)}</div>
      <ol>
        <li key={id}>
          <div>{JSON.stringify(data)}</div>
        </li>
      </ol>
    </article>
  )
}

function ProjectList(): JSX.Element {
  const { data, isLoading, isError, isUninitialized } = useProjectListQuery()

  if (isLoading || isUninitialized) {
    return <div>loading ...</div>
  }
  if (isError) {
    return <div>something went wrong !</div>
  }

  return (
    <article>
      <div>{isLoading}</div>
      <ol>
      {data.map((project: PestoProjectApiEntity)=>(
        <li>
          {project._id}
          <ProjectDetail id={project._id} />
        </li>
      ))}
      </ol>
    </article>
  )
}

function App() {
  //const [selectedProject, selectProject] = useState<string>()
  
  return (
    <>
    <div> Projects List: </div>
    <ProjectList />
    </>
  )
}


// render(<App />, document.getElementById('app')!)
render(
  <ApiProvider api={api}>
    <App />
  </ApiProvider>,
   document.getElementById('root')!
)