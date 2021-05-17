import { useState } from 'react';
import './App.css';
import DisplayCard from './components/DisplayCard';
import SearchCard from './components/SearchCard';


function App() {

  const [cities, setCities] = useState([]);

  const fetchAPI = () => {
    let city = document.getElementById('city-input').value;
    return fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=d6cb6f0b2fcc24bbd96a0b87cf76217e")
    .then(response =>{
        return response.json();
    }).then(data => {
        setCities([...cities, data])
    }).catch(e =>{
        console.log(e)
    })
  }
  const updateCities = () =>{
    fetchAPI()
    console.log(cities)
  }

  return (
    <div className="App">
      <SearchCard 
        func = {updateCities}
      />
      {cities.map((city, index)=>{
        return(
          <DisplayCard 
          key = {index} 
          city={city} />
        )
      })}
    </div>
  );
}
export default App;
