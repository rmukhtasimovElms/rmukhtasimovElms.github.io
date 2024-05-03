import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function UI(props) {
  const [color,setColor] = useState("");
  
  function changeState(e){
    setColor(e.target.value);

  }


  function clickhandler() {
    alert(color);
    document.body.style.backgroundColor = color;
  }
  
  return (<div>Enter a color: <input value={color} onChange={changeState}></input>
  <button onClick={clickhandler}> {props.text}</button>
  </div> );
  }


function App() {
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

        <h1>Hello World</h1>

        <UI text="Click me" />
      </header>
    </div>
  );
}

export default App;
