import './app.css'
import "./components/Project/project.css"
import Layout from './pages/MainLayout'
import FlowbiteExample1 from "./components/FlowbiteExample1"
import {PestoProjectUI} from "./components/Project/PestoProjectUI"

export function App() {
  // FAKE ROUTE
  const url: string = window.location.href
  const childrens: any = ((url.replace('projects','') != url)?[<PestoProjectUI/>]:[<FlowbiteExample1/>])
  console.log("childrens: ", childrens)
  return (
    <>
    <Layout children={childrens} />
    </>
  )
}
