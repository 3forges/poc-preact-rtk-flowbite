//import { useState } from 'preact/hooks';
import { Children } from 'preact/compat';
import NavBar from '../components/NavBar'
import PestoFooter from '../components/Footer';
import {PestoProjectUI} from "../pages/PestoProjectUI"
import { Router, Route } from "preact-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Pricing from "../pages/Pricing"
import Contact from "../pages/Contact"
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite, Sidebar } from 'flowbite-react';
import { PestoProjectDetailUI } from '../pages/PestoProjectDetailUI';
import { FunctionalComponent } from 'preact';
// import FlowbiteExample1 from '../components/FlowbiteExample1';
import { PestoContentTypeDetail } from '../pages/PestoContentTypeDetail';
import { PestoContentTypeList } from '../pages/PestoContentTypeList';

import { TvIcon, BusIcon, CpuIcon, User2Icon, CircuitBoardIcon, BookMarkedIcon, BiohazardIcon, BotIcon, UserIcon, BaggageClaimIcon, ArrowUpSquareIcon, Table2Icon} from 'lucide-preact';

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

export const MainLayout: FunctionalComponent<MainLayoutProps> = ({ children = <></>/*<FlowbiteExample1 />*/ }: MainLayoutProps ): JSX.Element => {
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
        <Router>
            <Route path="/" component={Home}/>
            <Route path="/projects" component={PestoProjectUI}/>
            {//https://github.com/preactjs/preact-router/issues/405#issuecomment-927369168
              // <PestoProjectDetailUI path="/projects/:id" project={{_id: parseInt(":id"), name: "fake", description: "fake", git_ssh_uri: "faketoo"}}/>
            }
            <Route path="/project/:project_id?" component={PestoProjectDetailUI}/>
            <Route path="/content-type/:project_id?" component={PestoContentTypeDetail}/>
            <Route path="/content-types" component={PestoContentTypeList}/>
            <Route path="/about" component={About}/>
            <Route path="/pricing" component={Pricing}/>
            <Route path="/contact" component={Contact}/>
        </Router>

        <aside class="fixed top-0 left-0 w-64 h-full" aria-label="Sidenav">
        <Sidebar aria-label="Sidebar with logo branding example">
          <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="Flowbite logo">
            Flowbite
          </Sidebar.Logo>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={BusIcon}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={BotIcon}>
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
              <Sidebar.Item href="#" icon={ArrowUpSquareIcon}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={Table2Icon}>
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
        </aside>
        <PestoFooter />
        </Flowbite>
        </>
    )
}

export default MainLayout;