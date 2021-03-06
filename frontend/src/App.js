import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import HomePage from './components/HomePage'
import AnimeContainer from './components/AnimeContainer';
import AnimeHistory from './components/AnimeHistory'
import AnimePageContainer from './components/AnimePageContainer'

function App() {
  return (
    <>
    <Banner></Banner>
    <Router>
    <div className="App">    
        <NavBar />
        <br/>
        <Route exact path="/" render={() => <div><HomePage/></div>} />
        <Route exact path="/animes" render={() => <AnimeContainer/>} />
        <Route exact path="/history" render={() => <AnimeHistory/>} />
        <Route path="/animes/:id" render={ routerProps => <AnimePageContainer {...routerProps} />} />
        <br/><br/><br/>
    </div>
    
    </Router>
    </>
  );
}

export default App;
