import SectionTitle from "../../SectionTitle/SectionTitle";
import feturedImg from '../../../assets/assets/home/featured.jpg'
import './Fetured.css'

const Fetured = () => {
    return (
        <div className="feturedBg my-10   text-white">
            <SectionTitle heading='--- Check it out ---' subHeading='From our menu' ></SectionTitle>

     
    
     <div className="md:flex  justify-center items-center py-16 pt-20 gap-12 ml-32">
            <img className="w-96" src={feturedImg} alt="" />
            <div>
            <p>Octobor 21, 2023</p>
            <h1 className="uppercase text-xl">Where can I get some</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit voluptatum voluptates alias assumenda illum corrupti atque, hic quibusdam? Accusantium?</p>
            <button className="btn border-0 border-b-2 btn-outline mt-2">Read more</button>
            </div>
     </div>
      
     

        </div>
    );
};

export default Fetured;