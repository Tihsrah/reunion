import { createContext,useState } from "react";

export const priceContext=createContext({
    priceFilter:null,
    setLocationFilter:()=>null,
})

export const PriceProvider =({children})=>{
    const [priceFilter,setPriceFilter]=useState(null);
    const value={priceFilter,setPriceFilter};


    return <priceContext.Provider value={value}>{children}</priceContext.Provider>
}