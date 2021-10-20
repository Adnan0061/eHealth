import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';
import Doctors from './pages/Doctors/Doctors';
import NotFound from './pages/NotFound/NotFound';
import Booking from './pages/Booking/Booking';
import OnlineDetails from './pages/OnlineDetails/OnlineDetails';
import PhysicalDetails from './pages/PhysicalDetails/PhysicalDetails';
import MedicineDelivared from './pages/MedicineDelivared/MedicineDelivared';
import Ambulance from './pages/Ambulance/Ambulance';
import CustomerCare from './pages/CustomerCare/CustomerCare';
import Insurance from './pages/Insurance/Insurance';
import Register from './pages/Register/Register';
import Login from './pages/Register/Login';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/doctors'>
            <Doctors></Doctors>
          </Route>
          <Route path='/online-consultation'>
            <OnlineDetails></OnlineDetails>
          </Route>
          <Route path='/physical-consultation'>
            <PhysicalDetails></PhysicalDetails>
          </Route>
          <Route path='/doctor/:name'>
            <Booking></Booking>
          </Route>
          <Route path='/order-medicine'>
            <MedicineDelivared> </MedicineDelivared>
          </Route>
          <Route path='/ambulance'>
            <Ambulance></Ambulance>
          </Route>
          <Route path='/customer-care'>
            <CustomerCare></CustomerCare>
          </Route>
          <Route path='/insurance-details'>
            <Insurance></Insurance>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/Login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
