import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Nav from './Nav.jsx';

const styles = {
    headerStyle: {
      background: 'bg-primary',
      height: '150px',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0px 0px 10px 43px',
    },
    headingText: {
      fontSize: '50px',
      alignContent: 'center',
      color: 'white',
    }
  };

export default function Header( currentPage, setCurrentPage ) {
  return (
    <div style={styles.headerStyle} className="header bg-primary">
      <h1 style={styles.headingText}>Brandon</h1>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}