//import { useState } from 'preact/hooks';
import { Children } from 'preact/compat';
import NavBar from '../components/NavBar'
import PestoFooter from '../components/Footer';
import { PestoProjectUI } from "../pages/PestoProjectUI"
import { Router, Route } from "preact-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Pricing from "../pages/Pricing"
import Contact from "../pages/Contact"
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Button, Flowbite, Sidebar } from 'flowbite-react';
import { PestoProjectDetailUI } from '../pages/PestoProjectDetailUI';
import { FunctionalComponent } from 'preact';
// import FlowbiteExample1 from '../components/FlowbiteExample1';
import { PestoContentTypeDetail } from '../pages/PestoContentTypeDetail';
import { PestoContentTypeList } from '../pages/PestoContentTypeList';

import { TvIcon, BusIcon, CpuIcon, User2Icon, CircuitBoardIcon, BookMarkedIcon, BiohazardIcon, BotIcon, UserIcon, BaggageClaimIcon, ArrowUpSquareIcon, Table2Icon, RadarIcon, LogInIcon, GaugeCircleIcon } from 'lucide-preact';

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: 'bg-red-500 hover:bg-red-600',
    },
  },
  card: {
    root: {
      base: 'bg-cyan-500 hover:bg-teal-400 rounded ring-teal-300 shadow-teal-200 hover:shadow-teal-600 shadow-lg hover:shadow-xl p-2 md:p-3 lg:p-4 xl:p-6  m-2 md:m-3 lg:m-4 xl:m-6 ease-in-out duration-1000',
      children: 'bg-white-100 hover:bg-teal-300 rounded p-2 md:p-3 lg:p-4 xl:p-6 ease-in-out duration-1000'
    }
  }
};
interface MainLayoutProps {
  children?: JSX.Element,
  theme?: any,
}

const api = {
  reducerPath: "c ça"
}
const truc = {
  [api.reducerPath]: "ccc",
  polling: 'juste une',
  auth: 'connerie',
}

console.log(` truc - [${truc["c ça"]}]`)

export const PestoSideBar = () => {
  return (
    <>
            <Sidebar className={"h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"} aria-label="Sidebar with logo branding example">
              <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="Flowbite logo">
                Pesto
              </Sidebar.Logo>
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="#" icon={GaugeCircleIcon}>
                    Dashboard
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={Table2Icon}>
                    Kanban
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={CpuIcon}>
                    Inbox
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={UserIcon}>
                    Users
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={BaggageClaimIcon}>
                    Products
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={LogInIcon}>
                    Sign In
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={ArrowUpSquareIcon}>
                    Sign Up
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
    </>
  )
}
export const MockedContent = () => {
  return (
    <>
      <div class="p-4 sm:ml-64 w-50">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="grid grid-cols-3 gap-4 mb-4">
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
          </div>
          <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
              </svg>
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
          </div>
          <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
              </svg>
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export const MainLayout: FunctionalComponent<MainLayoutProps> = ({ children = <></>/*<FlowbiteExample1 />*/ }: MainLayoutProps): JSX.Element => {
  //const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        {//<Button color="primary">Click me</Button>
        }


        <NavBar />

        {/* children */}
        {
          Children.forEach(children, (child, index) => {
            console.log(` Loop over MainLayout children, chil no.${index} : `, child)
            return child;
          })
        }
        <div>
          {// <Button target={``} data-drawer-target="pesto-sidebar" data-drawer-toggle="pesto-sidebar" aria-controls="pesto-sidebar" >
          }
          <Button target={`pesto-sidebar`} toggle={"pesto-sidebar"} ariaControls={"pesto-sidebar"} >
            Toggle
          </Button>
          
          <aside id="pesto-sidebar" class="z-40 w-50 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
            <PestoSideBar />
          </aside>
          <MockedContent />
          <div>
            <Router>
              <Route path="/" component={Home} />
              <Route path="/projects" component={PestoProjectUI} />
              {//https://github.com/preactjs/preact-router/issues/405#issuecomment-927369168
                // <PestoProjectDetailUI path="/projects/:id" project={{_id: parseInt(":id"), name: "fake", description: "fake", git_ssh_uri: "faketoo"}}/>
              }
              <Route path="/project/:project_id?" component={PestoProjectDetailUI} />
              <Route path="/content-type/:project_id?" component={PestoContentTypeDetail} />
              <Route path="/content-types" component={PestoContentTypeList} />
              <Route path="/about" component={About} />
              <Route path="/pricing" component={Pricing} />
              <Route path="/contact" component={Contact} />
            </Router>
          </div>
        </div>


        <PestoFooter />
      </Flowbite>
    </>
  )
}

export default MainLayout;