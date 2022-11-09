import React, { ReactNode } from 'react'; 
import './Footer.scss';

interface Props {
  children: ReactNode;
}

function FooterUI({children}: Props) {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

export default FooterUI;