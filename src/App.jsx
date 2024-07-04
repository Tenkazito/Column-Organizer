import Header from './components/parts/Header';
import Principal from './components/parts/Principal';
import { useState } from 'react';

function App() {
  const [arrayHeader, setArrayHeader] = useState([]);
  const [indexHeader, setIndexHeader] = useState();

  const getArrayHeader = (array, index) => {
    setArrayHeader(array);
    setIndexHeader(index);
  }

  return (
    <div className='flex flex-col h-screen'>
      <Header sendArray={getArrayHeader} />
      <Principal printArray={ arrayHeader } printIndex={ indexHeader }/>
    </div>
  );
}

export default App;
