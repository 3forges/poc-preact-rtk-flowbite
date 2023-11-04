
'use client';

// import Image from 'next/image';

import { useState } from "preact/hooks";
import { Button, TextInput, Card, Dropdown, Avatar } from "flowbite-react"
import { KeyRound as LuKeyRound, SaveAll as LuSaveAll } from 'lucide-preact';
import { GithubUserApiEntity } from "../../../features/PestoApi/login/github/githubUserSlice";

interface ListProps {
  project: GithubUserApiEntity
  isEditModeOn?: boolean
}
interface GithubUserDetailProps {
  user: GithubUserApiEntity
}





function GithubUserCard(user: GithubUserApiEntity) {
  const [ githubUser, setGithubUser] = useState<GithubUserApiEntity>(user);
  return (
    <Card className="max-w-sm">
      <div className="flex justify-end px-4 pt-4">
        <Dropdown inline label="">
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Export Data
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="flex flex-col items-center pb-10">
        <div height="96" className="flex flex-wrap gap-2">
          <Avatar img="/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />
          <Avatar img="/images/people/profile-picture-5.jpg" />
        </div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{githubUser.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{githubUser.git_ssh_uri}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{githubUser.description}</span>
      </div>
      <div class="grid grid-cols-2 gap-2 z-0 p-3">
                <Button
                onClick={async () => {
                    window.location.href = `/oauth/github/logout`
                }}
                >
                Logout
                </Button>
      </div>
    </Card>
  );
}


/**
 * RENDER project TO PROJECT-CARD
 * @param props
 *  project: GithubUserApiEntity => data to render
 *
 *  callback: FUNCTION  => (optional) parent javascript for buttons
 * @returns PROJECT-CARD + BUTTONS (optional)
 */
export function GithubUserDetail(props: GithubUserDetailProps): JSX.Element {
  //console.log(props)
  
 
  // useEffect(() => {
  //   console.log(` [PestoGithubUserUI] Appel USE EFFECT [dispatch(RequestGithubUserList())]`)
  //   dispatch(RequestGithubUserList())
  // }, [dispatch])
  const [ githubUser, setGithubUser] = useState<GithubUserApiEntity>({
    __v: 0,
    _id: 0,
    createdAt: `default`,
    description: `default`,
    git_ssh_uri: `default`,
    name: `default`,
  });

  return (
    <>
      {// READONLY MODE
      }



      {// BELOW THIS THE LEGACY
      }


      <Card>


      </Card>
    </>
  )
}
