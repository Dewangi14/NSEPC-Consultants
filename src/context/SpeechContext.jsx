"use client";
import { createContext, useContext, useState } from "react";

const SpeechContext = createContext();

export const SpeechProvider = ({ children }) => {
  const [speechEnabled, setSpeechEnabled] = useState(false);

  const toggleSpeech = () => {
    setSpeechEnabled((prev) => {
      if (prev === true) {
        // If user is turning OFF → immediately stop speaking
        window.speechSynthesis.cancel();
      }
      return !prev;
    });
  };

  return (
    <SpeechContext.Provider value={{ speechEnabled, toggleSpeech }}>
      {children}
    </SpeechContext.Provider>
  );
};

export const useSpeech = () => useContext(SpeechContext);
