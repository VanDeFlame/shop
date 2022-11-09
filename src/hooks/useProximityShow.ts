import React, { useEffect } from "react";

interface Props {
  distance?: string;
}

const useProximityShow = ({ distance = '100px'}: Props) => {
  const [show, setShow] = React.useState(false);
  const elemRef = React.useRef({} as any)

  useEffect(() => {
    const onChange = (entries: any[], observer: IntersectionObserver) => {
      const elem = entries[0];

      if (elem.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    })

    observer.observe(elemRef.current)
  
    return () => observer.disconnect()
  })
  
  return {
    show,
    elemRef,
  }
}

export { useProximityShow };