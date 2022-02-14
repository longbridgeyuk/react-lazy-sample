import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()
  return (
    <>
      <h1>Home</h1>
      <div>
        <button type="button" onClick={()=>{navigate('/admin')}}> Go Start </button>
      </div>
    </>
  )
}
