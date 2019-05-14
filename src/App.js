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
            <Car name={'Ford'} year={2018}/>
            <Car name='Audi' year={2016}/>
            <Car name={'Mazda'} year={2010}/>
        </div>
    );

}

export default App;
