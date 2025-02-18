import { useEffect, useState } from "react";
import Camera from "./components/Camera";
import VoiceInput from "./components/VoiceInput";
import TextToSpeech from "./components/TextToSpeech";
import { askMoonDream } from "./utils/api";
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState(null);

  const handleQuestionSubmit = async (question) => {
    // Capture the image from the webcam
    const webcam = document.querySelector("video");
    const canvas = document.createElement("canvas");
    canvas.width = webcam.videoWidth;
    canvas.height = webcam.videoHeight;
    canvas.getContext("2d").drawImage(webcam, 0, 0);

    // Convert the image to base64
    const imageBase64 = canvas.toDataURL("image/jpeg").split(",")[1]; // Extract base64 string

    // Call the Moon Dream API
    const response = await askMoonDream(imageBase64, question);
    setAnswer(response);
  };

  // Automatically play the answer when it changes
  useEffect(() => {
    if (answer) {
      const utterance = new SpeechSynthesisUtterance(answer);
      window.speechSynthesis.speak(utterance);
    }
  }, [answer]);

  return (
    <div className="app-container">
      <h1 className="app-title">Blind Assistant</h1>
      <div className="camera-container">
        <Camera />
      </div>
      <div className="voice-input-container">
        <VoiceInput onQuestionSubmit={handleQuestionSubmit} />
      </div>
      {answer && <p className="answer-text">Answer: {answer}</p>}
    </div>
  );
};

export default App;