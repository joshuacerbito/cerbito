import Particles from "react-particles-js";
import styles from "../styles/ParticleBG.module.css";

const ParticleBG = () => (
  <Particles
    className={styles.bg}
    params={{
      particles: {
        number: {
          value: 300,
          density: {
            enable: true,
            value_area: 1800,
          },
        },
        line_linked: {
          enable: true,
          opacity: 0.025,
        },
        move: {
          direction: "none",
          speed: 0.5,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.05,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: false,
          },
        },
        modes: {
          push: {
            particles_nb: 1,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

export default ParticleBG;
