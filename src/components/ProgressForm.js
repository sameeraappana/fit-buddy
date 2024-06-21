import React, { useState } from 'react';

const ProgressForm = ({ onProgressUpdate }) => {
  const [distance, setDistance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedDistance = parseFloat(distance);
    if (!isNaN(parsedDistance) && parsedDistance > 0) {
      onProgressUpdate(parsedDistance);
      setDistance('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Distance covered today (miles):
        <input 
          type="number" 
          value={distance} 
          onChange={(e) => setDistance(e.target.value)} 
          required 
        />
      </label>
      <button type="submit">Update Progress</button>
    </form>
  );
};

export default ProgressForm;
