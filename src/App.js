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
import Covid from './Components/Covid/Covid';

function App() {
  return (

      // main app 

    <div className="App">

      {/* all router inside auth provider  */}

      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">  {/**for root direcotry */}
            <Home></Home>
          </Route>
          <Route exact path="/home"> {/*for home direcotry*/ }
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/find-a-doctor"> {/*for doctor direcotry*/ }
            <FindDoctor></FindDoctor>
          </PrivateRoute>
          <Route exact path="/find-a-hospital"> {/*for find a hospital direcotry*/ }
            <FindHospital></FindHospital>
          </Route>
          <Route exact path="/health"> {/*for health section direcotry*/ }
            <Health></Health>
          </Route>
          <PrivateRoute exact path="/services/:services_name"> {/*for service view direcotry*/ }
              <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <PrivateRoute exact path="/health/:title"> {/*for per post on health direcotry*/ }
              <HealthDetails></HealthDetails>
          </PrivateRoute>
          <PrivateRoute exact path="/covid-status"> {/*for login direcotry*/ }
            <Covid></Covid>
          </PrivateRoute>
          <Route exact path="/login"> {/*for login direcotry*/ }
            <Login></Login>
          </Route>
          <Route exact path="/signup"> {/*for signup direcotry*/ }
            <Signup></Signup>
          </Route>
          <Route exact path="*"> {/*for 404 direcotry*/ }
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
