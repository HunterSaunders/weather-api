//let newCity;

const fetchAPI = () => {
    let city = document.getElementById('city-input').value;
    return fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=d6cb6f0b2fcc24bbd96a0b87cf76217e")
    .then(response =>{
        return response.json();
    }).then(data => {
        //console.log(data)
        //newCity = data;
        //console.log(CityList)
    }).catch(e =>{
        console.log(e)
    })
    //console.log(cityArray)
    //return newCity;
}

export default fetchAPI;