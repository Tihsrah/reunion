import  React from 'react';
import { filterContext } from '../../context/filterContext.component';

import './dropdown.styles.scss'

function Dropdown({data,name}){
    const [value,setValue]=React.useState("");
    const {setLocationFilter}=React.useContext(filterContext)
  
    const handleChange = (e) => {
        setLocationFilter(value);
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

export default Dropdown;