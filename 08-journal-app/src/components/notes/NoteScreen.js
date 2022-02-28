import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notesActions';
import useForm from '../../hooks/useForm';
import NotesAppBar from './NotesAppBar'

// react-journal-curso
const NoteScreen = () => {
  //hooks
  const { active: note } = useSelector( state => state.notes );
  const {formValues, handleChange, resetForm } = useForm(note);
  const {title, body } = formValues;
  const activeId =  useRef(note.id);
  const activeUrl = useRef(note.url);
  const dispatch = useDispatch();

  useEffect(() => {
    if(note.id !== activeId.current ){
      resetForm(note);
      activeId.current = note.id;
    }
    if(note.url !== activeUrl.current) {
      resetForm(note);
      activeUrl.current = note.url;
    }

  }, [note, resetForm]);

  useEffect(() => {
    dispatch( activeNote(formValues.id, {...formValues}) );
  }, [formValues, dispatch])

  //functions
  const handleDelete = () => {
    dispatch(startDeleting( note.id ))
  }


  return (
    <div className="notes__main-content">

      <NotesAppBar />

      <div className="notes__content">
        <input 
          type="text" 
          placeholder="Some awesome title"
          className="notes__title-input"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <textarea
          placeholder="What happened today"
          className="notes__text-area"
          name="body"
          value={body}
          onChange={handleChange}

        >
        </textarea>

        {
          note.url &&
          (
            <div className="notes__image">
              <img 
                src={note.url}
                alt="paisaje" 
              />
            </div>
          )
        }

      </div>

        <button
          className="btn btn-danger"
          onClick={handleDelete}
        >
          Delete
        </button>
    </div>
  )
}

export default NoteScreen
