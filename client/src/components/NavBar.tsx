//import navbar style sheet
import '../styles/NavTabs.css';
import { Link } from 'react-router-dom';


//function to create the Navbar
const Navbar = () => {

  return (
    <ul className="nav nav-tabs">
      <li className="nav-items">
        <Link to='/Home' >
          Home
        </Link>
      </li>
      <li className="nav-items">
        <Link to='/ExchangePage' >
          Exchange Rate
        </Link>
      </li>
      <li className="nav-items">
        <Link to='/Bucketlist' >
          Bucket List
        </Link>
      </li>
    </ul>
  );
  }

export default Navbar;
