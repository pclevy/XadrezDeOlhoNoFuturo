import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import XadrezUERJ from "../../assets/XadrezUERJ.png";

function ImagemZoomHP() {
  return (
    <Zoom>
      <img
        src={XadrezUERJ}
        alt="site Xadrez UERJ, 2010"
        title="site Xadrez UERJ, 2010"
        loading="lazy"
        style={{
          width: "200px",
          maxWidth: "50%",
          height: "auto",
          cursor: "zoom-in",
          borderRadius: "8px",
        }}
      />
    </Zoom>
  );
}

export default ImagemZoomHP;
