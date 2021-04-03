import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

import Navigation from "../components/Navigation";
import styles from "../styles/Uses.module.css";

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
            layoutId="content"
            className={styles.content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className={styles.contentSection}>
              <p className="tac m0">
                Here are the tools that I use on a daily basis.
              </p>
            </div>
            <div className={styles.contentSection}>
              <h3>Editor &amp; Terminal</h3>
              <ul>
                <li>
                  <p>
                    <a href="https://code.visualstudio.com/" target="_blank">
                      Visual Studio Code
                    </a>{" "}
                    is my current editor which I switched to in 2018 after years
                    of using{" "}
                    <a href="https://atom.io/" target="_blank">
                      Atom
                    </a>
                    .
                  </p>
                </li>
                <li>
                  <p>
                    I currently use{" "}
                    <a href="https://iterm2.com/" target="_blank">
                      iTerm 2
                    </a>{" "}
                    when I'm on macOS, and{" "}
                    <a href="https://aka.ms/terminal" target="_blank">
                      Windows Terminal
                    </a>{" "}
                    when I'm on Windows.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://github.com/tonsky/FiraCode"
                      target="_blank"
                    >
                      Fira Code
                    </a>{" "}
                    is the font that I'm currently using, although I like to
                    switch it up often. My other favorites are{" "}
                    <a
                      href="https://www.typography.com/fonts/operator/styles"
                      target="_blank"
                    >
                      Operator Mono
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.jetbrains.com/lp/mono/"
                      target="_blank"
                    >
                      JetBrains Mono
                    </a>
                    .
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.contentSection}>
              <h3>Desk Setup</h3>
              <ul>
                <li>
                  <p>
                    I used to work exclusively on a mac, but I recently built a
                    rather capable PC so I decided to try to make Windows work
                    (mainyl to justify its cost 😂). Here's a short spec list:
                    <ul>
                      <li>CPU: Ryzen 7 5800x</li>
                      <li>GPU: Nvidia RTX 3070</li>
                      <li>RAM: 2 x 8GB @3200MHz</li>
                      <li>Storage: A total of 1.2TB of SSD</li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    My Macbook Pro is an early 2015 13-inch model. I'd argue
                    that except for the upcoming M1 models, the 2015 model's
                    where it's at in terms of portable macOS computing.
                  </p>
                </li>
                <li>
                  <p>
                    Both machines are plugged into a ViewSonic VX2718 27" 144hz
                    curved display.
                  </p>
                </li>
                <li>
                  <p>
                    I switch between 3 keyboards depending on what I'm doing.
                    The one that I use the most is a Keychron K8 (Gateron Blue).
                    For longer typing/coding sessions, I use a Magicforce-68
                    (Cherry Brown). And for intense gaming sessions, I use a
                    Razer Blackwidow Chroma TE (Razer Greens).
                  </p>
                </li>
                <li>
                  <p>
                    The mouse that I've been using for a year now is a Logitech
                    M720 Triathlon. I keep telling myself that I don't need a
                    Logitech MX Masters 3, but I really, really want one.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.contentSection}>
              <h3>Audio + Video</h3>
              <ul>
                <li>
                  <p>
                    My system's audio revolves around a Native Instruments
                    Komplete Audio 6 USB Interace.
                  </p>
                </li>
                <li>
                  <p>
                    The mic I use is an Audio Technica ATR2500 USB mic, which
                    for some reason, only gets recognized by Windows and Mac as
                    "Advanced USB Audio Device". 🤷‍♂️
                  </p>
                </li>
                <li>
                  <p>
                    I also like to swap earphones/headphones depending on the
                    use-case. The one that's almost always plugged in is a pair
                    of TFZ-T2's, but I like to swap it with either a pair of KZ
                    ZS10's or an Audio-Technica ATH-M40x when I'm recording or
                    mixing music.
                  </p>
                </li>
                <li>
                  <p>
                    The Webcam I use is{" "}
                    <a href="https://obsproject.com/" target="_blank">
                      OBS
                    </a>
                    's{" "}
                    <a
                      href="https://obsproject.com/forum/resources/obs-virtualcam.949/"
                      target="_blank"
                    >
                      Virtual Camera
                    </a>
                    , powered by a Logitech C615.
                  </p>
                </li>
                <li>
                  <p>
                    I use my wife's{" "}
                    <a
                      href="https://fujifilm-x.com/global/products/cameras/x-t20/"
                      target="_blank"
                    >
                      Fuji XT-20
                    </a>{" "}
                    (equipped with a Fujinon 35mm F1.4 lens) whenever I need to
                    shoot higher resolution videos.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.contentSection}>
              <h3>Desktop Apps</h3>
              <ul>
                <li>
                  <p>
                    I use{" "}
                    <a href="https://habitica.com/" target="_blank">
                      Habitica
                    </a>{" "}
                    (as an installed Desktop Web App) for managing my tasks and
                    habits.
                  </p>
                </li>
                <li>
                  <p>
                    I'm a huge{" "}
                    <a href="https://www.alfredapp.com/" target="_blank">
                      Alfred
                    </a>
                    , and I'm glad that{" "}
                    <a
                      href="https://github.com/microsoft/PowerToys"
                      target="_blank"
                    >
                      Microsoft PowerToys
                    </a>{" "}
                    exists for Windows.
                  </p>
                </li>
                <li>
                  <p>
                    I design almost entirely in{" "}
                    <a href="https://www.figma.com/" target="_blank">
                      Figma
                    </a>
                    .
                  </p>
                </li>
                <li>
                  <p>
                    My Digital Audio Workstation right now is{" "}
                    <a href="https://www.reaper.fm/" target="_blank">
                      Reaper
                    </a>
                    , although I'm still getting used to it since I've been
                    using Logic Pro and Garageband since 2013.
                  </p>
                </li>
                <li>
                  <p>
                    I edit my videos using{" "}
                    <a href="https://www.blackmagicdesign.com/products/davinciresolve/">
                      Davinci Resolve 17
                    </a>
                    .
                  </p>
                </li>
              </ul>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
};

export default Uses;
