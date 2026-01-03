// import { useEffect, useRef } from "react";
// import { useSpeech } from "@/context/SpeechContext";

// const useSpeakOnVisible = (sections) => {
//   const currentSection = useRef(null);
//   const currentUtterance = useRef(null);
//   const { speechEnabled } = useSpeech();

//   const voiceRef = useRef(null); // final selected voice (Aaron or fallback)

//   useEffect(() => {
//     const loadVoices = () => {
//       const voices = window.speechSynthesis.getVoices();
//       if (!voices.length) return;

//       // Pick Aaron first
//       let selected =
//         voices.find((v) => v.name === "Samantha" && v.lang === "en-US") ||

//         // Fallback 1: Browser's default initial voice (same as earlier)
//         voices.find((v) => v.default) ||

//         // Fallback 2: any English voice
//         voices.find((v) => v.lang && v.lang.startsWith("en")) ||

//         // Fallback 3: first available voice
//         voices[0];

//       voiceRef.current = selected;
//     };

//     loadVoices();
//     window.speechSynthesis.onvoiceschanged = loadVoices;
//     return () => { window.speechSynthesis.onvoiceschanged = null; };
//   }, []);

//   useEffect(() => {
//     // 🔥 SPEAK CURRENT SECTION IMMEDIATELY WHEN SPEECH IS ENABLED
// if (speechEnabled) {
//   sections.forEach((section) => {
//     const el = section?.current;
//     if (!el || !el.dataset?.text) return;

//     const rect = el.getBoundingClientRect();

//     // Check if section is centered in viewport
//     const isVisible =
//       rect.top < window.innerHeight * 0.5 &&
//       rect.bottom > window.innerHeight * 0.5;

//     if (isVisible) {
//       window.speechSynthesis.cancel();

//       currentSection.current = el;

//       const utterance = new SpeechSynthesisUtterance(el.dataset.text);

//       // Apply your global voice config
//       if (voiceRef.current) utterance.voice = voiceRef.current;
//       utterance.rate = 0.5;
//       utterance.pitch = 1.1;

//       currentUtterance.current = utterance;
//       window.speechSynthesis.speak(utterance);
//     }
//   });
// }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const { text } = entry.target.dataset;
//           if (!text || !text.trim()) return;

//           if (speechEnabled === false) {
//             window.speechSynthesis.cancel();
//             return;
//           }

//           if (entry.isIntersecting) {
//             if (currentSection.current === entry.target) return;

//             window.speechSynthesis.cancel();
//             currentSection.current = entry.target;

//             const utterance = new SpeechSynthesisUtterance(text);

//             // Apply voice + speech settings
//             if (voiceRef.current) utterance.voice = voiceRef.current;
//             utterance.rate = 0.5;
//             utterance.pitch = 1.1;

//             currentUtterance.current = utterance;
//             window.speechSynthesis.speak(utterance);
//           } else {
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
//   }, [sections, speechEnabled]);
// };

// export default useSpeakOnVisible;

import { useEffect, useRef } from "react";
import { useSpeech } from "@/context/SpeechContext";

const useSpeakOnVisible = (sections) => {
  const currentSection = useRef(null);
  const currentUtterance = useRef(null);
  const voicesRef = useRef([]);
  const observerRef = useRef(null);

  const { speechEnabled } = useSpeech();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 🔹 Load voices safely (Chrome loads async)
    const loadVoices = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  useEffect(() => {
    if (!speechEnabled) {
      window.speechSynthesis.cancel();
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const text = entry.target.dataset?.text;
          if (!text) return;

          // 🔹 Stop if speech disabled mid-way
          if (!speechEnabled) {
            window.speechSynthesis.cancel();
            return;
          }

          if (entry.isIntersecting) {
            if (currentSection.current === entry.target) return;

            window.speechSynthesis.cancel();
            currentSection.current = entry.target;

            const utterance = new SpeechSynthesisUtterance(text);

            // 🔊 Voice: Aaron (en-US) → fallback to default
            const aaronVoice = voicesRef.current.find(
              (v) =>
                v.name.toLowerCase().includes("samantha") &&
                v.lang === "en-US"
            );

            utterance.voice = aaronVoice || voicesRef.current[0] || null;
            utterance.rate = 0.5;
            utterance.pitch = 1.1;

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

    // 🔹 SAFELY observe refs OR elements
    sections.forEach((el) => {
      const node = el?.current ?? el;
      if (node instanceof Element) {
        observerRef.current.observe(node);
      }
    });

    return () => {
      observerRef.current?.disconnect();
      window.speechSynthesis.cancel();
    };
  }, [sections, speechEnabled]);
};

export default useSpeakOnVisible;
