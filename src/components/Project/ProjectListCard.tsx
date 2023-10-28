import { useEffect, useState } from "preact/hooks";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  PestoProjectApiEntity,
  DeleteProjectById,
  UpdateProject,
  RequestProjectList,
  RequestProjectById,
  pestoProjectListRequestOutput,
} from "../../features/PestoApi/Projects/pestoProjectSlice"
import { Button, TextInput, Card } from "flowbite-react"
import { KeyRound as LuKeyRound, SaveAll as LuSaveAll } from 'lucide-preact';

interface ListProps {
  project: PestoProjectApiEntity
  isEditModeOn?: boolean
}
interface ProjectCardEditModeOnProps {
  project: PestoProjectApiEntity
  setIsEditModeOnHook: Function
  setProjectHook: Function
  dispatch: Function
}

export function ProjectCardEditModeOn({ project, setIsEditModeOnHook, setProjectHook, dispatch }: ProjectCardEditModeOnProps): JSX.Element {
  return (
      <>

<article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      {// <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                      }
                      <LuKeyRound />
                      Project id: {project._id}
                  </span>
                  <span class="text-sm">Created at: {project.createdAt}</span>
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Edit project properties:</a></h2>
              {//<p class="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
              }
                <div class="p-2 w-full bg-gray-200 flex justify-center items-center">
                  <TextInput
                    id={`input_name_${project._id}`}
                    value={project.name}
                    type="text"
                    >Project name:
                  </TextInput>
                  <TextInput
                    id={`input_git_ssh_uri_${project._id}`}
                    value={project.git_ssh_uri}
                    type="text"
                    >Project GIT SSH URI:
                  </TextInput>
                  <TextInput
                    id={`input_description_${project._id}`}
                    value={project.description}
                    type="text"
                    >Project description:
                  </TextInput>
                </div>
              {//
              }

              <div class="flex justify-between items-center">
                  <div class="flex items-center space-x-4">
                      <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                      <span class="font-medium dark:text-white">
                          Jese Leos
                      </span>
                  </div>
                  <Button
                    className={`mt-2`}
                    type="submit"
                    onClick={async() => {
                      console.log(` >> CLICK UPDATE: `)
                      const id: any = `${project._id}`
                      const name: any = document.getElementById(`input_name_${project._id}`)
                      const desc: any = document.getElementById(`input_description_${project._id}`)
                      const uri: any = document.getElementById(`input_git_ssh_uri_${project._id}`)
                      const created: any = `${project.createdAt}`
                      console.log(` - id = [${id}]`)
                      console.log(` - name = [${name}]`)
                      console.log(` - desc = [${desc}]`)
                      console.log(` - uri = [${uri}]`)
                      console.log(` - created = [${created}]`)
                      // const V: any = document.getElementById(`${inputValue["_id"]+"__v"}`)
                      const editedProject: PestoProjectApiEntity = {
                        _id: id,
                        name: name.value,
                        description: desc.value,
                        git_ssh_uri: uri.value,
                        createdAt: created,
                        // __v: Math.floor(V.value*1),
                      }
                      console.log("editedProject: ", editedProject)
                      // await dispatch(UpdateProject(data))
                      // await dispatch(UpdateProject(editedProject))
                      await setProjectHook(editedProject);
                      await setIsEditModeOnHook(false);
                      await dispatch(UpdateProject(editedProject))
                      await dispatch(RequestProjectList())
                      // dispatch(RequestProjectList())
                    }}
                  >
                    <LuSaveAll/>
                    Update
                  </Button>
              </div>
          </article>




          <div>


          </div>
      </>
  )
}
export function ProjectCardEditModeOff(props: ListProps): JSX.Element {
  return (
    <>
      <div class="text-left">
        <div class="px-4 sm:px-0">
          <h3 class="text-base font-semibold leading-7 text-gray-900">Pesto Project Informations</h3>
          <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Project details</p>
        </div>
        <div class="mt-6 border-t border-gray-100">
          <dl class="divide-y divide-gray-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Project Id</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{props.project._id}</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Project Name</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{props.project.name}</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Project Creation Date</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{props.project.createdAt}</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Project Description</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{props.project.description}</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Project Git SSH URI</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{props.project.git_ssh_uri}</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
              <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
                  <li class="flex justify-items-start content-start justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div class="flex w-0 flex-1 justify-items-start content-start">
                      <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                      </svg>
                      <div class="ml-4 flex min-w-0 flex-1 gap-2">
                        <span class="truncate font-medium">resume_back_end_developer.pdf</span>
                        <span class="flex-shrink-0 text-gray-400">2.4mb</span>
                      </div>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                    </div>
                  </li>
                  <li class="flex justify-items-start content-start justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div class="flex w-0 flex-1 justify-items-start content-start">
                      <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                      </svg>
                      <div class="ml-4 flex min-w-0 flex-1 gap-2">
                        <span class="truncate font-medium">coverletter_back_end_developer.pdf</span>
                        <span class="flex-shrink-0 text-gray-400">4.5mb</span>
                      </div>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}
/**
 * RENDER project TO PROJECT-CARD
 * @param props
 *  project: PestoProjectApiEntity => data to render
 *
 *  callback: FUNCTION  => (optional) parent javascript for buttons
 * @returns PROJECT-CARD + BUTTONS (optional)
 */
export function ProjectListCard(props: ListProps): JSX.Element {
  //console.log(props)
  const dispatch = useAppDispatch()
 
  // useEffect(() => {
  //   console.log(` [PestoProjectUI] Appel USE EFFECT [dispatch(RequestProjectList())]`)
  //   dispatch(RequestProjectList())
  // }, [dispatch])
  const [ isEditModeOn, setIsEditModeOn] = useState<boolean>(false);
  const [ project, setProject] = useState<PestoProjectApiEntity>(props.project);

  return (
    <>
      {// READONLY MODE
      }
      <Card>
      {isEditModeOn && (
                  <ProjectCardEditModeOn setProjectHook={setProject} dispatch={dispatch} setIsEditModeOnHook={setIsEditModeOn} project={project} />
                  ) || (
                  <ProjectCardEditModeOff project={project} />
                  )
                }
      <div class="grid grid-cols-2 gap-2 z-0 p-3">
      <Button
              onClick={async() => {
                console.log(`Passage en mode Édition`)
                await setIsEditModeOn(true)
              }}
            >
              Edit
            </Button>

            <a href={`/project/${project._id}`}
               class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
               onClick={async() => {
                console.log(`Passage en mode Édition - Detail Page`)
                await setIsEditModeOn(true)
              }}
               >
            Edit with Detail Page

            </a>
            <Button
              onClick={async () => {
                await dispatch(DeleteProjectById(`${project._id}`))
              }}
            >
              Remove
            </Button>
      </div>
      </Card>
    </>
  )
}
