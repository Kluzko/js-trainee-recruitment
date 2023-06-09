import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { MdWeb } from "react-icons/md";
import styles from "./footer.module.css";

import { LogoNerdbord } from "../LogoNerdbord";

const Socials = [
  {
    url: "https://kluzko.tech/",
    icon: <MdWeb />,
  },
  {
    url: "https://github.com/Kluzko",
    icon: <AiOutlineGithub />,
  },
  {
    url: "https://www.linkedin.com/in/jakub-kluzniak/",
    icon: <AiOutlineLinkedin />,
  },
];

export const Footer = () => (
  <footer className={styles.container}>
    <LogoNerdbord />
    <div className={styles.socials_container}>
      {Socials.map(({ icon, url }) => (
        <a href={url} key={url} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      ))}
    </div>
  </footer>
);
