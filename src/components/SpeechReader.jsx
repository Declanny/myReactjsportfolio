// src/components/SpeechReader.js
import PropTypes from "prop-types"


const SpeechReader = ({ text }) => {
  const readText = () => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US'; // Adjust language if needed
    window.speechSynthesis.speak(speech);
  };

  return (
    <button onClick={readText} className="speech-button">
      📢 Listen
    </button>
  );
};

SpeechReader.propTypes = {
  text: PropTypes.any
}

export default SpeechReader;
