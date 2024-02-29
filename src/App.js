import logo from './logo.svg';
import './App.css';
import Aside from './components/aside';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Footer from './components/Footer';
import Navbar from './components/nav';
import Food from './pages/Food';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar className="col-9"/>
      <Aside className="col-3"/>
      <Routes className="Routes">
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Food" element={<Food/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
