import { Link } from "react-router-dom";
import MenuItem from "../../Home/Home/PopularMenuItem/MenuItem";
import Cover from "../../Cover/Cover";

const MenuCetagory = ({items,title,img,heading,subHeading}) => { 
    console.log(title,img);  

   
   
    return (
        <div>
            {title && <Cover img={img} subHeading={subHeading} heading={heading} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-6">
            {
                items.map(item=> <MenuItem key={item._id} item={item}>

                </MenuItem>)
            }
             
            </div>
        <Link to={`/order/${title}`}><button className="btn text-center ml-[500px] btn-outline btn-wide border-0 mb-4 border-b-2">ORDER YOUR FAVOURITE FOOD</button></Link>
        </div>
    );
};

export default MenuCetagory;