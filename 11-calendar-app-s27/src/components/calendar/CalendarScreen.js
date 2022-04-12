import React, { useState } from 'react'

import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es'
import { CalendarEvent } from './CalendarEvent';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveNote, eventSetActive } from '../../actions/events';
import AddNewFab from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');

const localizer = momentLocalizer(moment); // or globalizeLocalizer

// const events = [
//   {
//     // required
//     title: 'Cumpleaños del jefe 2',
//     start: moment().toDate(), //new Date() en js,
//     end: moment().add(2, 'hour').toDate(),
//     //porsonalizado
//     bgcolor: '#fafafa',
//     notes: 'comprar pan',
//     user: {
//       _id: '1234',
//       name: 'Fernando',
//     }
//   },
// ]

export const CalendarScreen = () => {

  //hooks
  const [lastView, setlastView] = useState( localStorage.getItem('lastView') || 'month');
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector( state => state.calendar );

  //eventos
  const onDoubleClick = (e) => {
    // el e es evento(title, start, end, ...);
    dispatch( uiOpenModal() )
  }

  const onSelectEvent = ( e ) => {
    // el e es evento(title, start, end, ...)
    dispatch( eventSetActive( e ) );
  }

  const onViewChange = ( e ) => {
    // el e es la vista nueva,un string: month, week, day
    setlastView(e);
    localStorage.setItem('lastView', e );
  }

  // lo que regresa esta funcion es el estilo
  const eventStyleGetter = ( event, start, end, isSelected ) => {
    const style = {
      backgroundColor: '#367cf7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white',
    }
    return {
      style
    }
  }

  const onSelectSlot = ( e ) => {
    // el e tiene fecha, action: click, bounds, etc etc
    //TODO: una funcionalidad que se podria agregar es que se abra el modal
    // de crear un nuevo event con la fecha que trae el e
    // console.log(e)
    dispatch( eventClearActiveNote() )
  }

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        //props required
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        
        // props optionals
        messages={ messages }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        // eventos
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent= { onSelectEvent }

        onView={ onViewChange }
        view={ lastView }
        
        onSelectSlot={ onSelectSlot }
        selectable={ true }
        
      />

      <AddNewFab />
      {
        (activeEvent) && <DeleteEventFab />
      }
      
      <CalendarModal />

    </div>
  )
}
