import { useState } from "preact/hooks";
import {
    GithubUserApiEntity,
} from "../../../features/PestoApi/login/github/githubUserSlice"
import { Button, TextInput, Card, Toast, Modal } from "flowbite-react"
import { KeyRound as LuKeyRound, SaveAll as LuSaveAll, BugIcon as LuErrorIcon, CheckIcon as LuSuccessIcon, LogInIcon, GithubIcon } from 'lucide-preact';

import { Spinner } from "flowbite-react"

interface GithubModalProps {
  isOpened?: boolean
  githubHtmlForm?: string
}
/**
 * 
 */
export const GithubModal = ({githubHtmlForm = `<h3>Default Github Login Form<h3/>`, isOpened: isModalOpened = false}: GithubModalProps) => {
  const [isGithubModalOpened, setIsGithubModalOpened] = useState<boolean>(isModalOpened);

  return (
    <>
            <button id="pestoButton" type="button" onClick={() => {
                setIsGithubModalOpened(true)
            }
            } class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Open
            </button>

            {// ------------------------------------------------------------------
            }
            <Modal show={isGithubModalOpened} onClose={() => setIsGithubModalOpened(false)}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: githubHtmlForm }}>
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
                            ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
                            possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    
                    <Button onClick={() => {
                        setIsGithubModalOpened(false)
                    }}>
                      Dismiss
                    </Button>

                    <Button color="gray" onClick={
                        () => {
                          setIsGithubModalOpened(false)
                        }
                    }>
                      Close
                    </Button>

                </Modal.Footer>
            </Modal>
    </>
  )
}

/**
 * Those two will have to be 
 * injected by auth context
 */
interface GithubLoginButtonProps {
  github_oauth_client_id: string
  github_oauth_redirect_uri: string
  github_oauth_scopes?: string
}


/**
 * RENDER githubUser TO PROJECT-CARD
 * @param props
 *  githubUser: GithubUserApiEntity => data to render
 *
 *  callback: FUNCTION  => (optional) parent javascript for buttons
 * @returns PROJECT-CARD + BUTTONS (optional)
 */
export function GithubLoginButton({
  github_oauth_client_id, 
  github_oauth_redirect_uri,
  github_oauth_scopes = `user`// `repo+read:email+read:user+admin:gpg_key`
}: GithubLoginButtonProps): JSX.Element {
  //console.log(props)

  // useEffect(() => {
  //   console.log(` [PestoGithubUserUI] Appel USE EFFECT [dispatch(RequestGithubUserList())]`)
  //   dispatch(RequestGithubUserList())
  // }, [dispatch])
  
  const [ githubUser, setGithubUser] = useState<GithubUserApiEntity>();
  const github_oauth_flow_start_point = `https://github.com/login/oauth/authorize?scope=${github_oauth_scopes}&client_id=${github_oauth_client_id}&redirect_uri=${github_oauth_redirect_uri}`
  
  return (
    <>
            <Button gradientDuoTone="pinkToOrange" onClick={() => {
                console.log(``)
                window.location.href = `${github_oauth_flow_start_point}`
            }}>
              <GithubIcon />
              Github Login
            </Button>

    </>
  )
}
