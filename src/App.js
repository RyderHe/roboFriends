import React , {Component} from 'react'
import CardList from './CardList.js'
import { robots } from './robots';
import SearchBox from './SearchBox.js'
import './App.css'

class App extends Component{
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange=(event) => {
        // console.log(event.target.value);
        this.setState({searchfield: event.target.value});
    }

    render() {

        const filterRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        // console.log(filterRobots);

        return (
            <div className='tc'> 
                <h1 className='f1'> Robot Friends </h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={ filterRobots }/>
            </div>    
        );
    }
}

export default App;