import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Nav/>
     <Routes>
     <Route path="/" element={<h1>Product pasting component</h1>}></Route>
     <Route path="/add" element={<h1>Add Product Component</h1>}></Route>
     <Route path="/update" element={<h1>update Component</h1>}></Route>
     <Route path="/logout" element={<h1>Logout</h1>}></Route>
     <Route path="/profile" element={<h1>Profile Page</h1>}></Route>
     </Routes>
     </BrowserRouter>
     <Footer/>
     
    </div>
  );
}

export default App;
