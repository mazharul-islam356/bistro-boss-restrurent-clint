import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Home/Navbar/NavBar";
import { Toaster } from "react-hot-toast";

const MainLayOut = () => {
    const location = useLocation()
//   console.log(location);

  const noFooterNavbar = location.pathname.includes('/login') || location.pathname.includes('/signUp')
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">   
            {noFooterNavbar || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noFooterNavbar || <Footer></Footer>}
            <Toaster></Toaster>
        </div>
        </div>
        
    );
};

export default MainLayOut;