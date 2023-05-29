import Logo from '../assets/logo.svg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo do site" />
      <h1>Ignite Feed</h1>
    </header>
  );
}
