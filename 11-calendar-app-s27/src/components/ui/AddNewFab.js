//floating action button

import { useDispatch } from 'react-redux';
import { eventClearActiveNote } from '../../actions/events';

import { uiOpenModal } from '../../actions/ui';

const AddNewFab = () => {

  // hooks
  const dispatch = useDispatch();


  //functions
  const handleClickNew = () => {
    dispatch( uiOpenModal() );
    dispatch( eventClearActiveNote() )
  }
  return (
    <button
      className="btn btn-primary fab"
      onClick={ handleClickNew}
    >
      <i className="fas fa-plus"></i>
    </button>
  )
}

export default AddNewFab
