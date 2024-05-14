import { useState, useEffect } from 'react';
import { ScrollMode, ViewMode, Viewer } from '@react-pdf-viewer/core';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import pdfFile from './Sample.pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';

function Pdf() {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { GoToNextPage, GoToPreviousPage, CurrentPageInput } = pageNavigationPluginInstance;

  const [defaultScale, setDefaultScale] = useState({
    scale: 1,
    width: '40vw',
  });
  useEffect(() => {
    const handleResize = () => {
      const isTab = window.innerWidth <= 767 && window.innerWidth > 596;
      const isMobile = window.innerWidth <= 596;
      if(isTab) {
        setDefaultScale({
          scale: 1,
          width: '100vw',
        });
      }
      if(isMobile) {
        setDefaultScale({
          scale: 0.7,
          width: '100vw',
        });
      }
    };

    handleResize(); // Set the initial scale
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        border: '1px solid rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        height: '85vh',
        padding: '10px',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          backgroundColor: '#eeeeee',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'center',
          padding: '4px',
        }}
      >
        <div style={{ padding: '0px 2px', rotate: '270deg' }}>
          <GoToPreviousPage />
        </div>
        <div style={{ padding: '' }}>
          <CurrentPageInput />
        </div>
        <div style={{ margin: '0px 0px 0px 10px', rotate: '270deg' }}>
          <GoToNextPage />
        </div>
      </div>
      <div style={{ flex: 1, overflow: 'hidden', flexGrow: 1, height: '100vh', width: defaultScale.width  }}>
        <Viewer
          defaultScale={defaultScale.scale}
          enableSmoothScroll
          viewMode={ViewMode.SinglePage}
          scrollMode={ScrollMode.Horizontal}
          fileUrl={pdfFile}
          plugins={[pageNavigationPluginInstance]}
        />
      </div>
    </div>
  );
}

export default Pdf;