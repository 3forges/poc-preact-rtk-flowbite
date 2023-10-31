import {
  createApi,
  fetchBaseQuery,
  ApiEndpointQuery,
} from "@reduxjs/toolkit/query/react";
import { PestoProjectApiEntity } from "../features/PestoApi/Projects/pestoProjectSlice";

const config = {
  PESTO_API_PORT: `3000`,
  PESTO_API_HOST: `localhost`,
};
// const PESTO_API_PORT = process.env.PESTO_API_PORT || "3000"
const PESTO_API_PORT = config.PESTO_API_PORT || "3000";
// const PESTO_API_HOST = process.env.PESTO_API_HOST || "localhost"
const PESTO_API_HOST = config.PESTO_API_HOST || "localhost";
const API_BASE_URL = `http://${PESTO_API_HOST}:${PESTO_API_PORT}/`;

export const pestoApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (build) => ({
    createNewProject: build.query<
      PestoProjectApiEntity[],
      {
        v_name: string;
        v_git_ssh_uri: string;
        v_description: string;
      }
    >({
      query({ v_name, v_git_ssh_uri, v_description }) {
        console.log(` RTK QUERY - I am the [createNewProject]`);
        return {
          url: "pesto-project",
          /* params: {
              limit: 10
            }, */
          method: "POST",
          body: {
            name: `${v_name}`,
            git_ssh_uri: `${v_git_ssh_uri}`,
            description: `${v_description}`,
          },
        };
      },
    }),
    projectList: build.query<PestoProjectApiEntity[], void>({
      query() {
        console.log(` RTK QUERY - I am the [projectList]`);
        return {
          url: "pesto-project",
          params: {
            limit: 10,
          },
          method: "GET",
        };
      },
    }),
    projectDetail: build.query<
      PestoProjectApiEntity,
      {
        _id?: string;
        name?: string;
        git_ssh_uri?: string;
        description?: string;
        createdAt?: string;
      }
    >({
      query: ({ _id }) => {
        console.log(" RTK QUERY - I am the [projectDetail] query Fn ", _id);
        return { url: `pesto-project/${_id}` };
      },
    }),
    
    updateProject: build.query<
      PestoProjectApiEntity[],
      {
        _id?: string;
        name?: string;
        git_ssh_uri?: string;
        description?: string;
        createdAt?: string;
      }
    >({
      query({ _id, name, git_ssh_uri, description, createdAt }) {
        console.log(` RTK QUERY - I am the [updateProject]`);
        return {
          url: "pesto-project",
          /* params: {
              limit: 10
            }, */
          method: "PUT",
          body: {
            _id: _id,
            createdAt: createdAt,
            name: `${name}`,
            // createdAt: `${Date.now()}`,
            git_ssh_uri: `${git_ssh_uri}`,
            description: `${description}`,
          },
        };
      },
    }),

    deleteProject: build.query<
      PestoProjectApiEntity,
      {
        _id?: string;
        name?: string;
        git_ssh_uri?: string;
        description?: string;
        createdAt?: string;
      }
    >({
      query: ({ _id }) => {
        console.log(` RTK QUERY - I am the [deleteProject] query Fn [/pesto-project/${_id}]`, _id);
        // return { url: `pesto-project/${_id}` };
        return {
          url: `pesto-project/${_id}`,
          /* params: {
              limit: 10
            }, */
          method: "PUT",
        };
      },
    }),
  }),
});
