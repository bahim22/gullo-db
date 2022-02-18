import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navBar'
import RecordList from './components/recordList'
import Edit from './components/edit'
import Create from './components/create'

const App = () => {
  return (
    <div>
			<Navbar  />
			<Routes>
				<Route  exact path='/' element={<RecordList  />} />
				<Route path='/edit/:id' element={<Edit  />}  />
				<Route path='/create' element={<Create  />}  />
			</Routes>
    </div>
  );
}

export default App;

/*
import './App.css';
import logo from './LogoDedGeo.jpg';
import './App.css';

function AppOld() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
