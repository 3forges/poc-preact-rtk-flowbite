import { render } from 'preact'
//import { App } from './app.js'
import {createApi, ApiProvider, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
//import ReactDom from "react-dom/client"
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
  _id?: number
  name: string
  git_ssh_uri: string
  description: string
  createdAt?: string
  __v?: number
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
    projectDetail: build.query<PestoProjectApiEntity, {projectId: string}>({
      query({projectId}) {
        return {
          url: `pesto-project/${projectId}`,
          method: 'GET'
        }
      }
    }),
  }),
})

const { useProjectListQuery, useProjectDetailQuery } = api

function ProjectList({ onProjectSelected }: { onProjectSelected: (projectId: string) => void}): JSX.Element {
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
      {data.map((project: any)=>(
        <li key={project._id}>
          {project._id}
          <button onClick={ () => onProjectSelected(project._id) } >view</button>
        </li>
      ))}
      </ol>
    </article>
  )
}

function ProjectDetail( {projectId}: {projectId : string} ): JSX.Element {
  const { data, isLoading, isError, isUninitialized } = useProjectDetailQuery({
    projectId: projectId
  })

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
        <li key={projectId}>
          <div>{data}</div>
        </li>
      </ol>
    </article>
  )
}

function App() {
  const [selectedProject, selectProject] = useState<string | undefined>(undefined)
  
  return (
    <>
    <div> Projects List: </div>
    {selectedProject ? (
      <>
        <ProjectDetail projectId={selectedProject} />
        <button onClick={() => selectProject(undefined)}> back </button>
      </>
    ):<></>}
      <ProjectList onProjectSelected={selectProject} />

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
