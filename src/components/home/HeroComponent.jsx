import React, { useRef, useEffect } from "react";
import Netting from "../../assets/Group.png";

function HeroComponent() {
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
      <img ref={imageRef} src={Netting} alt={"item.title"} loading="lazy" width="1000" height="550"/>
    </div>
  );
}

export default HeroComponent