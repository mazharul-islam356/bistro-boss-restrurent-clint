import Cover from "../../Cover/Cover";
import orderImg from "../../../assets/assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "./FoodCard";
import { useParams } from "react-router-dom";

const Order = () => {
  const catagories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const {category} = useParams()
  console.log(category);
  const initialIndex = catagories.indexOf(category)
  console.log(initialIndex);

    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu()

    const salad = menu.filter(item=>item.category === 'salad')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const soup = menu.filter(item=>item.category === 'soup')
    const dessert = menu.filter(item=>item.category === 'dessert')
    const drinks = menu.filter(item=>item.category === 'drinks')



  return (
    <div>
      <Cover
        img={orderImg}
        heading={"Our Shop"}
        subHeading={"Would you like to try a dish?"}
      ></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
           <div className="grid md:grid-cols-3 gap-6 my-8">
           {
                salad.map(item=><FoodCard key={item._id} item={item}>

                </FoodCard>)
            }
           </div>
        </TabPanel>

        <TabPanel>
        <div className="grid md:grid-cols-3 gap-6 my-8">
           {
                pizza.map(item=><FoodCard key={item._id} item={item}>

                </FoodCard>)
            }
           </div>
        </TabPanel>

        <TabPanel>
        <div className="grid md:grid-cols-3 gap-6 my-8">
           {
                soup.map(item=><FoodCard key={item._id} item={item}>

                </FoodCard>)
            }
           </div>
        </TabPanel>

        <TabPanel>
        <div className="grid md:grid-cols-3 gap-6 my-8">
           {
                dessert.map(item=><FoodCard key={item._id} item={item}>

                </FoodCard>)
            }
           </div>
        </TabPanel>
        
        <TabPanel>
        <div className="grid md:grid-cols-3 gap-6 my-8">
           {
                drinks.map(item=><FoodCard key={item._id} item={item}>

                </FoodCard>)
            }
           </div>
        </TabPanel>
      </Tabs>

    </div>
  );
};

export default Order;
