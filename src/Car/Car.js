import React from 'react';
//import Radium from 'radium';
import './Car.css';


class Car extends React.Component {
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('Car componentWillReceiveProps', nextProps, nextContext);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Car shouldComponentUpdate', nextProps, nextState, nextContext);
        return nextProps.name.trim() !== this.props.name.trim();
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('Car componentWillUpdate', nextProps, nextState, nextContext);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Car componentDidUpdate', prevProps, prevState, snapshot);
    }

    componentWillUnmount() {
        console.log('Car componentWillUnmount');
    }

    /* static getDerivedStateFromProps(nextProps, prevState) {
         console.log('Car getDerivedStateFromProps', nextProps, prevState);
         return prevState;
     }*/

    /*getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Car getSnapshotBeforeUpdate', prevProps, prevState);
    }*/

    render() {
        console.log('Car render');
        if (Math.random() > 0.7) {
            throw new Error('Car random fail');
        }

        const inputClasses = ['input'];
        if (this.props.name !== '') {
            inputClasses.push('green');
        } else {
            inputClasses.push('red');
        }

        if (this.props.name.length > 4) {
            inputClasses.push('bold');
        }

        const style = {
            border   : '1px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
            ':hover' : {
                border   : '1px solid #aaa',
                boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
                cursor   : 'pointer'
            }
        };
        return (
            <div className='car-card' style={style}>
                <p>Car name: {this.props.name}</p>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input type="text"
                       onChange={this.props.onChangeName}
                       value={this.props.name}
                       className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Car;