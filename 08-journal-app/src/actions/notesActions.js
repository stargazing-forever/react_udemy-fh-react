import Swal from 'sweetalert2';

import { db } from '../firebase/firebase-config'
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

/* ************************************************ */
////////////////////action asincronos/////////////////
/* ************************************************ */

export const startNewNote = () => {
  return async( dispatch, getState ) => {
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }
    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
    dispatch(activeNote(doc.id, newNote));
    dispatch(addNewNote(doc.id, newNote));
    console.log(doc)
  }
}

export const startLoadingNotes= ( uid ) => {
  return async( dispatch) => {
    const notes = await loadNotes( uid );
    dispatch(setNotes(notes));
  }
}

export const startSaveNote = (note) => {
  return async(dispatch, getState) => {
    const { uid } = getState().auth;
    const noteToFirestore = {...note};
    delete noteToFirestore.id;
    if (!note.url) {
      delete noteToFirestore.url;
    }
    await db.doc(`/${uid}/journal/notes/${note.id}`)
      .update(noteToFirestore);
    // await db.collection(`/${uid}/journal/notes/`).doc(id)
    //   .update(noteToFirestore)
    //ambos funcionan, de fernando descomentado    

    dispatch(refreshNote(note.id, note));
    Swal.fire('Saved', note.title, 'success');
  }
}

export const startUploading = ( file ) => {
  return async(dispatch, getState) => {
    const { active: activeNote} = getState().notes;

    Swal.fire({
      title: "Uploading...",      
      text: "Please wait...",       
      showConfirmButton: false,       
      allowOutsideClick: false,       
        willOpen: () => {         
        Swal.showLoading();       
        },     
      });

    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;
    dispatch(startSaveNote(activeNote));
    Swal.close();
  }
}  

export const startDeleting = ( id ) => {
  return async( dispatch, getState ) => {
    const {uid} = getState().auth;
    await db.doc(`/${uid}/journal/notes/${id}`).delete();

    dispatch(deleteNote(id))
  }
} 

/* ************************************************ */
////////////////actions sincronos ////////////////////
/* ************************************************* */

export const activeNote = ( id, note ) =>  ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  }
});

export const setNotes = ( notes ) => ({
  type: types.notesLoad,
  payload: [...notes],
});

export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id,
})

export const notesLogout = () => ({
  type: types.notesLogoutCleaning,
})

// con esta action  despues de hacer un cambio en la bd
//simplemente lo refrescamos en nuestro estado por que ya sabesmos
// que se agrego correctamente en la bd,
// si volvemos a leer todos los todos con startLoadingNotes
// tendriamos que esperar dos llamadas asincronas para actualizar 
// la lista de los entries, ademas se repetiria el 99% de la info
// en la lista de entris.
// Traer todas los entries de la db es solo al inicio de la app.
export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note,
  }
});

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    ...note,
    id
  }
})