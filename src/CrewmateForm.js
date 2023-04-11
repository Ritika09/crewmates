import { useState } from 'react'
import { supabase } from './supabase'

const CrewmateForm = () => {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [task, setTask] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase
      .from('crewmates')
      .insert([{ name, color, task }])

    if (error) {
      console.log(error)
    } else {
      console.log(data)
      setName('')
      setColor('')
      setTask('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Color:
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value=""></option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
          <option value="Orange">Orange</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Purple">Purple</option>
          <option value="Cyan">Cyan</option>
        </select>
      </label>
      <label>
        Task:
        <select value={task} onChange={(e) => setTask(e.target.value)}>
          <option value=""></option>
          <option value="Admin">Admin</option>
          <option value="Electrical">Electrical</option>
          <option value="Navigation">Navigation</option>
          <option value="Security">Security</option>
          <option value="MedBay">MedBay</option>
          <option value="Communications">Communications</option>
          <option value="Storage">Storage</option>
          <option value="Reactor">Reactor</option>
          <option value="Oxygen">Oxygen</option>
          <option value="Weapons">Weapons</option>
        </select>
      </label>
      <button type="submit">Add Crewmate</button>
    </form>
  )
}

export default CrewmateForm
