import {FlowbiteExample1} from "../components/FlowbiteExample1"

export default function Home(props: any): JSX.Element {
  return (
    <>
      <h2>{props.path}</h2>
      <FlowbiteExample1 />
    </>
  )
}