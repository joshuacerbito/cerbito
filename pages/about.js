import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Navigation from '../components/Navigation';
import styles from '../styles/Uses.module.css';

const Uses = () => {
  return (
    <main className="is-uses">
      <Head>
        <title>Joshua Cerbito uses</title>
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
            <Link href="/">
              <a>Joshua Cerbito</a>
            </Link>
          </motion.h1>
          <Navigation />
          <motion.section
            layoutId="about"
            className={styles.content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className={styles.contentSection}>
              <h3>About</h3>
              <p>Sorry, I haven't written anything in here yet.</p>
              <p>You may wanna check me out on my socials for the meantime.</p>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
};

export default Uses;
