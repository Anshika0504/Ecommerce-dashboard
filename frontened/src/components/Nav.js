
import { useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom';
function Nav() {
  const auth=localStorage.getItem('user');
  const navigate=useNavigate();
  useEffect(()=>{
const auth=localStorage.getItem('user');
if(auth){
  navigate("/");
}
  },[])
  const logout =()=>{
  localStorage.clear();
  navigate('/signup');
  }
  return (
    <div>
      <ul className="nav-ul">
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Products</Link></li>
        <li><Link to="/update">Upadate Products</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {
          auth ? <li><Link onClick={logout} to="/signup">Logout</Link></li>:
          <><li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
          </>
        }
      </ul>
    </div>
  )
}

export default Nav
