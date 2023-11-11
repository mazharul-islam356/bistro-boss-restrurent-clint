import { Helmet } from "react-helmet-async";

import menuBg from '../../../assets/assets/menu/banner3.jpg'
import dessertImg from '../../../assets/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/assets/menu/soup-bg.jpg'
import CoverImg from "../../Cover/Cover";
import useMenuImg from "../../../hooks/useMenu";

import SectionTitle from "../../SectionTitle/SectionTitle";
import MenuCetagory from "./MenuCetagory";
import MenuCover from "./MenuCover";
import Cover from "../../Cover/Cover";
import useMenu from "../../../hooks/useMenu";

const Menu = () => {
    const [menu] = useMenu()


    const dessert = menu.filter(item=>item.category === 'dessert')
    const salad = menu.filter(item=>item.category === 'salad')
    const soup = menu.filter(item=>item.category === 'soup')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const offered = menu.filter(item=>item.category === 'offered')
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>

      <Cover img={menuBg} heading={'Our menu'} subHeading={'Would you like to try a dish?'}></Cover>

  

      <SectionTitle heading="Don't Miss" subHeading={'todays offer'}> </SectionTitle>
      
    <MenuCetagory items={offered}></MenuCetagory>

    <MenuCover img={dessertImg} heading={'Dessert'} subHeading={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, doloribus?'}>
    </MenuCover>  
      
      
    <MenuCetagory items={dessert}></MenuCetagory>

    <MenuCover img={pizzaImg} heading={'Pizza'} subHeading={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, doloribus?'}>

    </MenuCover>

    
      
    <MenuCetagory items={pizza}></MenuCetagory>

    <MenuCover img={saladImg} heading={'Salad'} subHeading={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, doloribus?'}>

    </MenuCover>

    
      
    <MenuCetagory items={salad}></MenuCetagory>

    <MenuCover img={soupImg} heading={'Soup'} subHeading={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, doloribus?'}>

    </MenuCover>
    <MenuCetagory items={soup}></MenuCetagory>


      
    </div>
  );
};

export default Menu;
