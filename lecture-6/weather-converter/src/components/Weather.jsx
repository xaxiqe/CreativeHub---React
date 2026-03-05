import WeatherCard from "./WeatherCard";
function Weather() {
  return (
    <div>
      <h1 className="text-blue-600 text-4xl text-center mt-20 mb-20">
        Weather Converter
      </h1>
      <div className="flex justify-center items-center gap-5">
        <WeatherCard
          from="C"
          to="F"
          fromUnit="Celsius(°C)"
          toUnit="Fahrenheit(°F)"
        />
        <WeatherCard
          from="F"
          to="C"
          fromUnit="Fahrenheit(°F)"
          toUnit="Celsius(°C)"
        />
      </div>
    </div>
  );
}
export default Weather;
