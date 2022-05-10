import TextBox from './components/TextBox';
import { useState } from 'react';
function App() {
  const [currentValue, setCurrentValue] = useState("Sampletext"); const changeValue = (e) => { setCurrentValue(e.target.value); }
  return (<div className="App">
    <TextBox initialValue={currentValue} changeValueHandler={changeValue} />
    <h2>{currentValue}</h2>
  </div>);
}
export default App;