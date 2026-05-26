import { useState } from 'react';
import axios from 'axios';

function CitySearch() {

  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  async function getLocation(event) {
    event.preventDefault();

    const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;

    const response = await axios.get(API);

    setLocation(response.data[0]);
  }

  return (
    <div>
      <form onSubmit={getLocation}>
        <label>Enter a city name</label>

        <input
          type="text"
          placeholder="Enter a city"
           value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />

        <button type="submit">
          Explore!
        </button>
      </form>

       {location && (
  <div className="card mt-4">

    <div className="card-body">

      <h2 className="card-title">
        {location.display_name}
      </h2>

      <p className="card-text">
        Latitude: {location.lat}
      </p>

      <p className="card-text">
        Longitude: {location.lon}
      </p>

    </div>

  </div>
)}

    </div>
  );
}

export default CitySearch;

