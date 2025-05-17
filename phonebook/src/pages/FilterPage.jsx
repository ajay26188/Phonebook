import { useState } from 'react'

const FilterPage = ({ persons, deletePerson }) => {
  const [filterInput, setFilterInput] = useState('')
  const filtered = persons.filter(p =>
    p.name.toLowerCase().includes(filterInput.toLowerCase())
  )

  return (
    <div className="page">
      <h2>Filter Contacts</h2>
      <input
        placeholder="Search by name"
        value={filterInput}
        onChange={(e) => setFilterInput(e.target.value)}
      />
      <ul className="contacts-list">
        {filtered.map(person => (
          <li key={person.id} className="contact-item">
            <span>{person.name} - {person.number}</span>
            <button onClick={() => deletePerson(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterPage