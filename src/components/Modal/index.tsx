import React, { ReactPortal, Suspense } from "react";
import { createPortal } from "react-dom";
import { ShopContext } from "@components/Context";
import { Loading } from "@components/Loading";

const ModalUI = React.lazy(() => import('./ModalUI')) 

function Modal(): ReactPortal {
  const modal = document.getElementById('modal') as HTMLElement;
  const { toggleModal } = React.useContext(ShopContext);

  return createPortal(
    <Suspense fallback={<Loading />}>
      { toggleModal ? <ModalUI /> : null }
    </Suspense>
    
    ,modal
  ) 
}

export { Modal };
