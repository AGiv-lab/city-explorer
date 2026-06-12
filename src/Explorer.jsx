import { useState } from 'react';
import Map from './Map';
import Restaurants from './Restaurants';
import locationData from './fake-data/location.json';
import restaurantsData from './fake-data/restaurants.json';
import map from './images/map.png';
import axios from 'axios';

function Explorer() {
  const [displayResults, setDisplayResults] = useState(false);

  function handleLocationSearch(event) {
    event.preventDefault();
    setDisplayResults(true);
  }
const displayLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${VITE_API_KEY}&q=${searchQuery}&format=json`;

    let location;
    try {
      location = await axios.get(url);

    }
  return (
    <div id="main">
      <form onSubmit={handleLocationSearch} id="search-form">
        <label>Search for a location</label>
        <input type="text" name="search" id="input-search" placeholder="Enter a location here" />
        <button type="submit">Explore!</button>
      </form>

      {displayResults &&
        <div>
          <Map
            location={locationData}
            map={map}
          />
          <Restaurants
            restaurants={restaurantsData}
            location={locationData}
          />
        </div>
      }
    </div>
  )
}

export default Explorer;
