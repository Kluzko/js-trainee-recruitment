import Head from "next/head";
import { Menu } from "components/Menu";
import { Cards } from "components/Cards";
import { MenuList } from "data";
import styles from "styles/index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Welcome in the jungle</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <div className={styles.container}>
        <div>
          <Menu />
        </div>
        <div>
          <Cards menuList={MenuList} />
        </div>
      </div>
    </>
  );
}
