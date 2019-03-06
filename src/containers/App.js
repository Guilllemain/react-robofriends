import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from './ErrorBoundry';
import './App.css';

class App  extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchInput: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(robots => this.setState({robots}));
  }

  onSearchChange = event => {
    this.setState({searchInput: event.target.value});
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })
    return (
      <div className="text-center m-4">
        <h1 className="text-5xl">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <ErrorBoundry>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
