import styles from "styles/footer.module.css";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { MdWeb } from "react-icons/md";

import { LogoNerdbord } from "./LogoNerdbord";

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
      {Socials.map(({ icon, url }, i) => (
        <a href={url} key={i} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      ))}
    </div>
  </footer>
);
