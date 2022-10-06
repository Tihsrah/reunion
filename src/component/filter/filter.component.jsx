import { useContext, useState } from 'react';
import { filterContext } from '../../context/filterContext.component';
import House from '../house/house.component';
import data from '../../data/data';
function Filter(){

    const {locationFilter,setLocationFilter}=useContext(filterContext);
    const [properties, setProperties] = useState(data);
    const filteredProduct = properties.filter(property => property.location.includes(locationFilter));
    

    
    return(
        <>
        {console.log("location filter",locationFilter)}
        {console.log("filtered product",filteredProduct)}
        {console.log("properties",properties)}
        <House 
        searchField={locationFilter==0?properties: filteredProduct}
        />
        </>
    )
}

export default Filter;