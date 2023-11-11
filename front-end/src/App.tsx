import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import './App.css';
import Login from './pages/login/login';
import Testing from './pages/testing';

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/testing' Component={Testing}/>
        </Routes>
      </Layout>
    </React.Fragment>
  );
}

export default App;
