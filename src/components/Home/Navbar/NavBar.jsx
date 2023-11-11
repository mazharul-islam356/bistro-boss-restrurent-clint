import { NavLink } from "react-router-dom";

const NavBar = () => {

  const navLink = <div>
  <NavLink  className="ml-4" to='/'>Home</NavLink>
  <NavLink  className="ml-4" to='/menu'>Our Menu</NavLink>
  <NavLink  className="ml-4" to='/order'>Order</NavLink>
  </div>
  return (
    <div className="text-white">
      <div className="navbar fixed z-10 opacity-60  bg-black max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
        
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {navLink}
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
