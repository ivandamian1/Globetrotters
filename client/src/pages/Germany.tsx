import '../styles/Country.css';

//Import images
import '../../assets/images/GermanyEntertainment.webp';
import '../../assets/images/GermanyGermanyFood.png';
import '../../assets/images/gm-train.jpeg';

import React, { useState, useEffect } from "react";
import { TrainSchedulesService, TrainSchedule } from "../../../server/src/models/TrainTimes";


//function to create the About Me section
const GermanyPage: React.FC = () => {
  const [stationId, setStationId] = useState<string>("900000100001"); // Default station ID (e.g., Berlin Hauptbahnhof)
  const [trainSchedules, setTrainSchedules] = useState<TrainSchedule[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const trainSchedulesService = new TrainSchedulesService();
    const fetchSchedules = async () => {
      setLoading(true);
      setError(null);
      try {
        const schedules = await trainSchedulesService.fetchTrainSchedules(stationId);
        setTrainSchedules(schedules);
      } catch {
        setError("Failed to fetch train schedules.");
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, [stationId]);

  return (
    <section className="country">
      
      {/* Info and activities link */}
      <div className="country-container">
      {/* Add an image of country */}
        <img 
          src='../assets/images/GermanyEntertainment.webp'
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
          src='../assets/images/GermanyGermanyFood.png'
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
          src='../assets/images/gm-train.jpeg'
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
          <div>
      {/* Station Input */}
      <div>
        <label>
          Enter Station ID:
          <input
            type="text"
            value={stationId}
            onChange={(e) => setStationId(e.target.value)}
            placeholder="e.g., 900000100001"
          />
        </label>
      </div>

      {/* Loading and Error States */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Train Schedule List */}
      <div>
        <h2>Departures</h2>
        {trainSchedules.length > 0 ? (
          <ul>
            {trainSchedules.map((schedule, index) => (
              <li key={index}>
                Train {schedule.line.name} ({schedule.line.product}) - Departure:{" "}
                {new Date(schedule.departure).toLocaleTimeString()} from {schedule.origin.name} to{" "}
                {schedule.destination.name} (Arrives: {new Date(schedule.arrival).toLocaleTimeString()})
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>No schedules available.</p>
        )}
      </div>
    </div>
          </p>
        </div>
      </div>
    </section>
  );
}

export default GermanyPage;
