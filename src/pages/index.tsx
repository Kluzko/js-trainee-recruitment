import styles from "styles/index.module.css";
import { Menu } from "components/Menu";
import { Cards } from "components/Cards";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <Menu />
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}
