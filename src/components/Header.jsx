import '../global.scss';
import styles from './Header.module.scss';
import rocket from '../assets/rocket.svg';

export function Header() {
  return (
    <header>
      <div className={styles.header}>
        <img src={rocket} />
        <p>
          <h1>to</h1>
          <h1>do</h1>
        </p>
      </div>
    </header>
  );
}
