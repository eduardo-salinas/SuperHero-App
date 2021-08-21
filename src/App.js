import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from "./components/LogIn";


function App() {
  return (
    <>
    <Route component={LandingPage}
        path="/" />
      <Route component={Login}
        path="/login" />
    </>
  );
}

export default App;
