import { FaBagShopping, FaCalendar, FaHouse } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className="flex w-10/12 mx-auto">
      <div className="w-64 min-h-screen p-2 bg-orange-400">
        <ul className="menu">

          <li className="mb-2">
            <NavLink to="/dashboard/userHome">
                <FaHouse></FaHouse>
           User Home</NavLink>
          </li>

          <li className="mb-2">
            <NavLink to="/dashboard/reservation">
                <FaCalendar></FaCalendar>
           Reservation</NavLink>
          </li>

          <li className="mb-2">
            <NavLink to="/dashboard/payment">
            <MdOutlinePayment />
           Payment History</NavLink>
          </li>

          <li className="mb-2">
            <NavLink to="/dashboard/cart">
            <FaBagShopping></FaBagShopping>
            My cart</NavLink>
          </li>
          <div className="divider"></div>

          <li className="mb-2">
            <NavLink to="/">
            <FaHouse></FaHouse>
            Home</NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/order/salad">
            <BiSolidFoodMenu />
            Menu</NavLink>
          </li>

        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
