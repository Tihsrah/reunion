
import Button from "../../objects/button/button.component";
import './rent.styles.css'
import SearchBox from "../../objects/searchbox/searchbox.components";
import House from "../../component/house/house.component";
import { useState } from "react";
import Dropdown from "../../objects/dropdown/dropdown.components";
import Filter from "../../component/filter/filter.component";
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

    const location=[
        {
            id:1,
            text:"Green Valley"
        },
        {
            id:2,
            text:"tt"
        },
        {
            id:3,
            text:"thirty"
        }
    ]

    const when=[
        {
            id:1,
            text:"Green Valley"
        },
        {
            id:2,
            text:"tt"
        },
        {
            id:3,
            text:"thirty"
        }
    ]

    const price=[
        {
            id:1,
            text:"50-100"
        },
        {
            id:2,
            text:"100-150"
        },
        {
            id:3,
            text:"150-200"
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
            text:"Big"
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
            <Dropdown 
            data={when}
            name="when"
            />
            </div>

            <div className="filter">
            <h3 className="filter-title">Price</h3>
            <Dropdown 
            data={price}
            name="price"
            />
            </div>

            <div className="filter">
            <h3 >Property type</h3>
            <Dropdown 
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