import React from 'react';

function TestPage() {
  const handleLevelSelection = (level) => {
    // Handle the selected penetration test level
    console.log(`Selected penetration test level: ${level}`);
    // You can implement logic to perform the selected test level here
  };

  const buttonStyle = {
    margin: '8px', // Add margin to create space between buttons
  };

  return (
    <div>
      <h2>Test Page</h2>
      <p>Which penetration test level would you like to perform?</p>
      <button style={buttonStyle} onClick={() => handleLevelSelection('Low')}>
        Low Level Test
      </button>
      <button style={buttonStyle} onClick={() => handleLevelSelection('Moderate')}>
        Moderate Level Test
      </button>
      <button style={buttonStyle} onClick={() => handleLevelSelection('High')}>
        High Level Test
      </button>
    </div>
  );
}

export default TestPage;