import { Route } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import SearchHero from './components/SearchHero';
import GlobalStyle from './GlobalStyles';


function App() {
  return (
    <>
      <GlobalStyle />
      <Route component={LandingPage}
        exact path='/' />
      <Route component={NavBar}
        path={['/home', '/hero/:id','/search']} />
      <Route component={Home}
        path='/home' />
        <Route component={SearchHero}
        path='/search' />
    </>
  );
}

export default App;
