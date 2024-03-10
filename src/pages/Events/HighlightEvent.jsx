import React, { useRef, useEffect } from "react";
import MeherPrem from "../../assets/MeherPrem.jpg";

const HighlightEvent = () => {
  const imageRef = useRef(null);
  
  useEffect(() => {
    const imageElement = imageRef.current;
    if (imageElement) {
      imageElement.addEventListener('contextmenu', (event) => {
        event.preventDefault(); // Disable default context menu
      });
    }
  }, []);
return (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom:'45px' }}>
    <img ref={imageRef} src={MeherPrem} alt={"item.title"} loading="lazy" width="1000" height="550"/>
  </div>
);
}

export default HighlightEvent;
