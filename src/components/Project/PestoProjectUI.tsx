import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  RequestProjectList,
  PestoProjectApiEntity,
  request_Output,
} from "../../features/PestoApi/Projects/pestoProjectSlice"
import { PolyForm } from "../flowbite/PolyForm"
import { ProjectListCard } from "./ProjectListCard"
import { Feedbacks } from "../Feedbacks"
import { Dropdown, Button, TextInput } from "flowbite-react"
import "./project.css"

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
export function PestoProjectUI(): JSX.Element {
  const dispatch = useAppDispatch()
  let requestOutput: PestoProjectApiEntity[] | any = useAppSelector(request_Output)
  const [filter, SetFilter] = useState({ target: 0, value: "" })

  // JS FOR MODAL
  let none: string[] = Array(requestOutput?.length)
  none.fill("")
  const [editionDisplay, setEditionDisplay] = useState(none)
  function toggleEditMode(index: number) {
    const tmp: string[] = [...none]
    tmp.splice(index, 1, editionDisplay[index] !== "" ? "" : "display")
    setEditionDisplay(tmp)
  }

  /* INITIALISE editionDisplay Array with default "none" */
  
  useEffect(() => {
    setEditionDisplay(none)
  }, [requestOutput])
  
  /* REQUEST PROJECT-LIST @FIRST LOAD */
  useEffect(() => {
    dispatch(RequestProjectList())
  }, [dispatch])

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
  if (filter.value !== "" && requestOutput.length > 0) {
    requestOutput = requestOutput.filter(filters[filter.target].filterfunction)
  }

  /* ----------------------- JSX ----------------------- */
  return (
    <div>
      <Feedbacks />
      <PolyForm />
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
        <Button type="submit" onClick={() => dispatch(RequestProjectList())}>
          Filter
        </Button>
      </div>
      {/* ----------------------PAGINATION------------------- */}


      {/* ----------------------PROJECT LIST------------------- */}
      <div className="projects">
        {requestOutput &&
          requestOutput[0] &&
          requestOutput[0]._id !== 0 &&
          requestOutput.map((item: any, index: number) => {
            return (
              <div key={item._id}>
                {editionDisplay[index] !== "display" && (
                  <ProjectListCard
                    json={item}
                    callback={() => {
                      toggleEditMode(index)
                    }}
                  />
                  ) || (
                    <PolyForm
                      project={item}
                      callback={() => {
                        toggleEditMode(index)
                      }}
                    />
                  )
                }
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
