import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

export const ClickedContext = React.createContext(false);

class App extends React.Component {

    constructor(props) {
        console.log('App constructor');
        super(props);

        this.state = {
            clicked  : false,
            cars     : [
                {name: 'Ford', year: 2018},
                {name: 'Audi', year: 2016},
                {name: 'Mazda', year: 2010},
            ],
            pageTitle: 'React Components',
            showCars : false
        };
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    };

    deleteHandler(index) {
        const cars = this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({cars});
    };

    onChangeName(name, index) {
        const car   = this.state.cars[index];
        car.name    = name;
        const cars  = [...this.state.cars];
        cars[index] = car;
        this.setState({cars});
    }

    componentWillMount() {
        console.log('App componentWillMount');
    }

    componentDidMount() {
        console.log('App componentDidMount');
    }

    render() {
        console.log('App render');
        const divStyle = {
            textAlign: 'center',
        };

        let cars = null;
        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key={index}>
                        <Car
                            index={index}
                            name={car.name}
                            year={car.year}
                            onChangeName={event => this.onChangeName(event.target.value, index)}
                            onDelete={this.deleteHandler.bind(this, index)}
                        />
                    </ErrorBoundary>
                )
            });
        }

        return (
            <div className="App" style={divStyle}>
                <h1>{this.props.title}</h1>

                <ClickedContext.Provider value={this.state.clicked}>
                    <Counter/>
                </ClickedContext.Provider>
                <hr/>
                <button className={'AppButton'} onClick={this.toggleCarsHandler}>Toggle Cars</button>
                <button onClick={() => this.setState({clicked: true})}>Changed Clicked</button>
                <div style={{
                    width  : 400,
                    margin : 'auto',
                    padding: '20px'
                }}>
                    {cars}
                </div>
            </div>
        );
    }
}

export default App;
