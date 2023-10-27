import './app.css'
import "./components/Project/project.css"
import Layout from './layouts/MainLayout'

export function App() {
  /*
  // FAKE ROUTE
  const url: string = window.location.href
  const childrens: any = ((url.replace('projects','') != url)?[<PestoProjectUI/>]:[<FlowbiteExample1/>])
  console.log("childrens: ", childrens)
  */

  return (
    <>    
    <Layout />
    </>
  )
}
