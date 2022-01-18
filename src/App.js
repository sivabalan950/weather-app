import React, { useState } from "react";
import './App.css'
const api = {
  key: "5e015c77ee22c4013ea14e793d7ca534",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    console.log(query);
      fetch(`${api.base}/weather?q=${query}&appid=${api.key}`).then(res => res.json()).then(result => {
        setWeather(result);
        setQuery('');
      }).catch((err)=>console.log(err))
  }

  const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`
}

  return(
    <div className="app">
      <main>
        <div className="search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="search..."
          onChange={e => {
            setQuery(e.target.value)
          }}
          value={query}
          // onKeypress={search}
          />
          <button onClick={search}>Search</button>
          </div>
         {(typeof weather.main != "undefined") ? (
           <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
             15c
            </div>
            <div className="weather"> sunny</div>
              </div>
              </div>
         ) : ('')}
        </main>
    </div>
  );
}
export default App;
