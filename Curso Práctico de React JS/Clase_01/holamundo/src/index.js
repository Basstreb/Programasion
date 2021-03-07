import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HolaMundo from './components/HolaMundo';
import Button from './components/Button';
import Stateful from './components/Stateful';
import Button2 from './components/Button2';
import reportWebVitals from './reportWebVitals';

//ReactDOM.render(<HolaMundo />, document.getElementById('root'));
//ReactDOM.render(<Stateful />, document.getElementById('root'));
ReactDOM.render(<Button text='Click' text2="Prueba" algo="JaJa Saludos"/>, document.getElementById('root'));
//ReactDOM.render(<Button2 />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
