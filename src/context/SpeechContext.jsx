import { createContext, useContext, useState } from "react";

const SpeechContext = createContext();

export const SpeechProvider = ({ children }) => {
  const [speechEnabled, setSpeechEnabled] = useState(false);

  const toggleSpeech = () => {
    setSpeechEnabled((prev) => {
      const next = !prev;
  
      if (next === true) {
        // UNLOCK SPEECH WITH USER GESTURE
        const unlock = new SpeechSynthesisUtterance(" ");
        unlock.volume = 0; // silent
        window.speechSynthesis.speak(unlock);
      } else {
        window.speechSynthesis.cancel();
      }
  
      return next;
    });
  };
  

  return (
    <SpeechContext.Provider value={{ speechEnabled, toggleSpeech }}>
      {children}
    </SpeechContext.Provider>
  );
};

export const useSpeech = () => useContext(SpeechContext);
