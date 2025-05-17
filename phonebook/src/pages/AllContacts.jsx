import './AllContacts.css'

const AllContacts = ({ persons, deletePerson }) => (
  <div className="page">
    <h2>All Contacts</h2>
    <ul className="contacts-list">
      {persons.map(person => (
        <li key={person.id} className="contact-item">
          <span>{person.name} - {person.number}</span>
          <button onClick={() => deletePerson(person.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
)

export default AllContacts