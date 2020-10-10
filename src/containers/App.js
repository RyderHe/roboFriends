import React , {Component} from 'react';
import CardList from '../components/CardList.js';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css';

class App extends Component{
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log("mounting - constructor");
    }

    componentDidMount(){
        console.log('mounting - componentDidMount');
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response=>{
                return response.json();
            })
            .then(users => {
                this.setState({robots: users});
            })
        
    }

    onSearchChange=(event) => {
        // console.log(event.target.value);
        this.setState({searchfield: event.target.value}); // every time the state get updated, it goes to updating cycle
    }

    render() {
        const { robots, searchfield } = this.state;

        const filterRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        // console.log(filterRobots);
        console.log('mounting - render');

        if (robots.length === 0) {  // !robots.length
            return <h1> Loading </h1>
        } else {
            return (
                <div className='tc'> 
                    <h1 className='f1'> Robot Friends </h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll> 
                        {/* every compnent has props though Scroll did not has it as parameter */}
                        {/* children */}
                        <ErrorBoundary>
                            <CardList robots={ filterRobots }/> 
                        </ErrorBoundary>
                    </Scroll>
                </div>    
            );
        }
    }
}

export default App;