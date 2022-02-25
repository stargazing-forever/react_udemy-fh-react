import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
  return (
    <div className="notes__main-content">

      <NotesAppBar />

      <div className="notes__content">
        <input 
          type="text" 
          placeholder="Some awesome title"
          className="notes__title-input"
        />
        <textarea
          placeholder="What happened today"
          className="notes__text-area"
        >
        </textarea>

        <div className="notes__image">
          <img 
            src="https://cdn.dribbble.com/users/1803663/screenshots/11400179/media/25558ede8bcb553fd48d7ed339e136ee.png?compress=1&resize=400x300&vertical=top" 
            alt="paisaje" 
          />
        </div>
      </div>


    </div>
  )
}

export default NoteScreen
