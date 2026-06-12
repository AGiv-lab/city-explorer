function Weather(props) {
  return (
    <section>
      <h2>Weather</h2>

      {props.weather.map((day, index) => (
        <div key={index}>
          <p>Day: {day.date}</p>
          <p>Description: {day.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Weather;