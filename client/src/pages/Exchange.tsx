import '../styles/Country.css';

//Import images

import exchange from '../assets/images/exchange.jpeg';
import exchange2 from '../assets/images/exchange2.png';


//function to create the About Me section
function ExchangePage() {
  return (
    <section className="country">
      
      {/* Info and activities link */}
      <div className="country-container">
      {/* Add an image of country */}
        <img 
          src={exchange}
          alt="exchange rate"
          className="country-image"
        />
        <div className="country-text">
          {/* Section title */}
          <h1>Exchange Rates</h1>
          {/* Info and link to activities article */}
          <p>
            Traveling somewhere new? Check out the exchange rates before you go!
          </p>
          <p>
          <a href="https://www.tripadvisor.com/Attractions-g186217-Activities-England.html" target="_blank" rel="noopener noreferrer">
            display exchange rates for pound and euro displayed here from the API 
          </a>
          </p>
        </div>
      </div>

      <div className="country-container">
      {/* Add an image of country */}
        <img 
          src={exchange2}
          alt="exchange rate"
          className="country-image"
        />
        <div className="country-text">
          {/* Section title */}
          <h1>Exchange Calculation</h1>
          {/* Info and link to activities article */}
          <p>
            Want to know how much you'll get for your money? Use this calculator to find out!
          </p>
          <p>
          <a href="https://www.oanda.com/currency-converter/en/?from=EUR&to=USD&amount=1" target="_blank" rel="noopener noreferrer">
            Currency Converter   
          </a>
          </p>
        </div>
      </div>      
    </section>
  );
}

export default ExchangePage;