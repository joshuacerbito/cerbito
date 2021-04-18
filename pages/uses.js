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
              <p className="m0">
                Here are the tools and tech that I use on a daily basis, 2021
                Edition!
              </p>
            </div>
            <div className={styles.contentSection}>
              <h3>Editor + Terminal</h3>
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
                    (mainly to justify its cost 😂). Here's the spec list:
                    <ul>
                      <li>
                        CPU:{" "}
                        <a
                          href="https://www.amd.com/en/products/cpu/amd-ryzen-7-5800x"
                          target="_blank"
                        >
                          Ryzen 7 5800x
                        </a>
                      </li>
                      <li>
                        GPU:{" "}
                        <a
                          href="https://www.nvidia.com/en-ph/geforce/graphics-cards/30-series/rtx-3070/"
                          target="_blank"
                        >
                          Nvidia RTX 3070
                        </a>
                      </li>
                      <li>
                        RAM: 2x8GB{" "}
                        <a
                          href="https://www.hyperxgaming.com/us/memory/fury-ddr4"
                          target="_blank"
                        >
                          HyperX Fury DDR4@3200MHz
                        </a>
                      </li>
                      <li>
                        Storage:{" "}
                        <ul>
                          <li>
                            <a
                              href="https://www.samsung.com/us/computing/memory-storage/solid-state-drives/ssd-860-evo-m-2-sata-500gb-mz-n6e500bw/"
                              target="_blank"
                            >
                              Samsung 860 EVO SATA M.2 500GB
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.samsung.com/us/computing/memory-storage/solid-state-drives/870-evo-sata-2-5-ssd-500gb-mz-77e500b-am/"
                              target="_blank"
                            >
                              Samsung 870 EVO SATA 500GB
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.adata.com/us/specification/503"
                              target="_blank"
                            >
                              ADATA SU650 SSD 240GB
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Motherboard:{" "}
                        <a
                          href="https://www.gigabyte.com/ph/Motherboard/B450-AORUS-PRO-WIFI-rev-1x#kf"
                          target="_blank"
                        >
                          Gigabyte B450 AORUS PRO WIFI
                        </a>
                      </li>
                      <li>
                        CPU Cooler:{" "}
                        <a href="https://www.tecware.co/mirage" target="_blank">
                          Tecware Mirage 360
                        </a>
                      </li>
                      <li>
                        PSU:{" "}
                        <a
                          href="https://www.gigabyte.com/ph/Power-Supply/GP-P750GM#kf"
                          target="_blank"
                        >
                          Gigabyte P750GM Modular Power Supply
                        </a>
                      </li>
                      <li>
                        Case:{" "}
                        <a
                          href="https://www.youtube.com/watch?v=ol7lupq0m_E"
                          target="_blank"
                        >
                          Rakk Galura (White)
                        </a>
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    My{" "}
                    <a
                      href="https://support.apple.com/kb/sp715?locale=en_PH"
                      target="_blank"
                    >
                      Macbook Pro
                    </a>{" "}
                    is an early 2015 13-inch model. I'd argue that except for
                    the upcoming M1 models, the 2015 model is where it's at in
                    terms of portable macOS computing.
                  </p>
                </li>
                <li>
                  <p>
                    Both machines are plugged into a{" "}
                    <a
                      href="https://www.viewsonic.com/ph/products/lcd/VX2718-PC-MHD"
                      target="_blank"
                    >
                      ViewSonic VX2718 27" 165hz
                    </a>
                    curved display.
                  </p>
                </li>
                <li>
                  <p>
                    I switch between 3 keyboards depending on what I'm doing.
                    The one that I use the most is a{" "}
                    <a
                      href="https://www.keychron.com/products/keychron-k8-tenkeyless-wireless-mechanical-keyboard"
                      target="_blank"
                    >
                      Keychron K8 (Gateron Blue)
                    </a>
                    . For longer typing/coding sessions, I use a{" "}
                    <a
                      href="https://drop.com/buy/magicforce-68-key-mini-mechanical-keyboard"
                      target="_blank"
                    >
                      Magicforce-68 (Cherry Brown)
                    </a>
                    . And for intense gaming sessions, I use a{" "}
                    <a
                      href="https://www2.razer.com/ap-en/gaming-keyboards-keypads/razer-blackwidow-tournament-edition-stealth"
                      target="_blank"
                    >
                      Razer Blackwidow Chroma TE Stealth
                    </a>
                    .
                  </p>
                </li>
                <li>
                  <p>
                    The mouse that I've been using for a year now is a{" "}
                    <a
                      href="https://www.logitech.com/en-us/products/mice/m720-triathlon.910-004790.html"
                      target="_blank"
                    >
                      Logitech M720 Triathlon
                    </a>
                    . I keep telling myself that I don't need a Logitech MX
                    Masters 3, but I really, really want one.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.contentSection}>
              <h3>Audio + Video</h3>
              <ul>
                <li>
                  <p>
                    My system's audio revolves around a{" "}
                    <a
                      href="https://www.amazon.com/Native-Instruments-Interface-Recording-Production/dp/B004YPRPJ6"
                      target=")blank"
                    >
                      Native Instruments Komplete Audio 6 Mk.I
                    </a>{" "}
                    USB Interface.
                  </p>
                </li>
                <li>
                  <p>
                    The mic I use is an{" "}
                    <a
                      href="https://www.audio-technica.com/en-us/atr2500-usb"
                      target="_blank"
                    >
                      Audio Technica ATR2500
                    </a>{" "}
                    USB mic, which for some reason, only gets recognized by
                    Windows and Mac as "Advanced USB Audio Device". 🤷‍♂️
                  </p>
                </li>
                <li>
                  <p>
                    I also like to swap earphones / headphones depending on the
                    use-case. The one that's almost always plugged in is a pair
                    of{" "}
                    <a
                      href="https://headfonics.com/tfz-t2-galaxy-review/"
                      target="_blank"
                    >
                      TFZ-T2
                    </a>
                    's, but I like to swap it with either a pair of{" "}
                    <a
                      href="https://kz-audio.com/kz-zs10-pro.html"
                      target="_blank"
                    >
                      KZ ZS10 Pro
                    </a>
                    s or an{" "}
                    <a
                      href="https://www.audio-technica.com/en-us/ath-m40x"
                      target="_blank"
                    >
                      Audio-Technica ATH-M40x
                    </a>{" "}
                    when I'm recording or mixing music.
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
                    , powered by a{" "}
                    <a
                      href="https://www.amazon.com/Logitech-Laptop-Webcam-Design-360-Degree/dp/B004YW7WCY"
                      target="_blank"
                    >
                      Logitech C615
                    </a>
                    .
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
                    (equipped with a{" "}
                    <a
                      href="https://fujifilm-x.com/global/products/lenses/xf35mmf14-r/"
                      target="_blank"
                    >
                      Fujinon 35mm F1.4
                    </a>{" "}
                    lens) whenever I need to shoot higher resolution videos.
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
            <div className={styles.contentSection}>
              <h3>Desktop Apps</h3>
              <ul>
                <li>
                  <p>
                    <a href="https://brave.com/" target="_blank">
                      Brave
                    </a>{" "}
                    is my main browser, and for the most part, I use{" "}
                    <a
                      href="https://www.mozilla.org/en-US/firefox/new/"
                      target="_blank"
                    >
                      Firefox
                    </a>{" "}
                    for development. And for mobile, I use iOS Safari on my
                    iPhone X, and Android Chrome on a OnePlus 6.
                  </p>
                </li>
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
                    <a href="https://www.notion.so/" target="_blank">
                      Notion
                    </a>{" "}
                    is what I use to store and share notes. For longer writing
                    sessions, I use{" "}
                    <a href="https://mdfy.herokuapp.com/" target="_blank">
                      MDfy
                    </a>
                    , a Markdown Editor PWA that I wrote not too long ago (I
                    also blogged about it{" "}
                    <a
                      href="https://dev.to/cerbito/001-coding-challenges-with-friends-making-a-markdown-editor-n61"
                      target="_blank"
                    >
                      here
                    </a>
                    ).
                  </p>
                </li>
                <li>
                  <p>
                    I'm a huge{" "}
                    <a href="https://www.alfredapp.com/" target="_blank">
                      Alfred
                    </a>{" "}
                    fan, and I'm glad that{" "}
                    <a
                      href="https://github.com/microsoft/PowerToys"
                      target="_blank"
                    >
                      Microsoft PowerToys
                    </a>{" "}
                    exists for Windows (specifically PowerToys' Run).
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
              </ul>
            </div>
            <div className={styles.contentSection}>
              <p>
                If you've made it this far, then you're awesome, I guess? 😂
              </p>
              <p>
                <code>/uses</code> is inspired by Wes Bos'{" "}
                <a href="https://uses.tech/" target="_blank">
                  uses.tech
                </a>
                . Check out other people's setups, and while you're at it, why
                not add yours as well? Cheers! 🥂
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
};

export default Uses;
