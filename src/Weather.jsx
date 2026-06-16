function Weather(props) {
  return (
    <section className="mt-3">
      <h2>Weather</h2>

      {props.weather.map((day, index) => (
        <div className="card p-3 mb-2" key={index}>
          <p><strong>Date:</strong> {day.date}</p>
          <p><strong>Description:</strong> {day.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Weather;