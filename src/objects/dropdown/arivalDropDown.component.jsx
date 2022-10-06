import  React from 'react';
import { arivalContext } from '../../context/arivalFilter.component';


// import './dropdown.styles.css'

function ArivalDropDown({data,name}){
    const [value,setValue]=React.useState("");
    const {setArivalFilter}=React.useContext(arivalContext)
  
    const handleChange = (e) => {
        setArivalFilter(value);
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

export default ArivalDropDown;