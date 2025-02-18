import Webcam from "react-webcam";
import './Camera.css'; // Import the CSS file for styling

const Camera = () => {
  return (
    <div className="camera">
      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default Camera;