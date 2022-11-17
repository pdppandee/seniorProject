import logo from './logo.svg';
import './App.css';

import Start from './components/js/start';
import SelectPlayers from './components/js/selectplayers';
import DeviceConnection from './components/js/deviceconnection';
import SongSelection from './components/js/songselection';
import Play from './components/js/play';

import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Start/>} />
      <Route path='selectplayers' element={<SelectPlayers/>} />
      <Route path='deviceconnection' element={<DeviceConnection/>} />
      <Route path='Song' element={<SongSelection/>} />
      <Route path='play' element={<Play/>} />
    </Routes>
  );
}


export default App;
