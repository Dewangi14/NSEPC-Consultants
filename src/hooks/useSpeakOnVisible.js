import { useEffect, useRef } from "react";

const useSpeakOnVisible = (sections) => {
  const currentSection = useRef(null);
  const currentUtterance = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { text } = entry.target.dataset;

          // Section is visible
          if (entry.isIntersecting) {
            // Prevent restarting if this section is already speaking
            if (currentSection.current === entry.target) return;

            // Stop old speech
            window.speechSynthesis.cancel();

            // Mark the new section as current
            currentSection.current = entry.target;

            // Speak its text
            const utterance = new SpeechSynthesisUtterance(text);
            currentUtterance.current = utterance;
            window.speechSynthesis.speak(utterance);
          } 
          else {
            // Only stop talking if the section going out is the one currently speaking
            if (currentSection.current === entry.target) {
              window.speechSynthesis.cancel();
              currentSection.current = null;
              currentUtterance.current = null;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      if (section?.current) observer.observe(section.current);
    });

    return () => observer.disconnect();
  }, [sections]);
};

export default useSpeakOnVisible;
