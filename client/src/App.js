import React from 'react';
import Players from './components/Players';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(playerData => {
        console.log('PlayerData', playerData);
        this.setState({ players: playerData });
      });
  };

  render() {
    return (
      <div>
        <Players players={this.state.players} />
      </div>
    );
  }
}

export default App;