import { useState } from 'react';
import './App.css';
import DisplayCard from './components/DisplayCard';
import SearchCard from './components/SearchCard';
import fetchAPI from './utilities/fetchAPI';


function App() {

  const [cities, setCities] = useState([]);


  
  const updateCities = () =>{
    // let newCity = fetchAPI();
    setCities([...cities, fetchAPI()]);
    console.log(cities)
  }

  return (
    <div className="App">
      {/* <DisplayCard 
        name='Seattle'
      /> */}
      {/* {cities.map((city, index)=>{
        return(
          <DisplayCard 
          key = {index} 
          name={city.name} />
        )
      })} */}
      <SearchCard 
        func = {updateCities}
      />
    </div>
  );
}

export default App;
