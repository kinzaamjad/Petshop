import React from 'react'
import Card from './card';

const Main=({ListDB}) =>
{  
  return(
    
    <>
    <div className='container'>
        <div className='row'>

    {
       
       ListDB.map(prod => <Card x={prod}/>)
         
        }
      </div>
    </div>
    </>


);

}

export default Main;