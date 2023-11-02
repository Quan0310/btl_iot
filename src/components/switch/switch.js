import React from 'react';
import './switch.css';
import Box from '@material-ui/core/Box';
import Fan from './switchItems/fan';
import Light from './switchItems/light';
const Switchbox = () =>{
    return (
        <>
         <Box > 
            <div className='switchbox'>
              <Fan/>
              <Light/>
            </div>
          </Box>
         </>
      );
}
export default Switchbox;