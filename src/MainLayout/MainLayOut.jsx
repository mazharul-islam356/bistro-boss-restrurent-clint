import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Home/Navbar/NavBar";

const MainLayOut = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">   
        <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default MainLayOut;