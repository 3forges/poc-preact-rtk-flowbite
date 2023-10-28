import { useState, useEffect } from "preact/hooks"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  RequestProjectList,
  PestoProjectApiEntity,
  pestoProjectRequestOutput,
  RequestProjectById,
} from "../features/PestoApi/Projects/pestoProjectSlice"
import { ProjectListCard } from "../components/Project/ProjectListCard"
import { Dropdown, Button, TextInput } from "flowbite-react"

interface Filter {
  target: number
  value: string
  filterfunction: Function
}

interface PestoProjectDetailProps {
  project: PestoProjectApiEntity,
  path: string;
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
export function PestoProjectDetailUI({ project, path }: PestoProjectDetailProps): JSX.Element {
  console.log(`[PestoProjectDetailUI] - path: `, path)
  const dispatch = useAppDispatch()
  let requestOutput: PestoProjectApiEntity[] = useAppSelector(pestoProjectRequestOutput)
  const [filter, SetFilter] = useState({ target: 0, value: "" })
  // const [projectList, setProjectList] = useState<PestoProjectApiEntity[]>(requestOutput)
  // setProjectList([...requestOutput])
  // dispatch(RequestProjectList())
  /* INITIALISE editionDisplay Array with default "none" */
  
   /// useEffect(() => {
   ///   // dispatch(RequestProjectList())
   ///   console.log(`Appel du useEffect sur [requestOutput], le fameux app selector`)
   /// }, [requestOutput])
  
  /* REQUEST PROJECT-LIST @FIRST LOAD */
  useEffect(() => {
    console.log(` [PestoProjectDetailUI] Appel USE EFFECT [dispatch(RequestProjectList())]`)
    dispatch(RequestProjectById(`${project._id}`))
  }, [dispatch])
  


  /* ----------------------- JSX ----------------------- */
  return (
    <div className="p-2">
      {/* ----------------------PROJECT DETAIL------------------- */}
      <div className="p-2">
                  <ProjectListCard
                    project={project}
                    isEditModeOn={false}
                  />
      </div>
    </div>
  )
}
