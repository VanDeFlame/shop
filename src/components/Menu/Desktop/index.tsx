import React, { ReactNode } from 'react';
import './MenuDesktopUI.scss';

interface Props {
  children: ReactNode;
}

function MenuDesktopUI({children}: Props) {
  return (
    <div className='MenuDesktopUI'>
      {children}
    </div>
  )
}

export default MenuDesktopUI;
