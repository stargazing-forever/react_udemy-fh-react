import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";

// SYNCHRONOUS ACTIONS
const eventAddNew = ( event ) => ({
  type: types.eventAddNew,
  payload: event,
})

export const eventSetActive = ( event ) => ({
  type: types.eventSetActive,
  payload: event,
})

export const eventClearActiveNote = () => ({
  type: types.eventClearActiveEvent,
});

const eventUpdated = ( event ) => ({
  type: types.eventUpdated,
  payload: event,
});

const eventDeleted = () => ({ type: types.eventDeleted });

const eventLoaded = ( events ) => ({
  type: types.eventLoaded,
  payload: events,
});

export const eventLogout = () => ({
  type: types.eventLogout,
});

// ASYNCHRONOUS ACTIONS
export const eventStartAddNew = ( event ) => {
  return async( dispatch, getState ) => {

    const { uid, name } = getState().auth;

    try {
      const resp = await fetchConToken( 'events', event, 'POST');
      const body = await resp.json();
  
      if( body.ok ) {
        event.id = body.evento.id;
        event.usuario = {
          _id: uid,
          name,
        }
        dispatch( eventAddNew( event ) );
      }
      
    } catch (err) {
      console.log( err )
    }
    
  }
}

export const eventStartLoading = () => {
  return async( dispatch ) => {
    // la informacion del backend (incluido populate) del 
    //evento debe ser igual a la forma del estado del evento del front
    try {
      const resp = await fetchConToken('events');
      const body = await resp.json();

      const events = prepareEvents( body.eventos );
      dispatch( eventLoaded( events ) );
    } catch (err) {
      console.log( err );
    }
  }
}

export const eventStartUpdate = ( event ) => {
  return async( dispatch ) => {
    try {
      // console.log( event )
      const resp = await fetchConToken( `events/${ event.id }`, event, 'PUT');
      const body = await resp.json();

      if( body.ok ) {
        dispatch( eventUpdated( event ) );
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (err) {
      console.log( err )
    }
  }
}

export const eventStartDelete = () => {
  return async( dispatch, getState ) => {
    const { id } = getState().calendar.activeEvent;
    try {
      const resp = await fetchConToken( `events/${ id }`, {}, 'DELETE');
      const body = await resp.json();

      if( body.ok ) {
        dispatch( eventDeleted() );
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (err) {
      console.log( err )
    }
  }
}