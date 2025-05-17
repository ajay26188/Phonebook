const Filter = ({ filterInput, filterBox }) => {
    return (
      <div>
        Search by name: <input value={filterInput} onChange={filterBox} />
      </div>
    )
  }
  
  export default Filter
  