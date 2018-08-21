import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    allSushi: [],
    consumedSushi: [],
    moneyRemaining: 100,
    sushiLineup: [],
    sushiIndex: 0
  };
}

  componentDidMount() {
    fetch(API)
    .then(resp =>resp.json())
    .then(data => this.setState({ allSushi: data, sushiLineup: data.slice(this.state.sushiIndex, this.state.sushiIndex+4) }));
  }

// full rotation
  sushiFour = () => {
    if(this.state.sushiIndex >= 96){
      this.setState({
        sushiIndex: 0
      })
      return this.state.allSushi.slice(0,4)
    } else {
      this.setState({
        sushiIndex: this.state.sushiIndex + 4
      })
      return [this.state.allSushi[this.state.sushiIndex+4], this.state.allSushi[this.state.sushiIndex+5], this.state.allSushi[this.state.sushiIndex+6], this.state.allSushi[this.state.sushiIndex+7]]
    }
  }

  sushiPlateClick = (sushi, e) => {
    if(this.state.moneyRemaining - sushi.price >= 0) {
      this.setState({
        consumedSushi: [...this.state.consumedSushi, sushi],
        moneyRemaining: this.state.moneyRemaining - sushi.price
      });
    }
  }

// repeats sushis on first click only
  moreSushiClick = (event) => {
    event.preventDefault();
    const updatedSushi = this.sushiFour(this.state.allSushi);
    this.setState({
      sushiLineup: updatedSushi
    })
  }

  render() {
    const filteredallSushi = this.state.sushiLineup.map(sushi => {
      if(this.state.consumedSushi.find(consumedSushi => consumedSushi.id === sushi.id)){
        return { ...sushi, img_url: '' };
      } else {
        return sushi
      }
    });
    return (
      <div className="app">
        <SushiContainer
          allSushi = {filteredallSushi}
          sushiPlateClick = {this.sushiPlateClick}
          moreSushiClick = {this.moreSushiClick}
        />
        <Table
        consumedSushi={this.state.consumedSushi}
        moneyRemaining={this.state.moneyRemaining}/>
      </div>
    );
  }
}

export default App;
