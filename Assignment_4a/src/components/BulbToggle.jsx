import React, { useState } from 'react';
import './BulbToggle.css'; // must be correct relative path

export default function BulbToggle() {
  const [isOff, setIsOff] = useState(true);
  const toggleBulb = () => setIsOff(prev => !prev);

  return (
    <div className="bt-container">
      <div className="bt-card">
        <img
          className="bt-bulb"
          src={isOff
            ? "https://thumbs.dreamstime.com/b/d-illustration-empty-light-bulb-isolated-white-background-realistic-d-rendering-electric-lamp-inside-d-103349315.jpg"
            : "https://5.imimg.com/data5/WL/SG/MY-8835990/10w-gls-light-bulb.jpg"}
          alt={isOff ? "Bulb Off" : "Bulb On"}
        />
        <h2 className="bt-status">{isOff ? "Bulb is OFF" : "Bulb is ON"}</h2>
      </div>

      <button
        onClick={toggleBulb}
        className={`bt-btn ${isOff ? 'bt-green' : 'bt-red'}`}
      >
        {isOff ? 'Turn On' : 'Turn Off'}
      </button>
    </div>
  );
}
