import React, { useState } from 'react';

const DisclaimerFooter: React.FC = () => {
  const [show, setShow] = useState(false);

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
          }}
        >
          This application uses the Gemini API (GoogleGenAI) to generate financial insights based on prompts referencing reputable sources like Reuters, Bloomberg, MarketWatch, and economic calendar events. However, the data is produced by the Gemini model and not directly pulled from these platforms or APIs.  <br /><br />
          The only direct data source is the Gemini API via the @google/genai package. Outputs may not reflect real-time market conditions, so users should verify critical information through official channels.
        </div>
      )}
    </footer>
  );
};

export default DisclaimerFooter;
