import React from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Car/Car';

function App() {
    const divStyle = {
        textAlign: 'center',
        color     : 'blue'
    };
    return (
        <div className={App}>
            <div style={divStyle}>
                <h1>Hello world</h1>
            </div>
            <Car/>
        </div>
    );

}

export default App;
