import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => setCount(count - 1), 1000); 
    }
  }, [count]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <h1>{count}</h1>
    </div>
  );
}

export default CountdownTimer;
