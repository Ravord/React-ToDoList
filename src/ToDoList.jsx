import { useEffect, useRef, useState } from 'react'

import ToDoForm from './ToDoForm.jsx'
import ToDoEntries from './ToDoEntries.jsx'
import './style.css'
import './media.css'
import './theme.css'

export default function ToDoList() {
  let [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkMode')) || false)
  useEffect(() => localStorage.setItem('darkMode', JSON.stringify(darkMode)), [darkMode])
  let [text, setText] = useState(() => '')
  let textInput = useRef()
  let [entries, setEntries] = useState(() => JSON.parse(localStorage.getItem('entries')) || [])
  useEffect(() => localStorage.setItem('entries', JSON.stringify(entries)), [entries])
  function setDarkModeAndFocus() {
    setDarkMode(!darkMode)
    textInput.current.focus()
  }
  return (
    <div className={darkMode ? 'container dark-mode' : 'container'}>
      <button className='dark-mode-switch' onClick={setDarkModeAndFocus}>
        {darkMode ? <i className='icon-sun'></i> : <i className='icon-moon'></i>}
      </button>
      <div className='todolist'>
        <div className='title'>
          <h1>ToDoList</h1>
          <hr />
          <b>by <a href='https://github.com/Ravord/'>m_skotarek</a></b>
        </div>
        <ToDoForm text={text} setText={setText} textInput={textInput} entries={entries} setEntries={setEntries} />
        <ToDoEntries entries={entries} setEntries={setEntries} />
      </div>
    </div>
  )
}
