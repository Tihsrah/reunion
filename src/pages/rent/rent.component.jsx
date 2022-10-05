
import Button from "../../objects/button/button.component";
import './rent.styles.css'
import data from '../../data/data'
import Card from "../../component/card/card.component";
import SearchBox from "../../objects/searchbox/searchbox.components";
import House from "../../component/house/house.component";
function Rent(){

    // const [searchField, setSearchField] = useState('');
    // const [properties, setProperties] = useState([]);
    // console.log(searchField);

    // const onSearchChange = (event) => {
    // const searchFieldString = event.target.value.toLowerCase();
    // setSearchField(searchFieldString)
    // }

    // const filteredProduct = properties.filter((property) => {
    //     return property.name.toLowerCase().includes(searchField);
    //   });


    //workable but not used now
    // function noteComponent(components) {
    //     return (
    //         <Card
    //         id={components.id}
    //         image={components.image}
    //         title={components.title}
    //         location={components.location}
    //         beds={components.beds}
    //         bathrooms={components.bathrooms}
    //         dimension={components.dimension}
    //         />
    //     )
    // }
    return(
        <div className="rent-body">

        <div className="search-bar">
        <h1 className="intro-text">Search properties to rent</h1>
        <SearchBox
        placeholder="Search With Search Bar"
        />
    </div>

        <div className="all-filters">
            <h3 className="filter">Location</h3>
            <h3 className="filter">When</h3>
            <h3 className="filter">Price</h3>
            <h3 className="filter">Property type</h3>
            <div className="btn-filter-div">
            <Button 
                style={"btn-filter btn-blue"}
                name="Search"
            />
            </div>
        </div>
        
        
        <div className="property-cards">
        <House />
        </div>

        </div>
    )
}

export default Rent;