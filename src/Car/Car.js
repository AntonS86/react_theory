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
export default props => {
    const inputClasses = ['input'];
    if (props.name !== '') {
        inputClasses.push('green');
    } else {
        inputClasses.push('red');
    }

    if (props.name.length > 4) {
        inputClasses.push('bold');
    }
    return (
        <div className="car-card">
            <p>Car name: {props.name}</p>
            <p>Year: <strong>{props.year}</strong></p>
            <input type="text"
                   onChange={props.onChangeName}
                   value={props.name}
                   className={inputClasses.join(' ')}
            />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
}