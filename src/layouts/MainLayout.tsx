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

interface MainLayoutProps {
    children?: JSX.Element,
    theme?: any,
}

export const MainLayout = ({children}: MainLayoutProps ): JSX.Element => {
    //const [isDark, setIsDark] = useState<boolean>(false);

    return (
        <>

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
        </>
    )
}

export default MainLayout;