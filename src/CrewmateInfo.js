import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from './supabase'

const CrewmateInfo = () => {
  const { id } = useParams()
  const [crewmate, setCrewmate] = useState(null)

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase.from('crewmates').select('*').eq('id', id)
      if (error) {
        console.log(error)
      } else {
        setCrewmate(data[0])
      }
    }
    fetchCrewmate()
  }, [id])

  if (!crewmate) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h2>{crewmate.name}</h2>
      <p>Color: {crewmate.color}</p>
      <p>Task: {crewmate.task}</p>
    </>
  )
}

export default CrewmateInfo
