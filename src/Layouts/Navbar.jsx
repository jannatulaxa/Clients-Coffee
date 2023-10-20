import { Link, NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/Bs";
import usePrivateHook from "../Hooks/usePrivateHook";
import logo from "../../src/assets/Logo.png";

const Navbar = () => {
  const { user, logOut } = usePrivateHook();

  const handleLogout = () => {
    logOut();
  };
  const userName = user?.displayName;

  const navitems = (
    <>
      <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "text-black font-semibold" : isActive ? " text-[#CF8613] underline font-semibold" : "text-white font-semibold"}> Home</NavLink></li>
      <li><NavLink to="/artist" className={({ isActive, isPending }) => isPending ? "black-white font-semibold" : isActive ? " text-[#CF8613] underline font-semibold" : "text-white font-semibold"}>Menu</NavLink></li>
      
      <li><NavLink to="/addProducts" className={({ isActive, isPending }) => isPending ? "text-black font-semibold" : isActive ? " text-[#CF8613] underline font-semibold" : "text-white font-semibold"}>Add Product</NavLink></li>
      <li><NavLink to="/myCart" className={({ isActive, isPending }) => isPending ? "text-black font-semibold" : isActive ? " text-[#CF8613] underline font-semibold" : "text-white font-semibold"}>My Cart</NavLink></li>
      
    
    </>
  );
  return (
    <div className="w-[90%] mx-auto my-3">
      <div className="navbar col-span-1 bg-base-100 justify-center ">
        <div className="navbar-start lg:w-[40%]">
          <div className="dropdown  ">
            <label tabIndex={0} className="text-white mr-10 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
            <ul
              tabIndex={0}
              className="menu menu-sm hover:text-[#CF8613] dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {navitems}
              <div className="flex items-center">
                {user != null ? (
                  <button className="px-3 py-2 rounded-lg mx-3  text-white bg-[#CF8613]">
                    {userName}
                  </button>
                ) : (
                  ""
                )}
                {user != null ? (
                  user?.photoURL ? (
                    <img
                      className="w-[20%] rounded-full mr-2"
                      src={user.photoURL}
                      alt="User"
                    />
                  ) : (
                    <BsPersonCircle className="text-2xl mr-2"></BsPersonCircle>
                  )
                ) : (
                  ""
                )}
              </div>
            </ul>
          </div>
          <img
            className="md:w-[60%] lg:w-[100%] ml-5 md:ml-0"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="navbar-end col-span-3 hidden lg:flex lg:w-[70%]">
          <ul className="gap-5 menu-horizontal text-white px-1 ">{navitems}</ul>
        </div>
        <div className="navbar-end">
          {user != null ? (
            user?.photoURL ? (
              <img
                className={"w-[20%] md:w-[10%]  rounded-full mr-2"}
                src={user.photoURL}
                alt="User"
              />
            ) : (
              <BsPersonCircle className="text-4xl mr-2"></BsPersonCircle>
            )
          ) : (
            ""
          )}
          {user != null ? (
            <button className=" hidden lg:flex text-white  mr-7 font-bold ">
              {userName}
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="navbar-center">
          {user != null ? (
            <span
              onClick={handleLogout}
              className="btn text-white border-2 border-[#CF8613] bg-transparent"
            >
              Logout
            </span>
          ) : (
            <div>
              <Link
                to={"/login"}
                className="mr-4 text-white px-4 py-2 rounded-lg  font-bold border-2 border-[#CF8613] bg-transparent "
              >
                Login
              </Link>
              <Link
                to={"/resister"}
                className=" bg-[#CF8613] px-4 py-2 rounded-lg  text-white font-bold border-2 border-[#CF8613] bg-transparent"
              >
                Resistration
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
