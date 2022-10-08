import { useContext, useState } from 'react';
import { filterContext } from '../../context/filterContext.component';
import House from '../house/house.component';
import data from '../../data/data';
import { arivalContext } from '../../context/arivalFilter.component';
import { priceContext } from '../../context/priceContext.component';
import { propertyContext } from '../../context/propertyFilter.component';
function Filter(){

    const {locationFilter}=useContext(filterContext);
    const [properties] = useState(data);
    const filteredProduct = properties.filter(property => property.location.includes(locationFilter));
    
    console.log(locationFilter);
    

    const {arivalFilter}=useContext(arivalContext);
    const [arivalProperties] = useState(data);
    const arivalFilteredProduct = arivalProperties.filter(arivalProperty => arivalProperty.arival.includes(arivalFilter));
    const nested =filteredProduct.filter((arival)=>arivalFilteredProduct.includes(arival))

    const {priceFilter}=useContext(priceContext);
    const [priceProperties] = useState(data);
    const priceFilteredProduct = priceProperties.filter(priceProperty => priceProperty.priceRange.includes(priceFilter));
    
    const nested2=arivalFilteredProduct.filter((price)=>priceFilteredProduct.includes(price))

    const {propertyFilter}=useContext(propertyContext);
    const [propertyProperties] = useState(data);
    const propertyFilteredProduct = propertyProperties.filter(propertyProperty => propertyProperty.property.includes(propertyFilter));
    
    const nested3=arivalFilteredProduct.filter((property)=>propertyFilteredProduct.includes(property))
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
    // const allreq=data.filter((val)=>{
    //     return obj.find((a)=>{
    //         return val.location==a.location
    //     })
    // })
    
    console.log("printing all filters",allreq);
    return(
        <>
        

        <House 
        searchField={allreq}
        />
        </>
    )
}

export default Filter;