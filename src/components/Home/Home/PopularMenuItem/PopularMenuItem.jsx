import SectionTitle from "../../../SectionTitle/SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../../../../hooks/useMenu";

const PopularMenuItem = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item=>item.category === 'popular')


    return (
        <div>
            <SectionTitle heading='From Our Menu' subHeading='--- check it out ---' ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 my-6">
            {
                popular.map(item=> <MenuItem key={item._id} item={item}>

                </MenuItem>)
            }
            </div>
            
        </div>
    );
};

export default PopularMenuItem;