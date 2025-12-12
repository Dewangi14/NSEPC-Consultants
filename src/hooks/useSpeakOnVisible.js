// import { useEffect, useRef } from "react";
// import { useSpeech } from "@/context/SpeechContext";

// const useSpeakOnVisible = (sections) => {
//   const currentSection = useRef(null);
//   const currentUtterance = useRef(null);
//   const { speechEnabled } = useSpeech(); // NEW

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const { text } = entry.target.dataset;

//           // 🔹 If speech disabled → cancel & do nothing
//           if (!speechEnabled) {
//             window.speechSynthesis.cancel();
//             return;
//           }

//           // 🔹 Section becomes visible
//           if (entry.isIntersecting) {
//             // Prevent restarting if same section
//             if (currentSection.current === entry.target) return;

//             window.speechSynthesis.cancel();

//             currentSection.current = entry.target;

//             const utterance = new SpeechSynthesisUtterance(text);
//             currentUtterance.current = utterance;
//             window.speechSynthesis.speak(utterance);
//           } 
//           else {
//             // 🔹 Stop only if THIS section was speaking
//             if (currentSection.current === entry.target) {
//               window.speechSynthesis.cancel();
//               currentSection.current = null;
//               currentUtterance.current = null;
//             }
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     sections.forEach((section) => {
//       if (section?.current) observer.observe(section.current);
//     });

//     return () => observer.disconnect();
//   }, [sections, speechEnabled]); // NEW DEPENDENCY
// };

// export default useSpeakOnVisible;



import { useEffect, useRef } from "react";
import { useSpeech } from "@/context/SpeechContext";

const useSpeakOnVisible = (sections) => {
  const currentSection = useRef(null);
  const currentUtterance = useRef(null);
  const { speechEnabled } = useSpeech();

  const voiceRef = useRef(null); // final selected voice (Aaron or fallback)

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return;

      // Pick Aaron first
      let selected =
        voices.find((v) => v.name === "Aaron" && v.lang === "en-US") ||

        // Fallback 1: Browser's default initial voice (same as earlier)
        voices.find((v) => v.default) ||

        // Fallback 2: any English voice
        voices.find((v) => v.lang && v.lang.startsWith("en")) ||

        // Fallback 3: first available voice
        voices[0];

      voiceRef.current = selected;
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => { window.speechSynthesis.onvoiceschanged = null; };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { text } = entry.target.dataset;

          if (!speechEnabled) {
            window.speechSynthesis.cancel();
            return;
          }

          if (entry.isIntersecting) {
            if (currentSection.current === entry.target) return;

            window.speechSynthesis.cancel();
            currentSection.current = entry.target;

            const utterance = new SpeechSynthesisUtterance(text);

            // Apply voice + speech settings
            if (voiceRef.current) utterance.voice = voiceRef.current;
            utterance.rate = 0.6;
            utterance.pitch = 0.9;

            currentUtterance.current = utterance;
            window.speechSynthesis.speak(utterance);
          } else {
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
  }, [sections, speechEnabled]);
};

export default useSpeakOnVisible;
