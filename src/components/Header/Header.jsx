import { formatDate } from "../../helpers/formatDate";
import logo from "./../../assets/Logo/Logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="logo" className={logo} />
        <h1 className={styles.title}>News</h1>
      </div>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
