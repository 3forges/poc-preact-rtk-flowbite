import { useState, useEffect } from "preact/hooks"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  // RequestProjectList,
  PestoProjectApiEntity,
  pestoProjectListRequestOutput,
  RequestProjectById,
} from "../features/PestoApi/Projects/pestoProjectSlice"
import { ProjectListCard } from "../components/Project/ProjectListCard"
import { FunctionalComponent } from 'preact'



{//https://github.com/preactjs/preact-router/issues/405#issuecomment-927369168
  // <PestoProjectDetailUI path="/projects/:id" project={{_id: parseInt(":id"), name: "fake", description: "fake", git_ssh_uri: "faketoo"}}/>
}
interface PestoProjectDetailProps {
  project_id: PestoProjectApiEntity;
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

export const PestoProjectDetailUI: FunctionalComponent<PestoProjectDetailProps> = ({ project_id }: PestoProjectDetailProps): JSX.Element => {
  console.log(`[PestoProjectDetailUI] - project_id: `, project_id)
  const dispatch = useAppDispatch()
  let requestOutput: PestoProjectApiEntity[] = useAppSelector(pestoProjectListRequestOutput)
  
  const getProjectFromId = (param_project_id: string): PestoProjectApiEntity => {
    let toReturn: PestoProjectApiEntity = {
      _id: 0,
      name: 'defaultOne',
      description: "default desc",
      git_ssh_uri: 'git@github.com:3forges/pesto-api'
    }
    for (let index = 0; index < requestOutput.length; index++) {
      const currproj = requestOutput[index];
      if (`${currproj._id}` == `${param_project_id}`) {
        toReturn = currproj;
        break;
      }
    }
    return toReturn;
  }
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
    console.log(`[PestoProjectDetailUI] - project_id: `, project_id)
    console.log(` [PestoProjectDetailUI] Appel USE EFFECT [dispatch(RequestProjectList())]`)
    dispatch(RequestProjectById(`${project_id}`))
  }, [dispatch])
  
  // const fetchedProject = await getProjectFromId(`${project_id}`);

  /* ----------------------- JSX ----------------------- */
  return (
    <div className="p-2">
      <h2>Project Details</h2>
      {/* ----------------------PROJECT DETAIL------------------- */}
      <div className="p-2">
                  <ProjectListCard
                    project={getProjectFromId(`${project_id}`)}
                    isEditModeOn={false}
                  />
      </div>
    </div>
  )
}

// export default PestoProjectDetailUI