
import { types } from "../types/types";

// {
//   // required
//   title: 'Cumpleaños del jefe 2',
//   start: moment().toDate(), //new Date() en js,
//   end: moment().add(2, 'hour').toDate(),
//   //porsonalizado
//   id: new Date().getTime(),
//   bgcolor: '#fafafa',
//   notes: 'comprar pan',
//   user: {
//     _id: '1234',
//     name: 'Fernando',
//   }
// },

const initialState = {
  events: [],
  activeEvent: null,
}

export const calendarReducer = ( state = initialState, action ) => {
  switch ( action.type ) {

    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload ],
      }
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      }

    case types.eventClearActiveEvent:
      return {
        ...state,
        activeEvent: null,
      }

    case types.eventUpdated:
      return {
        ...state,
        events: state.events.map( 
          e => ( e.id === action.payload.id ? action.payload : e )
        )
      }
    case types.eventDeleted:
      return {
        ...state,
        events: state.events.filter( 
          e => ( e.id !== state.activeEvent.id )
        ),
        activeEvent: null,
      }
    
    case types.eventLoaded:
      return {
        ...state,
        events: [ ...action.payload ],
      }
    
    case types.eventLogout:
      return {
        ...initialState,
      }
    
    default:
      return state;
  }
}