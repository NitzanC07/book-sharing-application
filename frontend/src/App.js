import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer  } from 'react-toastify';
import './app.css';
import './styles/form/form.css';
import './styles/dashboard/dashboard.css';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AddNewBook from './pages/AddNewBook';
import MyBooks from './pages/MyBooks';
import Footer from './components/Footer/Footer';
import UserPersonalData from './pages/UserPersonalData';

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Header />

          <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create-book' element={<AddNewBook />} />
            <Route path='/my-books' element={<MyBooks />} />
            <Route path='/me' element={<UserPersonalData />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>

      <ToastContainer />
      
    </>
    
  );
}

export default App;
