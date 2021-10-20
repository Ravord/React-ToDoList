export default function ToDoEntries({ entries, setEntries }) {
  function editOnBlur(e, id, prevValue) {
    setEntries(entries.map((elem) => {
      if (elem.id === id) {
        if (e.target.value) {
          return { ...elem, value: e.target.value }
        }
        return { ...elem, value: prevValue }
      }
      return elem
    }))
  }
  function toggleMark(id) {
    setEntries(entries.map((elem) => {
      if (elem.id === id) {
        return { ...elem, isCompleted: !elem.isCompleted }
      }
      return elem
    }))
  }
  function remove(id) {
    setEntries(entries.filter((elem) => elem.id !== id))
  }
  return (
    <div>
      <ul>
        {
          entries.map((elem) => {
            return (
              <li key={elem.id}>
                <input className={elem.isCompleted ? 'completed' : null} defaultValue={elem.value} onBlur={(e) => editOnBlur(e, elem.id, elem.value)} placeholder={elem.value} type='text' />
                <button onClick={() => toggleMark(elem.id)}>
                  {elem.isCompleted ? <i className='icon-check'></i> : <i className='icon-check-empty'></i>}
                </button>
                <button onClick={() => remove(elem.id)}>
                  <i className='icon-trash'></i>
                </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}