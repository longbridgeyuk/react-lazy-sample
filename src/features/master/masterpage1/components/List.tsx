import { Link } from "react-router-dom"

export function List() {
  return (
    <>
    <p>List</p>
    <p><Link to="create"> + 新規作成 </Link></p>
    <ul>
      <li><Link to="detail/:1"> ID=1 詳細データ表示 </Link></li>
      <li><Link to="detail/:2"> ID=2 詳細データ表示 </Link></li>
      <li><Link to="detail/:3"> ID=3 詳細データ表示 </Link></li>
    </ul>
    </>
  )
}