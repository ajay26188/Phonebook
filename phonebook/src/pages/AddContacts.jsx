import { useState } from 'react'

const AddContact = ({ addNameNumber }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addNameNumber({ name: newName, number: newNumber })
    setNewName('')
    setNewNumber('')
  }

  return (
    <div className="page">
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>Name: <input value={newName} onChange={(e) => setNewName(e.target.value)} /></div>
        <div>Number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} /></div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddContact