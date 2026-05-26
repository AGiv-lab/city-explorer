import Header from './Header';
import { useState } from 'react';
import Footer from './Footer';
import Explorer from './Explorer';
import axios from 'axios';
import'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState({});

   async function getLocation() {
     const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;
    const response = await axios.get(API);
      setLocation(response.data[0]);
      
  return (
    <> 
    <input
      onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search for City"
    />
    <button onClick={getLocation}>
      Explore!
    </button>

    {location.place_id && (
 <div>
   <h2>{location.display_name}</h2>
 
   <p>Latitude: {location.lat}</p>
 
   <p>Longitude: {location.lon}</p>
 </div>
       )
    }

  <div className="card p-3 mt-3">
    <h2>{location.display_name}</h2>
 
    <p>Latitude: {location.lat}</p>
 
    <p>Longitude: {location.lon}</p>
</div> 
   
    <div 
    className="App">
      <Header />
      <Explorer />
      <Footer />
    </div>
  );
}

export default App;
