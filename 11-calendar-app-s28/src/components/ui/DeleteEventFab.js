import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2';
import { eventStartDelete } from '../../actions/events';

export const DeleteEventFab = () => {

  const dispatch = useDispatch();

  const handleDelete = () => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch( eventStartDelete() );
        Swal.fire(
          'Deleted!',
          'Your event has been deleted.',
          'success'
        )
      }
    });

  }
  return (
    <button
      className="btn btn-danger fab-danger"
      onClick={ handleDelete }
    >
      <i className="fas fa-trash"></i>
      <span> Borrar evento</span>
    </button>
  )
}
