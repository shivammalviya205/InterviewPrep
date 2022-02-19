
import './App.css';
import React from 'react';
import { Box } from '@material-ui/core';


import Home from './components/home/Home';
import DetailView from './components/post/DetailView';
import DefaultLayout from './components/DefaultLayout';
import {BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';
import SignInUp from './components/SignInUp';
import About from './components/home/About';
import ContactUs from './components/home/ContactUs';

function App() {
  return (
    <>
    <Router>
       <Routes>
       
  
     
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/details/:id" element={<DetailView/>} />
    <Route exact path="/create" element={<CreateView/>} />
    <Route exact path="/update/:id" element={<UpdateView/>} />
    <Route exact path="/login" element={<SignInUp/>} />
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/contactus" element={<ContactUs/>} />

    </Routes>
    </Router>
    </>
  );
}

export default App;

