import React, { ReactNode, Suspense } from 'react'; 
import { useProximityShow } from '@hooks/useProximityShow';
interface Props {
  children: ReactNode;
}

const FooterUI = React.lazy(() => import('./FooterUI')) 

function Footer({children}: Props) {
  const { show, elemRef } = useProximityShow({});

  return <footer className='Footer' ref={elemRef}>
    <Suspense fallback={'Loading...'}>{ 
      show 
        ? <FooterUI>{children}</FooterUI>
        : 'Loading...' 
    }</Suspense>
  </footer>
}

export { Footer };
