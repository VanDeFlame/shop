import React from 'react'; 
import './Error.scss';

interface Props {
  error: any;  
} 

function Error({error}: Props) {
  return (
    <div className='Error'>
      <h2>{ error.error }</h2>
      <p>{ error.message }</p>
    </div>
  )
}

export default Error;
