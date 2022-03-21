import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CustomersComponent from './components/CustomersComponent';
import CreateCustomerComponent from './components/CreateCustomerComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent/>
        <Routes>
          <Route exact path='/' element = { <CustomersComponent/> }></Route>
          <Route path='/customer/add' element = { <CreateCustomerComponent/> }></Route>
        </Routes>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
