import Fetured from "../FeturedItem/Fetured";
import Banner from "./Banner/Banner";
import Catagory02 from "./Banner/Cetagory/Catagory02";
import Cetagory from "./Banner/Cetagory/Cetagory";
import ChefCard from "./ChefCard/ChefCard";
import PopularMenuItem from "./PopularMenuItem/PopularMenuItem";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Cetagory></Cetagory>
           <Catagory02></Catagory02>
           <PopularMenuItem></PopularMenuItem>
           <ChefCard></ChefCard>
           <Fetured></Fetured>
           
        </div>
    );
};

export default Home;