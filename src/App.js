import React from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Car/Car';

function App() {
    const divStyle = {
        textAlign: 'center',
    };
    return (
        <div className={App} style={divStyle}>
            <div >
                <h1>Hello world</h1>
            </div>
            <Car/>
            <Car/>
        </div>
    );

}

export default App;
