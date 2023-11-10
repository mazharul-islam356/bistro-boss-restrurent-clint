import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider01 from '../../../../../assets/assets/home/slide1.jpg'
import slider02 from '../../../../../assets/assets/home/slide2.jpg'
import slider03 from '../../../../../assets/assets/home/slide3.jpg'
import slider04 from '../../../../../assets/assets/home/slide4.jpg'
import slider05 from '../../../../../assets/assets/home/slide5.jpg'
import SectionTitle from '../../../../SectionTitle/SectionTitle';

const Cetagory = () => {
    return (
        <section>
         <SectionTitle heading={'--- From 11:00am to 10:00pm ---'} subHeading={'order now'} ></SectionTitle>
             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide className='mb-6'><img src={slider01} alt="" />
        <h1 className='text-3xl text-center -mt-16 text-white'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide><img src={slider02} alt="" />
        <h1 className='text-3xl text-center -mt-16 text-white'>Pizza</h1>
        </SwiperSlide>
        <SwiperSlide><img src={slider03} alt="" />
        <h1 className='text-3xl text-center -mt-16 text-white'>Soups</h1>
        </SwiperSlide>
        <SwiperSlide><img src={slider04} alt="" />
        <h1 className='text-3xl text-center -mt-16 text-white'>Desserts</h1>
        </SwiperSlide>
        <SwiperSlide><img src={slider05} alt="" />
        <h1 className='text-3xl text-center -mt-16 text-white'>Salad</h1>
        </SwiperSlide>
        
        
      </Swiper>
        </section>
    );
};

export default Cetagory;