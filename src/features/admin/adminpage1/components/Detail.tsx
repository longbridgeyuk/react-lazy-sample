import { Link, useParams } from "react-router-dom"

export function Detail() {
  type Params = {
    id: string 
  }
  const params = useParams<Params>()

  return (
    <>
    <p>Detail 【id = {params.id}】</p>
    <p><Link to="list"> ▶ to List </Link></p>
    </>
  )
}