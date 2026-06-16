import { useState } from 'react';
import axios from 'axios'; //imports the axios library for making HTTP requests
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';
 
 
// Importing API key
const API_KEY = import.meta.env.VITE_API_KEY;
 
function App() {
// States and setStates for search query and location data
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState([]);
 
  
async function getLocation() {
  const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;

  const response = await axios.get(API);

  setLocation(response.data[0]);

  const weatherResponse = await axios.get(
    `http://localhost:3001/weather?searchQuery=${searchQuery}`
  );

  setWeather(weatherResponse.data);
}

  const mapUrl =
    location.lat && location.lon
      ? `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=10`
      : '';
 
  return (
    <div className="container mt-5">
 
      <input
        className="form-control"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a city"
      />
 
      <button
        className="btn btn-primary mt-3"
        onClick={getLocation}>
        Explore!
      </button>
 
      {location.place_id && (
        <div className="card p-3 mt-3">
 
          <img
            src={mapUrl}
            alt="Map of city"
          />
          
          
          <h2>{location.display_name}</h2>
 
          <p>Latitude: {location.lat}</p>
 
          <p>Longitude: {location.lon}</p>
          
          <Weather weather={weather} />
 
        </div>
      )}
 
    </div>
    
  );
}
 
export default App;
