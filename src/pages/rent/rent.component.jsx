
import Button from "../../objects/button/button.component";
import './rent.styles.css'
import SearchBox from "../../objects/searchbox/searchbox.components";
import House from "../../component/house/house.component";
import { useState } from "react";
import Dropdown from "../../objects/dropdown/dropdown.components";
import Filter from "../../component/filter/filter.component";
import ArivalDropDown from "../../objects/dropdown/arivalDropDown.component";
import PriceDropDown from "../../objects/dropdown/pricedropdown.component";
import PropertyDropdown from "../../objects/dropdown/propertyDropDown.component";
import HouseSearchBox from "../../component/house/houseSearchBox.component";
function Rent(){

    // const [searchField, setSearchField] = useState('');
    const [properties, setProperties] = useState([]);
    const [searchText,setSearchText]=useState("");

    const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchText(searchFieldString)
    }
    
    const filteredProduct = properties.filter((property) => {
        return property.name.toLowerCase().includes(searchText);
      });


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

    const location=[
        {
            id:1,
            text:"Green Valley"
        },
        {
            id:2,
            text:"tt"
        },
    ]

    const when=[
        {
            id:1,
            text:"12 Apr - 14 Mar"
        },
        {
            id:2,
            text:"12 Jun - 14 Jul"
        },
        {
            id:3,
            text:"12 Nov - 14 Dec"
        }
    ]

    const price=[
        {
            id:1,
            text:"1500-2500",
            min:1500,
            max:2500
        },
        {
            id:2,
            text:"2500-3500",
            min:2500,
            max:3500
        },
        {
            id:3,
            text:"3500-5500",
            min:3500,
            max:5500
        }
    ]
    const property=[
        {
            id:1,
            text:"Houses"
        },
        {
            id:2,
            text:"Mansion"
        },
        {
            id:3,
            text:"Big House"
        }
    ]
    

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
            data={location}
            name="Location"
            />
            </div>

            <div className="filter">
            <h3 >When</h3>
            <ArivalDropDown 
            data={when}
            name="when"
            />
            </div>

            <div className="filter">
            <h3 className="filter-title">Price</h3>
            <PriceDropDown
            data={price}
            name="price"
            />
            </div>

            <div className="filter">
            <h3 >Property type</h3>
            <PropertyDropdown 
            data={property}
            name="property"
            />
            </div>

            <div className="btn-filter-div">
            <Button 
                style={"btn-filter btn-blue"}
                name="Search"
            />
            </div>
        </div>
        
        
        <div className="property-cards">
        

        <Filter />
        </div>

        </div>
    )
}

export default Rent;