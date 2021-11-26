import React, { useState , useEffect} from 'react';
import './index.scss';
import { linearGradients } from './styles/styles';
import {Container, Row , Col, Image} from 'react-bootstrap'
import { bodyCss } from './Components/bodyCss';
import MainScreen from './Screens/MainScreen';

function App() {

  //body style
  useEffect(() => {
    bodyCss()
  }, [])

  return (
    <MainScreen />
  );
}

export default App;
