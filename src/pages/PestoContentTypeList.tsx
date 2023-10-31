import { useState } from "preact/hooks"

import {
  PestoProjectApiEntity,
} from "../features/PestoApi/Projects/pestoProjectSlice"
import { Dropdown, TextInput } from "flowbite-react"
import { pestoApi } from "../app/api"
import { ContentTypeCard } from "../components/ContentType/ContentTypeCard"
const { useProjectListQuery } = pestoApi

interface Filter {
  target: number
  value: string
  filterfunction: Function
}

/**
 * PROJECT MAIN COMPONENT
 *
 * LIST PROJECT / CREATE PROJECT
 *
 *  PROVIDE CREATE PROJECT FORM
 *
 *  PROVIDE LIST WITH OPTIONAL BUTTONS (EDIT|REMOVE)
 * @returns PROJECT USER INTERFACE MANAGEMENT
 */
export function PestoContentTypeList(): JSX.Element {
  const [filter, SetFilter] = useState({ target: 0, value: "" })
  const { data: pestoProjectListData, isLoading, isError, isUninitialized } = useProjectListQuery()

  if (isLoading || isUninitialized) {
    return <div>loading ...</div>
  }
  if (isError) {
    return <div>something went wrong !</div>
  }

  /* FILTERS  */
  const filters: Filter[] = [
    {
      target: 0,
      value: "none",
      filterfunction: () => {
        return true
      },
    },
    {
      target: 1,
      value: "_id",
      filterfunction: (item: PestoProjectApiEntity | any) => {
        return item._id.replace(filter.value, "") !== item._id
      },
    },
    {
      target: 2,
      value: "name",
      filterfunction: (item: PestoProjectApiEntity | any) => {
        return item.name.replace(filter.value, "") !== item.name
      },
    },
    {
      target: 3,
      value: "git_ssh_uri",
      filterfunction: (item: PestoProjectApiEntity | any) => {
        return item.git_ssh_uri.replace(filter.value, "") !== item.git_ssh_uri
      },
    },
    {
      target: 4,
      value: "description",
      filterfunction: (item: PestoProjectApiEntity | any) => {
        return item.description.replace(filter.value, "") !== item.description
      },
    },
    {
      target: 5,
      value: "createdAt",
      filterfunction: (item: PestoProjectApiEntity | any) => {
        return item.createdAt.replace(filter.value, "") !== item.createdAt
      },
    },
    {
      target: 6,
      value: "__v",
      filterfunction: (item: PestoProjectApiEntity | any) => {
        return item.__v == filter.value
      },
    },
  ]
  // if (filter.value !== "" && requestOutput.length > 0) {
    // requestOutput = requestOutput.filter(filters[filter.target].filterfunction)
  // }

  /* ----------------------- JSX ----------------------- */
  return (
    <div>

      <hr style="margin:10px"/>
      {/* ----------------------FILTRE------------------- */}
      <div className="flex max-w-md flex-row gap-4 m-4">
        <Dropdown
          style="min-width: 160px"
          id="FilterDropdown"
          label={filters[filter.target].value != "none" ? filters[filter.target].value : `Filter With`}
          dismissOnClick={true}
        >
          {filters.map((item: Filter) => {
            return (
              <Dropdown.Item
                key={item.target}
                onClick={() => {
                  SetFilter({
                    target: item.target,
                    value: filter.value,
                  })
                  console.log(filter)
                }}
              >
                {item.value}
              </Dropdown.Item>
            )
          })}
        </Dropdown>
        <TextInput
          id="filter"
          placeholder="Enter your filter value"
          type="text"
          onChange={(e: any) =>
            SetFilter({ target: filter.target, value: e.target.value })
          }
        />
        
      </div>
      {/* ----------------------PAGINATION------------------- */}


      {/* ----------------------PROJECT LIST------------------- */}
      <div className="projects">
        {pestoProjectListData &&
          pestoProjectListData[0] &&
          pestoProjectListData[0]._id !== 0 &&
          pestoProjectListData.map((project: PestoProjectApiEntity, index: number) => {
            return (
              <div>
                  <span>Project # {index}</span>
                  <ContentTypeCard
                    project={project}
                    isEditModeOn={false}
                  />
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
