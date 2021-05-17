import React from 'react'
//import fetchAPI from '../utilities/fetchAPI';

const SearchCard = (props) => {
    return (
        <div>
            <form>
                <input type="text" name="city" placeholder="enter a city" id="city-input"/>
            </form>
                <button onClick={props.func}>Add</button>
        </div>
    )
}

export default SearchCard
