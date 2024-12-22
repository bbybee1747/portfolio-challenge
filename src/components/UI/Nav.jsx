import PropTypes from 'prop-types';

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

function Nav({ currentPage, setCurrentPage }) {
  return (
    <ul className="nav nav-tabs" style={styles.navBar}>
      <li className="nav-item">
        <a
          style={styles.navText}
          href="#about"
          onClick={() => setCurrentPage("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.navText}
          href="#portfolio"
          onClick={() => setCurrentPage("Portfolio")}
          className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.navText}
          href="#contact"
          onClick={() => setCurrentPage("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.navText}
          href="#resume"
          onClick={() => setCurrentPage("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

Nav.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Nav;