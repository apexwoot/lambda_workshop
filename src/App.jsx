import './App.css';
import { StupidTable } from './components/StupidTable';
import { useState } from 'react'
import { InteractionComponent } from './components/InteractionComponent'

function App() {
    const [itemsCount, setItemsCount] = useState(0)
  return (
    <div className="App">
        <InteractionComponent itemsSetter={setItemsCount} />
        <StupidTable itemsCount={itemsCount}/>
    </div>
  );
}

export default App;
