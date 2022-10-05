
import Button from "../../objects/button/button.component";
import './rent.styles.css'
import data from '../../data/data'
import Card from "../../component/card/card.component";
import SearchBox from "../../objects/searchbox/searchbox.components";
import House from "../../component/house/house.component";
import { useState } from "react";
import Dropdown from "../../objects/dropdown/dropdown.components";
function Rent(){

    const [searchField, setSearchField] = useState('');
    // const [properties, setProperties] = useState([]);

    const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
    }

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
        onChange={onSearchChange}

        />
    </div>

        <div className="all-filters">
            <div className="filter">
            <h3 >Location</h3>
            <Dropdown 
            
            />
            </div>

            <div className="filter">
            <h3 >When</h3>
            
            </div>

            <div className="filter">
            <h3 className="filter-title">Price</h3>
            
            </div>

            <div className="filter">
            <h3 >Property type</h3>
            
            </div>

            <div className="btn-filter-div">
            <Button 
                style={"btn-filter btn-blue"}
                name="Search"
            />
            </div>
        </div>
        
        
        <div className="property-cards">
        <House 
        searchField={searchField}
        />
        </div>

        </div>
    )
}

export default Rent;