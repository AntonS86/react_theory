import React from 'react';
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
    <div>
        <p>Car name: {props.name}</p>
        <p>Year: <strong>{props.year}</strong></p>
        {props.children}
    </div>
);