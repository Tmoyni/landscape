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
    console.log(classList)
    if (classList.contains('st1')) {
     
      setState({
        layer: 'patio',
      });
    } else if (classList.contains('st2')) {
      setState({
        layer: 'meadow-low',
      });
    } else if (classList.contains('st3')) {
      setState({
        layer: 'meadow-mid',
      });
    } else if (classList.contains('st4')) {
      setState({
        layer: 'meadow-groundcover',
      });
    } else if (classList.contains('st5')) {
      setState({
        layer: 'meadow-high',
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
