import moment from 'moment';
import 'moment/locale/es';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notesActions';
moment.locale('es');

const NotesAppBar = () => {
  const today = moment();

  //hooks
  const dispatch = useDispatch();
  const {active} = useSelector( state => state.notes );

  //functions
  const handleSave = () => {
    dispatch(startSaveNote( active ))
  }

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
  }

  const handleFileChange = (e) => {
    console.log(e);
    const file = e.target.files[0];
    if(file) {
      dispatch( startUploading(file) );
    }
    document.querySelector('#fileSelector').value = '';
  }


  
  return (
    <div className="notes__appbar"> 
      <span>{ today.format('D')} de { today.format('MMMM YYYY')} </span>
      <input 
        id="fileSelector" 
        type="file" 
        style={{display: 'none'}}
        name="file"
        onChange={handleFileChange}
      />
      <div>
        <button 
          className="btn"
          onClick={handlePictureClick}
        >
          Picture
        </button>

        <button 
          className="btn"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default NotesAppBar
