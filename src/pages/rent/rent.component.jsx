
import Button from "../../objects/button/button.component";
import './rent.styles.css'
import SearchBox from "../../objects/searchbox/searchbox.components";
import { useContext, useState } from "react";
import Dropdown from "../../objects/dropdown/dropdown.components";
import Filter from "../../component/filter/filter.component";
import ArivalDropDown from "../../objects/dropdown/arivalDropDown.component";
import PriceDropDown from "../../objects/dropdown/pricedropdown.component";
import PropertyDropdown from "../../objects/dropdown/propertyDropDown.component";
import HouseSearchBox from "../../component/house/houseSearchBox.component";
import House from "../../component/house/house.component";
import { filterContext } from "../../context/filterContext.component";
import { arivalContext } from "../../context/arivalFilter.component";
import { priceContext } from "../../context/priceContext.component";
import { propertyContext } from "../../context/propertyFilter.component";
import data from "../../data/data";
function Rent(){

    // const [searchField, setSearchField] = useState('');
    const [properties] = useState([]);
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
    const {locationFilter}=useContext(filterContext);
    const {arivalFilter}=useContext(arivalContext);
    const {priceFilter}=useContext(priceContext);
    const {propertyFilter}=useContext(propertyContext);
    const obj={}
    if(locationFilter !==null && locationFilter !=0){
        obj.location=locationFilter
    }else{
        obj.location="all"
    }
    if(arivalFilter !==null &&arivalFilter !=0){
        obj.arival=arivalFilter
    }else{
        obj.arival="all"
    }
    if(priceFilter !==null && priceFilter!=0){
        obj.priceRange=priceFilter
    }else{
        obj.priceRange="all"
    }
    if(propertyFilter !==null && propertyFilter!=0){
        obj.property=propertyFilter
    }else{
        obj.property="all"
    }
    console.log(obj);
    const [allfilter]=useState(data);
    const allreq=data.filter(x=>x.location.includes(obj.location) && x.arival.includes(obj.arival) && x.priceRange.includes(obj.priceRange) && x.property.includes(obj.property));
     
    function handleChange(){
        console.log("clicked");
        const allreq=data.filter(x=>x.location.includes(obj.location) && x.arival.includes(obj.arival) && x.priceRange.includes(obj.priceRange) && x.property.includes(obj.property));
        console.log(allreq)
    }

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
                onChange={handleChange}
            />
            </div>
        </div>
        
        
        <div className="property-cards">
        
        {/*we can use <HouseSearchBox /> here to use search input box for filtering with input. */}
        {console.log(allreq)}
        <House 
        searchField={allreq}
        />
        </div>

        </div>
    )
}

export default Rent;