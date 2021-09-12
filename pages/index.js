import Head from 'next/head';
import parse from 'html-react-parser';
import { motion } from 'framer-motion';

import Navigation from '../components/Navigation';
import styles from '../styles/Home.module.css';

export default function Home({ title, subtitle }) {
  return (
    <main>
      <Head>
        <title>{title}</title>
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
            {parse(title)}
          </motion.h1>
          <motion.h2
            className={styles.subHeading}
            layoutId="subHeading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {parse(subtitle)}
          </motion.h2>
          <Navigation />
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Joshua Cerbito',
      subtitle: `I write code, I train devs,<br />and I play music`,
    },
  };
}
