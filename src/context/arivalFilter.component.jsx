import { createContext,useState } from "react";

export const arivalContext=createContext({
    arivalFilter:null,
    setArivalFilter:()=>null,
})

export const ArivalProvider =({children})=>{
    const [arivalFilter,setArivalFilter]=useState(null);
    const value={arivalFilter,setArivalFilter};


    return <arivalContext.Provider value={value}>{children}</arivalContext.Provider>
}