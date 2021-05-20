import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <header className={styles.header}>
      <Link href="/" passHref>
        <a>
          <h1>Coin Market Watch</h1>
        </a>
      </Link>
    </header>
    <main> {children} </main>
  </div>
);

export default Layout;
