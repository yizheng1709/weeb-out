import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
       
        <NavBar />
        <Route exact path="/" render={() => <div>Home</div>} />
      {/* </header> */}
    </div>
    </Router>
  );
}

export default App;
