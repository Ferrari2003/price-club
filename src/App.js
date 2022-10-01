
import './App.css';
import AssignmentMark from './components/AssingmentMark/AssignmentMark';

import NavBar from './components/NavBar/NavBar';
import PhoneBar from './components/PhoneBar/PhoneBar';
import Pricing from './components/Pricing/Pricing';


function App() {
  return (
    <div className="App">
       <NavBar></NavBar>
       <h1 className='text-6xl font-bold underline'>This is a Header</h1>
       <p>This is just paragraph</p>
       <Pricing></Pricing>
       <AssignmentMark></AssignmentMark>
       <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
