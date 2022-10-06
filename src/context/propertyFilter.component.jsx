import { createContext,useState } from "react";

export const propertyContext=createContext({
    propertyFilter:null,
    setPropertyFilter:()=>null,
})

export const PropertyProvider =({children})=>{
    const [propertyFilter,setPropertyFilter]=useState(null);
    const value={propertyFilter,setPropertyFilter};


    return <propertyContext.Provider value={value}>{children}</propertyContext.Provider>
}