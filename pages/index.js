import Head from "next/head";
import { motion } from "framer-motion";

import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Joshua Cerbito</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className={styles.centered}>
          <motion.h1
            className={styles.heading}
            layoutId="heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Joshua Cerbito
          </motion.h1>
          <motion.h2
            className={styles.subHeading}
            layoutId="subHeading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            I write code, I train devs, <br />
            and I play music
          </motion.h2>
          <Navigation />
        </div>
      </div>
    </main>
  );
}
