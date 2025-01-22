import '../styles/Home.css';

import country1 from '../assets/images/uk-flag.gif';
import country2 from '../assets/images/fr-flag.gif';
import country3 from '../assets/images/gm-flag.gif';
import country4 from '../assets/images/pl-flag.gif';
import country5 from '../assets/images/sp-flag.gif';


//function to create the About Me section
function Home() {
  return (
    <section className="home">
      <div className="page-section">
        <h1>Where would you like to start!</h1>
        <div className="flex-container">
          <div className="flex-item">
            <img src={country1} alt="Employee Tracker" className="country-image" />
            <h2>
              <a href="./England" target="_blank" rel="noopener noreferrer">
                England
              </a>
            </h2>
          </div>

          <div className="flex-item">
            <img src={country2} alt="Weather Dashboard" className="country-image" />
            <h2>
              <a href="./France" target="_blank" rel="noopener noreferrer">
                France
              </a>
            </h2>
          </div>

          <div className="flex-item">
            <img src={country3} alt="Vehicle Builder" className="country-image" />
            <h2>
              <a href="./Germany" target="_blank" rel="noopener noreferrer">
                Germany
              </a>
            </h2>
          </div>

          <div className="flex-item">
            <img src={country4} alt="README Generator" className="country-image" />
            <h2>
              <a href="./Poland" target="_blank" rel="noopener noreferrer">
                Poland
              </a>
            </h2>
          </div>

          <div className="flex-item">
            <img src={country5} alt="Rescuers Down Under" className="country-image" />
            <h2>
              <a href="./Spain" target="_blank" rel="noopener noreferrer">
                Spain
              </a>
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;