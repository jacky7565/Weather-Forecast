import "./wether.css";
import { useWetherContext } from "./ContexApi/MyContext";
import { useEffect } from "react";
const WetherApp = () => {
  let wetherData = useWetherContext();
  const temperature = wetherData?.data?.data;

  useEffect(() => {
    let currentLocationData = wetherData.currentLocationFetchData();
    console.log(currentLocationData);
  }, []);

  let calculMinTemp = temperature?.main?.temp_min - 273.15;
  let calculMaxTemp = temperature?.main?.temp_max - 273.15;
  let calcuTemp = temperature?.main?.temp - 273.15;
  let MinTemp = calculMinTemp.toFixed(2);
  let maxTemp = calculMaxTemp.toFixed(2);
  let temp = calcuTemp.toFixed(2);
  let wetherIcon = temperature?.weather[0]?.icon;

  let iconUrl = `https://openweathermap.org/img/wn/${wetherIcon}@4x.png`;
  // console.log(temperature);
  return (
    <div className="weather-container">
      
      <div className="weather-card">
      <h3>Weather Forecast</h3>
        <input
          type="text"
          className="city-input"
          placeholder="Enter a city name"
          value={wetherData.searchCityName}
          onChange={(e) => wetherData.setCitySearch(e.target.value)}
        />
        <button className="search-button" onClick={wetherData.fetchApiData}>
          Search
        </button>
        <div className="weather-info">
          <h1 className="city-name">{temperature?.name}</h1>
          <p className="weather-condition">{temperature?.weather[0]?.main}</p>
          <p className="weather-description">
            {temperature?.weather[0]?.description}
          </p>
          <div className="weather-icon">
            <img src={iconUrl} alt="weather-icon" />
          </div>
          <h2 className="temperature">{isNaN(temp)?"Loading...":`${temp}°`}</h2>
          <div className="temp-range">
            <span className="temp-min">min:{isNaN(MinTemp)?"Loading..":MinTemp}°</span>
            <span className="temp-max">max:{isNaN(maxTemp)?"Loading..":maxTemp}°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WetherApp;
