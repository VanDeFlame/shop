import React, { FunctionComponent, ReactNode, Suspense, useEffect } from 'react'; 
import './Menu.scss';
import { Loading } from '@components/Loading';

const MenuMobileUI = React.lazy(() => import('./Mobile'));
const MenuDesktopUI = React.lazy(() => import('./Desktop'));

interface Props {
  children: ReactNode;
} 

const Menu:FunctionComponent<Props> = ({children}) => {
  const [desktopView, setDesktopView] = React.useState(window.innerWidth >= 640);
  
  useEffect(() => {
    window.addEventListener('resize', () => {
      setDesktopView(window.innerWidth >= 640);
    })
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      {
        desktopView

        ? <MenuDesktopUI>
            <nav className='Menu--nav'>
              <ul>{ children }</ul>
            </nav>
          </MenuDesktopUI>

        : <MenuMobileUI>
            <nav className='Menu--nav'>
              <ul>{ children }</ul>
            </nav>
          </MenuMobileUI>
      }
    </Suspense>
  )
}

export default Menu;
