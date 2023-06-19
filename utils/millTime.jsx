import { useState } from 'react';

const MillisecondsToTime = () => {
  const [milliseconds, setMilliseconds] = useState(0);

  const convertToTime = () => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const formattedTime = `${hours}:${minutes % 60}:${seconds % 60}`;

    return formattedTime;
  };

  return (
    <div>
      <h2>Milliseconds to Time Converter</h2>
      <label htmlFor="milliseconds">Enter milliseconds:</label>
      <input
        type="number"
        id="milliseconds"
        value={milliseconds}
        onChange={(e) => setMilliseconds(Number(e.target.value))}
      />
      <p>Time: {convertToTime()}</p>
    </div>
  );
};

export default MillisecondsToTime;
