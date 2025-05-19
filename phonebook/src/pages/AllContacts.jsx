import './AllContacts.css'

const AllContacts = ({ persons, deletePerson }) => {
  return (
    <div className="all-contacts-page">
      <h2>📒 All Contacts</h2>
      {persons.length === 0 ? (
        <p className="no-contacts">No contacts available. Add some to get started!</p>
      ) : (
        <ul className="contacts-list">
          {persons.map(person => (
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

export default AllContacts
