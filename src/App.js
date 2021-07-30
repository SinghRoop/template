import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import SignInFormik from './Pages/SignIn_Formik';
import SignUpFormik from './Pages/SignUpFormik';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/sign-up" component={SignUp} /> */}
          <Route path="/sign-up" component={SignUpFormik} />
          {/* <Route path="/sign-in" component={SignIn} /> */}
          <Route path="/sign-in" component={SignInFormik} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
