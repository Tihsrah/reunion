import  React from 'react';
import { propertyContext } from '../../context/propertyFilter.component';

// import './dropdown.styles.css'

function PropertyDropdown({data,name}){
    const [value,setValue]=React.useState("");
    const {setPropertyFilter}=React.useContext(propertyContext)
  
    const handleChange = (e) => {
        setPropertyFilter(value);
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

export default PropertyDropdown;