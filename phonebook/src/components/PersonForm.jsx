const PersonForm = ({ addNameNumber, newName, newNumber, nameBox, numberBox }) => {
    return (
      <form onSubmit={addNameNumber}>
        <div>Name: <input value={newName} onChange={nameBox} /></div>
        <div>Number: <input value={newNumber} onChange={numberBox} /></div>
        <div><button type="submit">add</button></div>
      </form>
    )
  }
  
  export default PersonForm
  