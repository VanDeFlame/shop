import React, { createContext, ReactNode, useState } from 'react'; 
import { ContextValue } from './ContextValue';

const ShopContext = createContext({} as ContextValue);

interface Props {
  children: ReactNode;
}

function ShopProvider({children}: Props) {
  // Modal
  const [toggleModal, setToggleModal] = useState(false);  
  const [modalComponent, setModalComponent] = React.useState<ReactNode>();

  return (
    <ShopContext.Provider value={{
      toggleModal,
      setToggleModal,
      modalComponent,
      setModalComponent,
    }}>
      {children}
    </ShopContext.Provider>
  )
}

export { ShopContext, ShopProvider }