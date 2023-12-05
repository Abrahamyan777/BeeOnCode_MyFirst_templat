import  { useState } from 'react';
import './App.css';
import Header from './componets/header/header'
import Main from './componets/main/main.js'
import Footer from './componets/footer/footer.js'
import Hidenlogin from './componets/hidenLogin/hidenLogin';
import {v4 as uuidv4} from 'uuid'
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const [text, setText] = useState([
    {
      id: uuidv4(),
      textInfo: "first Todo",
      logic: false
    },
    {
      id: uuidv4(),
      textInfo: "second Todo",
      logic: false
    },
    {
      id: uuidv4(),
      textInfo: "third Todo",
      logic: false
    }
  ]);


  return (
    <div className="App">
      <Header />
      <Main  text={text} setText={setText}/>
      <Footer />
    </div>
  );
}

export default App;