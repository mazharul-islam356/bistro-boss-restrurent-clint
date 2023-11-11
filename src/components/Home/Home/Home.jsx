import { Helmet } from "react-helmet-async";
import Fetured from "../FeturedItem/Fetured";
import Testmonial from "../Tesmonial/Testmonial";
import Banner from "./Banner/Banner";
import Catagory02 from "./Banner/Cetagory/Catagory02";
import Cetagory from "./Banner/Cetagory/Cetagory";
import ChefCard from "./ChefCard/ChefCard";
import PopularMenuItem from "./PopularMenuItem/PopularMenuItem";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            
           <Banner></Banner>
           <Cetagory></Cetagory>
           <Catagory02></Catagory02>
           <PopularMenuItem></PopularMenuItem>
           <div className="bg-black text-3xl p-20 text-center text-white mt-40 my-[100px]">
            <h1>Call Us: +880154881475</h1>
        </div>
           <ChefCard></ChefCard>
           <Fetured></Fetured>
           <Testmonial></Testmonial>

        </div>
    );
};

export default Home;