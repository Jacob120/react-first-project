import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.nav_wrapper}>
        <span className="fa fa-tasks" />
        <ul className={styles.nav_list}>
          <li>Home</li>
          <li>Favorite</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar