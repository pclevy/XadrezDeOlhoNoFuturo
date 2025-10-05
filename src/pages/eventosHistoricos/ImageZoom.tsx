//import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
//import ZoomImg from '../../assets/Mecking_Levy.jpg';

function ImagemZoom() {

  return (
    //<Zoom>
      <img
        //src = {ZoomImg}
        src = '../../assets/Mecking_Levy.jpg'
        alt="Mecking / Levy"
        width="100"
        style={{ cursor: 'zoom-in' }}
      />
    //</Zoom>
  );
}

export default ImagemZoom;