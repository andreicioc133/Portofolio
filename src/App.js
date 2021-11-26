import React, { useEffect} from 'react';
import './index.scss';

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
