import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './dropdown.styles.css'

function Dropdown(){
    const [value,setValue]=React.useState("");
    const handleChange=e=>setValue(e.target.value);
    const data=[
        {
            id:1,
            text:"ten"
        },
        {
            id:2,
            text:"twenty"
        },
        {
            id:3,
            text:"thirty"
        }
    ]
    return (
        <div className='dropdown'>
          <FormControl  sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
            <Select 
            className='select-dropdown'
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={value}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>

              
              <MenuItem className='menu-dropdown' value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          {console.log(value)}
        </div>
      );

}

export default Dropdown;