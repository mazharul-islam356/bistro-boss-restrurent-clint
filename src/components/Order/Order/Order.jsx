import Cover from "../../Cover/Cover";
import orderImg from "../../../assets/assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "./FoodCard";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const [menu] = useMenu()

    const dessert = menu.filter(item=>item.category === 'dessert')
    const salad = menu.filter(item=>item.category === 'salad')
    const soup = menu.filter(item=>item.category === 'soup')
    const pizza = menu.filter(item=>item.category === 'pizza')
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
