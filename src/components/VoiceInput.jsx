import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import './VoiceInput.css'; // Import the CSS file for styling

const VoiceInput = ({ onQuestionSubmit }) => {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  const handleSubmit = () => {
    onQuestionSubmit(transcript);
    resetTranscript();
  };

  return (
    <div className="voice-input">
      <p className="microphone-status">Microphone: {listening ? "on" : "off"}</p>
      <button className="voice-button" onClick={SpeechRecognition.startListening}>Start</button>
      <div className="transcription-container">
        <p className="transcription-text">{transcript}</p>
      </div>
      <button className="voice-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default VoiceInput;