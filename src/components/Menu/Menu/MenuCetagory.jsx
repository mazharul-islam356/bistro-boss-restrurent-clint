import MenuItem from "../../Home/Home/PopularMenuItem/MenuItem";

const MenuCetagory = ({items}) => {   

   
   
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-10 my-6">
            {
                items.map(item=> <MenuItem key={item._id} item={item}>

                </MenuItem>)
            }
            
          
            
            </div>
            <button className="btn text-center ml-[500px] btn-outline btn-wide border-0 border-b-2">ORDER YOUR FAVOURITE FOOD</button>
        </div>
    );
};

export default MenuCetagory;