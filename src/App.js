import './App.css';
import Diagram from './components/Diagram';
import InfoPanel from './components/InfoPanel'
import { useState } from 'react';


function App() {
  const [state, setState] = useState({
    layer: 'none',
  });

  const handleClick = (t) => {
    let classList = t.target.classList;

    if (classList.contains('cls-1')) {
      console.log("hello")
      setState({
        layer: 'meadow',
      });
    } else {
      setState({
        layer: 'none',
      });
    }

  };

  return (
    <div className="App">
      
      <h1>Landscaping Plan</h1>
      {state.layer === "none"
        ? <div></div>
        : <InfoPanel />
      }
      
      <Diagram onClick={handleClick}/>

    </div>
  );
}

export default App;
