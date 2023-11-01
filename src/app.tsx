import './app.css'
import Layout from './layouts/MainLayout'
import 'flowbite/dist/flowbite' // this is the javascript capabilities of flowbite, it adds behavior

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
