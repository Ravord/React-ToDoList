import { nanoid } from 'nanoid'

export default function ToDoForm({ text, setText, textInput, entries, setEntries }) {
  function send(e) {
    e.preventDefault()
    if (text) {
      setEntries([...entries, {
        id: nanoid(),
        isCompleted: false,
        value: text
      }])
      setText('')
    }
    textInput.current.focus()
  }
  return (
    <div className='formDiv'>
      <form onSubmit={send}>
        <input autoFocus onChange={(e) => setText(e.target.value)} placeholder='Enter a task here...' ref={textInput} type='text' value={text} />
        <button type='submit'>
          <i className='icon-ok-circle'></i>
        </button>
      </form>
    </div>
  )
}