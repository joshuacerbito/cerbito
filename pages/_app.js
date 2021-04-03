import "../styles/globals.css";
import { AnimateSharedLayout } from "framer-motion";
import ParticleBG from "../components/ParticleBG";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
      <ParticleBG />
    </AnimateSharedLayout>
  );
}

export default MyApp;
