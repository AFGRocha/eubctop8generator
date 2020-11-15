import logo from './logo.svg';
import './App.css';
import First from './components/1stPlace';
import Row from './components/OtherPlacings';

function App() {
  return (
    <div className="App">
     <h1>Top 8 Generator</h1>
     <First place="1st "/>
     <Row place="2nd "/>
     <Row place="3rd "/>
     <Row place="4th "/>
     <Row place="5th "/>
     <Row place="5th "/>
     <Row place="7th "/>
     <Row place="7th "/>
    </div>
  );
}

export default App;
