import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from './supabase'

const CrewmateList = () => {
  const [crewmates, setCrewmates] = useState([])

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase.from('crewmates').select('*')
      if (error) {
        console.log(error)
      } else {
        setCrewmates(data)
      }
    }
    fetchCrewmates()
  }, [])

  const handleDelete = async (id) => {
    const { data, error } = await supabase.from('crewmates').delete().eq('id', id)
    if (error) {
      console.log(error)
    } else {
      console.log(data)
      const newCrewmates = crewmates.filter((crewmate) => crewmate.id !== id)
      setCrewmates(newCrewmates)
    }
  }

  return (
    <>
      <ul>
        {crewmates.map((crewmate) => (
          <li key={crewmate.id}>
            <Link to={`/crewmates/${crewmate.id}`}>{crewmate.name}</Link>
            <button onClick={() => handleDelete(crewmate.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/crewmates/new">Add Crewmate</Link>
    </>
  )
}

export default CrewmateList
