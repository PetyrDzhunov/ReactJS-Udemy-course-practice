import React, { useState, useCallback } from 'react';

import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';
import './App.css';

function App() {
  console.log('APP RUNNING');

  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toogle Paragraph!</Button>
    </div>
  );
}

export default App;
