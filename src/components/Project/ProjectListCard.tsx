import { useAppDispatch } from "../../app/hooks"
import {
  RequestProjectList,
  PestoProjectApiEntity,
  DeleteProjectById,
} from "../../features/PestoApi/Projects/pestoProjectSlice"
import { Button, Card } from "flowbite-react"

interface ListProps {
  json: object | PestoProjectApiEntity
  callback: Function
}

/**
 * RENDER JSON TO PROJECT-CARD
 * @param props
 *  json: PestoProjectApiEntity => data to render
 *
 *  callback: FUNCTION  => (optional) parent javascript for buttons
 * @returns PROJECT-CARD + BUTTONS (optional)
 */
export function ProjectListCard(props: ListProps): JSX.Element {
  //console.log(props)
  const dispatch = useAppDispatch()
  const item: any = props.json
  let keys = []
  for (let key in item) {
    keys.push(key)
  }

  return (
    <Card className="ProjectCard">
      <ul>
        {keys.map((k: string) => {
          return (
            <li key={k}>
              <span>{k}:</span>
              <span>{item[k]}</span>
            </li>
          )
        })}
      </ul>
      {/* CONTROLBAR IF CALLBACK PROVIDED */}
      {typeof props.callback != "undefined" && (
        <div class="grid grid-cols-2 gap-2 z-0">
          <Button
              onClick={() => {
              props.callback() //modal(index)
            }}
          >
            Edit
          </Button>
          <Button
            onClick={async () => {
              await dispatch(DeleteProjectById(item._id))
              dispatch(RequestProjectList())
            }}
          >
            Remove
          </Button>
        </div>
      )}
    </Card>
  )
}
