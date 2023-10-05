import { Link, NavLink } from "react-router-dom";
import deemyAvatar from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);
    const navLiks = <>
        <NavLink to='/'> <li><a>Home</a></li></NavLink>
        <NavLink to='/about'> <li><a>About</a></li></NavLink>
        <NavLink to='/career'> <li><a>Career</a></li></NavLink>
    </>
  // hadel logOut btn
  const handelLogOut = () =>{
      logOut()
      .then(() =>{
        console.log('LogOut suceesfully')
      })
      .catch(err => console.error(err))
  }

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLiks}
            </ul>
          </div>
        
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navLiks}
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        {
            user?  <img src={user.photoURL} alt="avatar" /> :
            <img src={deemyAvatar} alt="avatar" />
         }
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box p-8">
        {
          user && 
          <div>  <li>Email: {user.email}</li>
          <li>Name : {user.displayName}</li></div>
        }
      </ul>
    </div>
        {
          user ?  
          <button onClick={handelLogOut} className="bg-[#403F3F] px-8 
          py-3 ml-4 text-white text-xl"> LogOut</button> :<Link to='/login'> <button className="bg-[#403F3F] px-8 py-3 ml-4 text-white text-xl"> LogIn</button>
        </Link>

       }
        </div>
  
      </div>
    );
};

export default Navbar;