import { useState } from 'react'
import { addNote as addNoteAPI } from './utils/api'

function Notes() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Meeting Notes', content: 'Discuss project timeline and deliverables', date: '2024-01-15' }
  ])
  const [newNote, setNewNote] = useState({ title: '', content: '' })

  const addNote = async () => {
    if (newNote.title && newNote.content) {
      await addNoteAPI(newNote)
      setNewNote({ title: '', content: '' })
    }
  }

  return (
    <div>
      <h1>Notes App</h1>
      
      <div>
        <h2>Add Note</h2>
        <input
          type="text"
          placeholder="Note title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          placeholder="Note content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
          rows="4"
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      <div>
        <h2>My Notes</h2>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>Meeting Notes</h3>
          <p>Discuss project timeline and deliverables</p>
          <small><strong>Created:</strong> 2024-01-15</small>
        </div>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>Shopping Ideas</h3>
          <p>Need to buy new laptop, check reviews for MacBook vs ThinkPad</p>
          <small><strong>Created:</strong> 2024-01-14</small>
        </div>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>Weekend Plans</h3>
          <p>Visit the museum, try the new restaurant downtown, call mom</p>
          <small><strong>Created:</strong> 2024-01-13</small>
        </div>
      </div>
    </div>
  )
}

export default Notes