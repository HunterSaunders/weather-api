import '../styles/SearchCard.scss';

const SearchCard = (props) => {
    return (
        <div id="searchCard-container">   
            <h2>Add A New City</h2>
            <input type="text" name="city" placeholder="Enter a City" id="city-input"/>
            <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
            <button onClick={props.func} className="add-card">Add</button>
        </div>
    )
}

export default SearchCard
