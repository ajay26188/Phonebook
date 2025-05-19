import { useState } from 'react'
import './FilterPage.css'

const FilterPage = ({ persons, deletePerson }) => {
  const [filterInput, setFilterInput] = useState('')

  const filtered = persons.filter(p =>
    p.name.toLowerCase().includes(filterInput.toLowerCase())
  )

  return (
    <div className="filter-page">
      <h2>🔍 Filter Contacts</h2>
      <input
        className="filter-input"
        placeholder="Search by name..."
        value={filterInput}
        onChange={(e) => setFilterInput(e.target.value)}
      />

      {filtered.length === 0 ? (
        <p className="no-matches">No contacts found for "{filterInput}"</p>
      ) : (
        <ul className="contacts-list">
          {filtered.map(person => (
            <li key={person.id} className="contact-card">
              <div className="contact-info">
                <span className="contact-name">{person.name}</span>
                <span className="contact-number">📞 {person.number}</span>
              </div>
              <button
                className="delete-button"
                onClick={() => deletePerson(person.id)}
              >
                ❌ Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FilterPage
