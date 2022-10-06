import { useContext, useState } from 'react';
import { filterContext } from '../../context/filterContext.component';
import House from '../house/house.component';
import data from '../../data/data';
import { arivalContext } from '../../context/arivalFilter.component';
import { priceContext } from '../../context/priceContext.component';
import { propertyContext } from '../../context/propertyFilter.component';
function Filter(){

    const {locationFilter,setLocationFilter}=useContext(filterContext);
    const [properties, setProperties] = useState(data);
    const filteredProduct = properties.filter(property => property.location.includes(locationFilter));
    
    const {arivalFilter,setArivalFilter}=useContext(arivalContext);
    const [arivalProperties, setArivalProperties] = useState(data);
    const arivalFilteredProduct = arivalProperties.filter(arivalProperty => arivalProperty.arival.includes(arivalFilter));
    const nested =filteredProduct.filter((arival)=>arivalFilteredProduct.includes(arival))

    const {priceFilter,setPriceFilter}=useContext(priceContext);
    const [priceProperties, setPriceProperties] = useState(data);
    const priceFilteredProduct = priceProperties.filter(priceProperty => priceProperty.priceRange.includes(priceFilter));
    
    const nested2=arivalFilteredProduct.filter((price)=>priceFilteredProduct.includes(price))

    const {propertyFilter,setPropertyFilter}=useContext(propertyContext);
    const [propertyProperties, setPropertyProperties] = useState(data);
    const propertyFilteredProduct = propertyProperties.filter(propertyProperty => propertyProperty.property.includes(propertyFilter));
    
    const nested3=arivalFilteredProduct.filter((property)=>propertyFilteredProduct.includes(property))

    return(
        <>
        {console.log("location filter",locationFilter)}
        {console.log("filtered product",filteredProduct)}
        {console.log("properties",properties)}

        {console.log("arivalFilter filter",arivalFilter)}
        {console.log("arivalFilteredProduct product",arivalFilteredProduct)}
        {console.log("arivalproperties",arivalProperties)}

        {console.log("priceFilter filter",priceFilter)}
        {console.log("priceFilteredProduct product",priceFilteredProduct)}
        {console.log("priceProperties",priceProperties)}
        {console.log("nested2",nested2)}

        <House 
        searchField={arivalFilter==0?propertyProperties: nested3}
        />
        </>
    )
}

export default Filter;