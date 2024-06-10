import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Nav/>
     <Routes>

      <Route element={<PrivateComponent/>}>
      <Route path="/" element={<h1>Product pasting component</h1>}></Route>
     <Route path="/add" element={<AddProduct/>}></Route>
     <Route path="/update" element={<h1>update Component</h1>}></Route>
     <Route path="/logout" element={<h1>Logout</h1>}></Route>
     <Route path="/profile" element={<h1>Profile Page</h1>}></Route>
     <Route path="/" element={<h1>Profile Page</h1>}></Route>
    </Route>
     
     <Route path="/Signup" element={<Signup></Signup>}></Route>
     <Route path="/login" element={<Login></Login>}></Route>
     </Routes>
     </BrowserRouter>
     <Footer/>
     
    </div>
  );
}

export default App;
