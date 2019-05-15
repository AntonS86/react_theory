import React from 'react';
import './Car.css';
/*function Car() {
    return (
        <h2>This is car Component</h2>
    )
}*/

/*const car = () => {
    return (
        <h2>This is car Component</h2>
    )
}*/

/*const car = () => (
    <div>
        This is car Component
        <span>Test</span>
    </div>
);*/
export default props => (
    <div className="car-card">
        <p>Car name: {props.name}</p>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
);