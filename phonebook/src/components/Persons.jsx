import './Persons.css'

const Persons = ({ persons, filterInput, deletePerson }) => {
  const filteredPersons = filterInput
    ? persons.filter(p =>
        p.name.toLowerCase().includes(filterInput.toLowerCase())
      )
    : persons

  return (
    <ul className="persons-list">
      {filteredPersons.map(person => (
        <li key={person.id} className="person-item">
          <div className="person-info">
            {person.name} {person.number}
          </div>
          <button onClick={() => deletePerson(person.id)}>delete</button>
        </li>
      ))}
    </ul>
  )
}

export default Persons
