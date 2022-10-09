import React, { FC, ReactNode } from 'react'; 
import './Footer.scss';

interface Props {
  children: ReactNode;
} 

const Footer:FC<Props> = ({children}) => {
  return (
    <footer className='Footer'>
      {children}
    </footer>
  )
}

export { Footer };
