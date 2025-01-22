import '../styles/Country.css';

//Import images
import GEntertainment from '../assets/images/GermanyEntertainment.webp';
import GFood from '../assets/images/GermanyGermanyFood.png';
import train from '../assets/images/gm-train.jpeg';

//function to create the About Me section
function GermanyPage() {
  return (
    <section className="country">
      
      {/* Info and activities link */}
      <div className="country-container">
      {/* Add an image of country */}
        <img 
          src={GEntertainment}
          alt="Germany City Street"
          className="country-image"
        />
        <div className="country-text">
          {/* Section title */}
          <h1>What to DO in Germany</h1>
          {/* Info and link to activities article */}
          <p>
            Germany is a beautiful country full of rich history and culture! Check out these amazing places to visit and fun activities to try!
          </p>
          <p>
          <a href="https://www.lonelyplanet.com/articles/top-things-to-do-in-germany" target="_blank" rel="noopener noreferrer">
            17 of the best things to do in Germany    
          </a>
          </p>
        </div>
      </div>

      {/* Info and activities link */}
      <div className="country-container">
      {/* Add an image of country */}
        <img 
          src={GFood}
          alt="German Food"
          className="country-image"
        />
        <div className="country-text">
          {/* Section title */}
          <h1>What to EAT in Germany</h1>
          {/* Info and link to activities article */}
          <p>
            If there is one thing that Germany is known for, it is the food! Don't miss these treats!
          </p>
          <p>
          <a href="https://www.lonelyplanet.com/articles/what-to-eat-and-drink-in-germany" target="_blank" rel="noopener noreferrer">
            16 must-try foods and drinks in Germany – and the best places to enjoy them    
          </a>
          </p>
        </div>
      </div>

      {/* Info and activities link */}
      <div className="country-container">
      {/* Add an image of country */}
        <img 
          src={train}
          alt="German train"
          className="country-image"
        />
        <div className="country-text">
          {/* Section title */}
          <h1>Train Schedule</h1>
          {/* Info and link to activities article */}
          <p>
            Boasting the largest rail network in Europe, Germany is a great place to travel by train! Check out the schedule here!
          </p>
          <p>
          <a href="https://www.lonelyplanet.com/articles/what-to-eat-and-drink-in-germany" target="_blank" rel="noopener noreferrer">
            Get the train schedule by API   
          </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default GermanyPage;
