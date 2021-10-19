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
import HealthDetails from './Components/HealthDetails/HealthDetails';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
          <PrivateRoute exact path="/find-a-doctor">
            <FindDoctor></FindDoctor>
          </PrivateRoute>
          <Route exact path="/find-a-hospital">
            <FindHospital></FindHospital>
          </Route>
          <Route exact path="/health">
            <Health></Health>
          </Route>
          <PrivateRoute exact path="/services/:services_name">
              <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <PrivateRoute exact path="/health/:title">
              <HealthDetails></HealthDetails>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
          <Route exact path="*">
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
