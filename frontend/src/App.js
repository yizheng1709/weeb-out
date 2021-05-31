// import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import HomePage from './components/HomePage'

function App() {
  return (
    <>
    <Banner></Banner>
    <Router>
    <div className="App">    
        <NavBar />
        <Route exact path="/" render={() => <div>Home<HomePage/></div>} />
    </div>
    
    </Router>
    </>
  );
}

export default App;
