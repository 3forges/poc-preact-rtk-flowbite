//import { useState } from 'preact/hooks';
import { Children } from 'preact/compat';
import NavBar from '../components/NavBar'
import PestoFooter from '../components/Footer';
import {PestoProjectUI} from "../pages/PestoProjectUI"
import { Router } from "preact-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Pricing from "../pages/Pricing"
import Contact from "../pages/Contact"
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: 'bg-red-500 hover:bg-red-600',
    },
  },
  card: {
    root: {
        base: 'bg-cyan-500 hover:bg-teal-400 rounded ring-teal-300 shadow-teal-200 hover:shadow-teal-600 shadow-lg hover:shadow-xl p-2 md:p-3 lg:p-4 xl:p-6  m-2 md:m-3 lg:m-4 xl:m-6',
        children: 'bg-white-100 hover:bg-teal-300 rounded p-2 md:p-3 lg:p-4 xl:p-6 ease-in-out duration-1000'
    }
  }
};
interface MainLayoutProps {
    children?: JSX.Element,
    theme?: any,
}

export const MainLayout = ({children}: MainLayoutProps ): JSX.Element => {
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
                console.log(` Loop over MainLayout children, chil no.${index} : [${child}]`)
                return child;
            })
        }
        <Router>
            <Home path="/" />
            <PestoProjectUI path="/projects" />
            <About path="/about" />
            <Pricing path="/pricing" />
            <Contact path="/contact" />
        </Router>
        <PestoFooter />
        </Flowbite>
        </>
    )
}

export default MainLayout;