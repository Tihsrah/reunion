import  React from 'react';
import { priceContext } from '../../context/priceContext.component';

// import './dropdown.styles.css'

function PriceDropDown({data,name}){
    const [value,setValue]=React.useState("");
    const {setPriceFilter}=React.useContext(priceContext)
  
    const handleChange = (e) => {
        setPriceFilter(value);
        setValue(e.target.value);
        
        
      };
      
    return (

        <div className="custom-select">
            <select onChange={handleChange}>
                <option value="0">Select {name}</option>
                {data.map(dat=>{
                    return(
                        <option key={dat.id} value={dat.text}>{dat.text}</option>
                    )
                  })}
            </select>
        </div>


        
      );

}

export default PriceDropDown;