import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SpeechProvider } from "@/context/SpeechContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SpeechProvider>
      <div className="fixed top-0 w-full z-10">
        <Header />
      </div>
      <Component {...pageProps} />
      {/* Header */}
      <div className="bottom-0 w-full z-10">
        <Footer />
      </div>
      </SpeechProvider>
    </>
  );
}
