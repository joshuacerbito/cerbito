import Link from "next/link";
import { motion } from "framer-motion";

import LinkedIn from "../icons/LinkedIn.svg";
import Github from "../icons/Github.svg";
import DevTo from "../icons/DevTo.svg";
import Medium from "../icons/Medium.svg";
import YouTube from "../icons/YouTube.svg";

const Navigation = () => (
  <motion.nav
    className="nav"
    layoutId="nav"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.5 }}
  >
    <ul>
      <li>
        <Link href="/about">
          <a>/about</a>
        </Link>
      </li>
      <li>
        <Link href="/uses">
          <a>/uses</a>
        </Link>
      </li>
    </ul>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/joshuacerbito" target="_blank">
          <LinkedIn />
        </a>
      </li>
      <li>
        <a href="https://github.com/joshuacerbito" target="_blank">
          <Github />
        </a>
      </li>
      <li>
        <a href="https://dev.to/cerbito" target="_blank">
          <DevTo />
        </a>
      </li>
      <li>
        <a href="https://medium.com/@cerbito" target="_blank">
          <Medium />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/user/joshuacerbito" target="_blank">
          <YouTube />
        </a>
      </li>
    </ul>
  </motion.nav>
);

export default Navigation;
