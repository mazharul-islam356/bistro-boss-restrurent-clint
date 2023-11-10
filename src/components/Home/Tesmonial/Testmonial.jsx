import SectionTitle from "../../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testmonial = () => {
    const [reviews,setReview] = useState([])

    useEffect(()=>{
        fetch('/public/review.json')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div className="my-16 mb-10">
            <SectionTitle subHeading={'testmonial'} heading={'--- What Our Clint Say ---'}>

            </SectionTitle>

            <div>
            <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper my-8 mb-32"
      >
       
        {
            reviews.map(review=>
                <SwiperSlide key={review._id}>
                    

                   <div className="flex flex-col items-center">
                   <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
    <img className="w-16 mx-auto my-10" src="https://i.ibb.co/fpPSML9/left-quote.png" alt="" />
                   <p className="px-24">{review.details}</p>
                    <p className="text-xl text-yellow-600">{review.name}</p>
                   </div>

                </SwiperSlide>
             )
        }
       
      </Swiper>
            </div>
            
        </div>
    );
};

export default Testmonial;