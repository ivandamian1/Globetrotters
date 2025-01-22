import '../styles/Country.css';

//Import images

import bucketList from '../assets/images/bucketlist.jpeg';

//function to create the About Me section
function Bucketlist() {
  return (
    <section className="country">
      
      {/* Info and activities link */}
      <div className="country-container">
      {/* Add an image of country */}
        <img 
          src={bucketList}
          alt="bucketlist"
          className="country-image"
        />
        <div className="country-text">
          {/* Section title */}
          <h1>Bucketlist</h1>
          {/* Info and link to activities article */}
          <p>
            Where do you want to go? What do you want to see? Let's make a list to keep it all straight! Register below or login to get started!
          </p>
          <p>
          <a href="https://www.tripadvisor.com/Attractions-g186217-Activities-England.html" target="_blank" rel="noopener noreferrer">
            Things to Do in England   
          </a>
          </p>
        </div>
      </div>

    </section>
  );
}

export default Bucketlist;