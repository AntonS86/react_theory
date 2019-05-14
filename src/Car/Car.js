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
export default () => (
    <div>
        <p>This is car Component</p>
        <p>Number: <strong>{Math.round(Math.random() * 100)}</strong></p>
    </div>
);