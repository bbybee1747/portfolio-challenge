import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  navBar: {
    fontSize: '25px',
    alignContent: 'center',
    paddingRight: '35px',
    paddingTop: '22px',
  },
  navText: {
    color: 'white',
  },
};

function Nav() {

  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs" style={styles.navBar}>
      <li className="nav-item">
        <Link
          to='/'
          className={currentPage === '/' ? 'nav-link active bg-primary-subtle' : 'nav-link'}
          style={styles.navText}
          >
            Home
          </Link>
      </li>
      <li className="nav-item">
        <Link
          to='/About'
          className={currentPage === '/About' ? 'nav-link active bg-primary-subtle' : 'nav-link'}
          style={styles.navText}
          >
            About
          </Link>
      </li>
      <li className="nav-item">
      <Link
          to='/Portfolio'
          className={currentPage === '/Portfolio' ? 'nav-link active bg-primary-subtle' : 'nav-link'}
          style={styles.navText}
          >
            Portfolio
          </Link>
      </li>
      <li className="nav-item">
      <Link
          to='/Contact'
          className={currentPage === '/Contact' ? 'nav-link active bg-primary-subtle' : 'nav-link'}
          style={styles.navText}
          >
            Contact
          </Link>
      </li>
      <li className="nav-item">
      <Link
          to='/Resume'
          className={currentPage === '/Resume' ? 'nav-link active bg-primary-subtle' : 'nav-link'}
          style={styles.navText}
          >
            Resume
          </Link>
      </li>
    </ul>
  );
}

export default Nav;