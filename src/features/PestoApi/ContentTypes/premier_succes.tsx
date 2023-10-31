import './index.css'

import { useState } from "preact/hooks";
//import React from "preact"
//import ReactDOM from "react-dom/client"
//import { Provider } from "react-redux"
//import { store } from "./app/store.js"
// import App from "./App"
import "./index.css"

import { pestoApi } from '../../../app/api'
import { PestoProjectApiEntity } from '../Projects/pestoProjectSlice';
const { useProjectListQuery, useProjectDetailQuery, useCreateNewProjectQuery, useUpdateProjectQuery } = pestoApi

import { Card } from 'flowbite-react';

export const ProjectDetail = ( {id}: {id : string} ): JSX.Element => {
//function ProjectDetail( {id}: {id : string} ): JSX.Element {
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
        <p>
            <p>
            <span> isLoading : {`${JSON.stringify(isLoading, null, 4)}`} </span>
            <span> isError : {`${JSON.stringify(isError, null, 4)}`} </span>
            <span> isUninitialized : {`${JSON.stringify(isUninitialized, null, 4)}`}</span>
            </p>
        </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                {JSON.stringify(data)}
                </p>
            </p>
    </article>
  )
}

export const ProjectList = (): JSX.Element => {
  const { data, isLoading, isError, isUninitialized } = useProjectListQuery()

  if (isLoading || isUninitialized) {
    return <div>loading ...</div>
  }
  if (isError) {
    return <div>something went wrong !</div>
  }

  return (

      <>
      <div>{isLoading}</div>
      {data.map((project: PestoProjectApiEntity)=>(
         <>
            <Card className="mt-5 max-w-sm" href="#">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>
                      Project: {`${project.name}`}
                  </p>
              </h5>
              <ProjectDetail id={`${project._id}`} />

            </Card>
          </>

      ))}
      </>

  )
}
