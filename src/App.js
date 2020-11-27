import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import First from './components/1stPlace';
import Row from './components/OtherPlacings';
import Canvas from './components/Canvas';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: {
        country: "",
        team: "",
        name: "",
        color: "",
        char1: "",
        char2: "",
        char3: ""
      },
      second: {
        country: "",
        team: "",
        name: "",
        char1: "",
        char2: "",
        char3: "",
        char4: ""
      },
      third: {
        country: "",
        team: "",
        name: "",
        char1: "",
        char2: "",
        char3: "",
        char4: ""
      },
      forth: {
        country: "",
        team: "",
        name: "",
        char1: "",
        char2: "",
        char3: "",
        char4: ""
      },
      fifth: {
        country: "",
        team: "",
        name: "",
        char1: "",
        char2: "",
        char3: "",
        char4: ""
      },
      fifth2: {
        country: "",
        team: "",
        name: "",
        char1: "",
        char2: "",
        char3: "",
        char4: ""
      },
      seventh: {
        country: "",
        team: "",
        name: "",
        char1: "",
        char2: "",
        char3: "",
        char4: ""
      },
      seventh2: {
        country: "",
        team: "",
        name: "",
        char1: "",
        char2: "",
        char3: "",
        char4: ""
      },
      date: "",
      entrants: "",
      tournament: "",
      clicked: false
    };
  }

  onDataChange(newData) {

    console.log(this.state[newData.placing])
    console.log(newData[newData.id])


    let data = Object.assign({}, this.state[newData.placing]);  // creating copy of state variable 
    data[newData.id] = newData[newData.id];                     // update the property, assign a new value                 

    this.setState({ [newData.placing]: data });
    this.setState({ clicked: false })

  }

  onLabelsChange(event) {
    this.setState({ [event.target.getAttribute("id")]: event.target.value });
  }

  onSubmit() {
    this.setState({ clicked: true })
  }

  render() {
    return (
      <div>
        <h1>EUBC Top 8 Generator</h1>
        <div class="grid-container">
          <div class="grid-container">
            <First place="first" name="1st" changeData={this.onDataChange.bind(this)} />
            <Row place="second" name="2nd" changeData={this.onDataChange.bind(this)} />
            <Row place="third" name="3rd" changeData={this.onDataChange.bind(this)} />
            <Row place="forth" name="4th" changeData={this.onDataChange.bind(this)} />
            <Row place="fifth" name="5th" changeData={this.onDataChange.bind(this)} />
            <Row place="fifth2" name="5th" changeData={this.onDataChange.bind(this)} />
            <Row place="seventh" name="7th" changeData={this.onDataChange.bind(this)} />
            <Row place="seventh2" name="7th" changeData={this.onDataChange.bind(this)} />

          </div>


          {
            this.state.clicked ?
              <Canvas id="canvas" data={this.state} />
              :
              <div class="empty"></div>
          }
        </div>
        
        <div class="labels">
          <p>Labels</p>
          <label>Date: </label>
          <input id="date" onChange={this.onLabelsChange.bind(this)} type="text" />
          <label>Entrants: </label>
          <input id="entrants" onChange={this.onLabelsChange.bind(this)} type="number" />
          <label>Tournament: </label>
          <input id="tournament" onChange={this.onLabelsChange.bind(this)} type="text"  ></input>
          
          <button onClick={this.onSubmit.bind(this)}>Send</button>
        </div>


      </div>
    );
  }
}



export default App;
