import { createContext,useState } from "react";

export const filterContext=createContext({
    locationFilter:null,
    setLocationFilter:()=>null,
})

export const UserProvider =({children})=>{
    const [locationFilter,setLocationFilter]=useState(null);
    const value={locationFilter,setLocationFilter};


    return <filterContext.Provider value={value}>{children}</filterContext.Provider>
}