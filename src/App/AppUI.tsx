// REACT
import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// ROUTES
const ProductPage = lazy(() => import('@src/pages/ProductPage'));
const Home = lazy(() => import('@src/pages/Home'));

// COMPONENTS
import { Header } from '@src/pages/Header';
import { Main } from '@components/Main';
import { Footer } from '@components/Footer';;
import { Modal } from '@components/Modal';
const Error = lazy(() => import('@components/Error'));

// HOOKS
import { useHandleTheme } from '@hooks/useHandleTheme';
import { useGetToken } from '@hooks/useAuthService';
import { Loading } from '@components/Loading';


function AppUI() {  
  useEffect(() => {
    useHandleTheme();
    useGetToken();
  }, [])
  
  return (
    <Router>
      <Header />
      
      <Main>          
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* PRODUCT PAGE */}
            <Route path="/product/:productId" element={<ProductPage/>}/>

            {/* HOME */}
            <Route path="/" element={<Home />}/>

            <Route path="*" element={<Error error={{error: "ERROR 404", msg: "Page not found"}}/>}/>
          </Routes>
        </Suspense>
      </Main>

      <Footer>
        Footer
      </Footer>
      
      <Modal />
    </Router>
  )
}

export { AppUI };
