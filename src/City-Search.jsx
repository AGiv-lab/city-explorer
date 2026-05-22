function CitySearch() {
  return (
    <div>
      <form>
        <label>Enter a city name</label>

        <input
          type="text"
          placeholder="Enter a city"
           value={city}
          onChange={(event) => setCity(event.target.value)}
        />

        <button type="submit">
          Explore!
        </button>
      </form>
    </div>
  );
}

export default CitySearch;

