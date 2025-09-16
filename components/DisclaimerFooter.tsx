import React, { useState, useRef, useEffect } from 'react';

const DisclaimerFooter: React.FC = () => {
  const [show, setShow] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (show && popupRef.current) {
      popupRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [show]);

  return (
    <footer style={{ textAlign: 'center', padding: 20, background: '#f5f5f5' }}>
      <button
        id="disclaimerBtn"
        style={{
          background: 'none',
          border: 'none',
          color: '#0077cc',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
        onClick={() => setShow((prev) => !prev)}
      >
        Disclaimer
      </button>
      {show && (
        <div
          id="disclaimerPopup"
          ref={popupRef}
          style={{
            display: 'block',
            maxWidth: 600,
            margin: '10px auto',
            padding: 15,
            background: '#fff',
            border: '1px solid #ccc',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            fontSize: 14,
            lineHeight: 1.5,
            position: 'relative',
          }}
        >
          <button
            aria-label="Close disclaimer"
            onClick={() => setShow(false)}
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              background: 'none',
              border: 'none',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#888',
              cursor: 'pointer',
            }}
          >
            ×
          </button>
          This application uses GoogleGenAI to generate financial insights based on prompts referencing reputable sources like Reuters, Bloomberg, MarketWatch, and economic calendar events. However, the data is produced by the Gemini model and not directly pulled from these platforms or APIs.  <br /><br />
          The only direct data source is GoogleGenAI via the @google/genai package. Outputs may not reflect real-time market conditions, so users should verify critical information through official channels.
        </div>
      )}
    </footer>
  );
};

export default DisclaimerFooter;
