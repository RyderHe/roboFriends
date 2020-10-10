import React , {Component} from 'react'
import CardList from './CardList.js'
import { robots } from './robots';
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
        this.setState({robots: robots});
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