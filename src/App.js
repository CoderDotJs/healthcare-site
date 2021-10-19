import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import FindDoctor from './Components/FindDoctor/FindDoctor';
import FindHospital from './Components/FindHospital/FindHospital';
import Health from './Components/Health/Health';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/find-a-doctor">
            <FindDoctor></FindDoctor>
          </Route>
          <Route exact path="/find-a-hospital">
            <FindHospital></FindHospital>
          </Route>
          <Route exact path="/health">
            <Health></Health>
          </Route>
          <Route exact path="/services/:services_name">
              <ServiceDetail></ServiceDetail>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
