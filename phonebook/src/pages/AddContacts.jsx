import { useState } from 'react'
import './AddContact.css'

const AddContact = ({ addNameNumber }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newName.trim() === '' || newNumber.trim() === '') return
    addNameNumber({ name: newName, number: newNumber })
    setNewName('')
    setNewNumber('')
  }

  return (
    <div className="add-contact-page">
      <h2>📇 Add a New Contact</h2>
      <p className="intro">
        Keep your network growing — add people you care about. Just enter a name and number!
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="e.g. John Doe"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </label>

        <label>
          Number:
          <input
            type="tel"
            placeholder="e.g. +1 234 567 890"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </label>

        <button type="submit">➕ Add Contact</button>
      </form>

      <div className="fake-contacts">
        <h4>💡 Example Contacts</h4>
        <ul>
          <li>Alice Winters – +44 7911 123456</li>
          <li>Rajesh Patel – +91 90000 12345</li>
          <li>Sophie Laurent – +33 612 345 678</li>
        </ul>
      </div>
    </div>
  )
}

export default AddContact
