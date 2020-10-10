import React , {Component} from 'react'
import CardList from './CardList.js'
// import { robots } from './robots';
import SearchBox from './SearchBox.js'
import './App.css'

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

        const filterRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        // console.log(filterRobots);
        console.log('mounting - render');

        if (this.state.robots.length === 0) {
            return <h1> Loading </h1>
        } else {
            return (
                <div className='tc'> 
                    <h1 className='f1'> Robot Friends </h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={ filterRobots }/>
                </div>    
            );
        }
    }
}

export default App;