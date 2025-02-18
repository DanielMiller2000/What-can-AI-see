import { useSpeechSynthesis } from "react-speech-kit";

const TextToSpeech = ({ text }) => {
  const { speak } = useSpeechSynthesis();

  return (
    <div>
      <button onClick={() => speak({ text })}>Play Answer</button>
    </div>
  );
};

export default TextToSpeech;