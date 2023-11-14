'use client';

import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';

import { useSidebarContext } from "../context/SideBarContext";
import { LogInIcon, GithubIcon } from 'lucide-preact'
import { GithubLoginButton } from './login/github/GithubLoginButton';
export default function NavbarWithDropdown() {
  /**
   * Login
   */
  const [ const_github_oauth_client_id,
    const_github_oauth_redirect_uri ] = [
    `c994e3dbc8e38a3ec130`, // github_oauth_client_id
    `http%3A%2F%2Ftestwebsite.pokus.io%3A5173%2Foauth%2Fgithub%2Fcallback`, // github_oauth_redirect_uri
  ]
  /**
   * Sidebar collapse
   */
  const {
    isOpenOnSmallScreens = false,
    isPageWithSidebar = true,
    setOpenOnSmallScreens
  } = useSidebarContext();

  return (
    <Navbar fluid rounded>

{// HERE START OF SIDEBAR HANDLING
}
        {isPageWithSidebar && (
          <button
            aria-controls="sidebar"
            aria-expanded="true"
            className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
            onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
          >
            {isOpenOnSmallScreens ? (
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        )}
{// HERE END OF SIDEBAR HANDLING
}

      <Navbar.Brand id="pesto_sidebar" href="https://flowbite-react.com">
        <img src={"/src/assets/flowbite.svg"} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-l p-3 font-semibold dark:text-white">Flowbite Preact</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={true}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">Bonnie@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
          <Dropdown.Item >
          <Button gradientDuoTone="pinkToOrange" onClick={() => {
                console.log(``)
                window.location.href = `http://keycloak.pesto.io:8081/auth/realms/pesto/protocol/openid-connect/auth?response_type=token&client_id=pesto-oidc-client-id&redirect_uri=http%3A%2F%2Ftestwebsite.pokus.io%3A5173%2Fauth%2Foidc%2Fkeycloak`
            }}>
              <LogInIcon className={`p-1`} />
              Pesto Login
            </Button>
            </Dropdown.Item>
            <Dropdown.Item >
              <GithubLoginButton github_oauth_client_id={`${const_github_oauth_client_id}`} github_oauth_redirect_uri={`${const_github_oauth_redirect_uri}`} />
            </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" >Home</Navbar.Link>
        <Navbar.Link href="/about" active>About</Navbar.Link>
        <Navbar.Link href="/projects">Projects</Navbar.Link>
        <Navbar.Link href="/content-types">Content Types</Navbar.Link>
        <Navbar.Link href="/pricing">Pricing</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


