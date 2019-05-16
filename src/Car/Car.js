import React from 'react';
import withClass from '../hoc/withClass';
import './Car.scss';


class Car extends React.Component {

    render() {
        console.log('Car render');

        const inputClasses = ['input'];
        if (this.props.name !== '') {
            inputClasses.push('green');
        } else {
            inputClasses.push('red');
        }

        if (this.props.name.length > 4) {
            inputClasses.push('bold');
        }


        return (
            <React.Fragment>
                <p>Car name: {this.props.name}</p>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input type="text"
                       onChange={this.props.onChangeName}
                       value={this.props.name}
                       className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}

export default withClass(Car, 'car-card');