import Header from './Header';
import Footer from './Footer';
import Explorer from './Explorer';

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  // const [searchQuery, setSearchQuery] = useState('')
  // const [location, setLocation] = useState({});

  // async function getLocation() {
  //   const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;
  //   const response = await axios.get(API);
  //   setLocation(response.data[0]);
  // }

  return (
    <> </>
    <div className="App">
      <Header />
      <Explorer />
      <Footer />
    </div>
  );
}

export default App;
