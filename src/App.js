import './App.css';
import React from 'react';
import First from './components/1stPlace';
import Row from './components/OtherPlacings';

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
      tournament: ""
    };
  }

  onDataChange(newData) {

    console.log(this.state[newData.placing])
    console.log(newData[newData.id])


    let data = Object.assign({}, this.state[newData.placing]);  // creating copy of state variable 
    data[newData.id] = newData[newData.id];                     // update the property, assign a new value                 

    this.setState({ [newData.placing]: data });

  }

  onLabelsChange(event){
    this.setState({[event.target.getAttribute("id")]: event.target.value});
  }

  onSubmit(){
    let obj = this.state
    console.log(obj)
  }

  render() {
    return (
      <div>
        <h1>EUBC Top 8 Generator</h1>
        <First place="first" name="1st" changeData={this.onDataChange.bind(this)} />
        <Row place="second" name="2nd" changeData={this.onDataChange.bind(this)} />
        <Row place="third" name="3rd" changeData={this.onDataChange.bind(this)} />
        <Row place="forth" name="4th" changeData={this.onDataChange.bind(this)} />
        <Row place="fifth" name="5th" changeData={this.onDataChange.bind(this)} />
        <Row place="fifth2" name="5th" changeData={this.onDataChange.bind(this)} />
        <Row place="seventh" name="7th" changeData={this.onDataChange.bind(this)} />
        <Row place="seventh2" name="7th" changeData={this.onDataChange.bind(this)} />
        <br></br>
        <div> <p class="placing">Labels</p>
          <label>Date</label>
          <input id="date" onChange={this.onLabelsChange.bind(this)} type="text"/>
          <label>Entrants</label>
          <input id="entrants" onChange={this.onLabelsChange.bind(this)} type="number"  />
          <label>Tournament</label>
          <input id="tournament" onChange={this.onLabelsChange.bind(this)} type="text"  ></input></div>
          <br></br>

        <button onClick={this.onSubmit.bind(this)}>teste</button>
      </div>
    );
  }
}



export default App;
