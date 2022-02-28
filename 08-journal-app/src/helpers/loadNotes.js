import {db} from '../firebase/firebase-config';

export const loadNotes = async( uid ) => {
  const notes = [];

  const snap = await db.collection(`${uid}/journal/notes`)
                        .orderBy('date', 'desc')
                        .orderBy('title', 'asc')
                        .get();
  snap.forEach( snapchild => {
    notes.push({
      id: snapchild.id,
      ...snapchild.data(),
    })
  });
  console.log(notes)
  return notes;

  

}