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
           <ChefCard></ChefCard>
           <Fetured></Fetured>
           <Testmonial></Testmonial>

        </div>
    );
};

export default Home;