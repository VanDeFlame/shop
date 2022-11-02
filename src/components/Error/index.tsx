import React, { FC } from 'react'; 
import './Error.scss';

interface Props {
  error: any;  
} 

const Error:FC<Props> = ({error}) => {
  return (
    <div className='Error'>
      <h2>{ error.error }</h2>
      <p>{ error.message }</p>
    </div>
  )
}

export { Error };
