import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navBar'
import RecordList from './components/recordList'
import Edit from './components/edit'
import Create from './components/create'
import './App.css'

const App = () => {
  return (
    <div className='App'>
			<Navbar />
			<div style={{ margin: 20 }}>
			<Routes>
				<Route exact path='/' element={<RecordList />} />
				<Route path='/edit/:id' element={<Edit />} />
				<Route path='/create' element={<Create />} />
			</Routes>
			</div>
    </div>
  );
}

export default App;

/*
import './App.css';
import logo from './LogoDedGeo.jpg';

function AppOld() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/bahim22"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Profile
        </a>
      </header>
    </div>
  );
}
*/
