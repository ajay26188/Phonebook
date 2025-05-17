import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddContact from './pages/AddContacts'
import AllContacts from './pages/AllContacts'
import FilterPage from './pages/FilterPage'
import About from './pages/About'
import { useState, useEffect } from 'react'
import Notification from './components/Notification'
import Footer from './components/Footer'

const App = () => {

  const [persons, setPersons] = useState(() => {
    const saved = localStorage.getItem('phonebookContacts')
    return saved ? JSON.parse(saved) : [
      { name: 'Arto Hellas', number: '040-123456', id: '1' },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: '2' },
      { name: 'Dan Abramov', number: '12-43-234345', id: '3' },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: '4' }
    ]
  })

  useEffect(() => {
    localStorage.setItem('phonebookContacts', JSON.stringify(persons))
  }, [persons])
  
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  const displayMessage = (msg, type = 'success') => {
    setMessage(msg)
    setMessageType(type)
    setTimeout(() => setMessage(''), 3000)
  }

  const addNameNumber = (newPerson) => {
    const exists = persons.find(p => p.name === newPerson.name)
    if (exists) {
      const confirmUpdate = confirm(`${newPerson.name} is already in the phonebook. Replace the old number?`)
      if (confirmUpdate) {
        const updatedPersons = persons.map(p =>
          p.name === newPerson.name ? { ...p, number: newPerson.number } : p
        )
        setPersons(updatedPersons)
        displayMessage(`Updated ${newPerson.name}`)
      }
    } else {
      const id = (Math.max(...persons.map(p => parseInt(p.id))) + 1).toString()
      const personToAdd = { ...newPerson, id }
      setPersons([...persons, personToAdd])
      displayMessage(`Added ${newPerson.name}`)
    }
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    if (confirm(`Delete ${person.name}?`)) {
      setPersons(persons.filter(p => p.id !== id))
      displayMessage(`Deleted ${person.name}`, 'error')
    }
  }

  return (
    <div className="app-container">
      <Navbar />
      <Notification message={message} messageType={messageType} />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddContact addNameNumber={addNameNumber} />} />
          <Route path="/contacts" element={<AllContacts persons={persons} deletePerson={deletePerson} />} />
          <Route path="/filter" element={<FilterPage persons={persons} deletePerson={deletePerson} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
  
      <Footer />
    </div>
  )
}

export default App
