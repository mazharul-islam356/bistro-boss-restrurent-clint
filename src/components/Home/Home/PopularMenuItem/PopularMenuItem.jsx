import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import MenuItem from "./MenuItem";

const PopularMenuItem = () => {
    const [items,setItem] = useState([])
    useEffect(()=>{
        fetch('/menu.json')
        .then(res=>res.json())
        .then(data=>
            {
                const popularItem = data.filter(itemm=> itemm.category === 'popular')
                setItem(popularItem)})
    },[])
    return (
        <div>
            <SectionTitle heading='From Our Menu' subHeading='--- check it out ---' ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 my-6">
            {
                items.map(item=> <MenuItem key={item._id} item={item}>

                </MenuItem>)
            }
            </div>
            <div className="bg-black text-3xl p-20 text-center text-white mt-40 my-[100px]">
            <h1>Call Us: +880154881475</h1>
        </div>
        </div>
    );
};

export default PopularMenuItem;