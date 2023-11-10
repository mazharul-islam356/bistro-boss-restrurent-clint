import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img01 from '../../../../../src/assets/assets/home/01.jpg'
import img02 from '../../../../../src/assets/assets/home/02.jpg'
import img03 from '../../../../../src/assets/assets/home/03.png'
import img04 from '../../../../../src/assets/assets/home/04.jpg'
import img05 from '../../../../../src/assets/assets/home/05.png'
import img06 from '../../../../../src/assets/assets/home/06.png'

const Banner = () => {
    return (
        <div className="w-full">
            <Carousel>
                <div>
                    <img src={img01} />
                   
                </div>
                <div>
                    <img src={img02}/>
                  
                </div>
                <div>
                    <img src={img03} />
                   
                </div>
                <div>
                    <img src={img04} />
                   
                </div>
                <div>
                    <img src={img05}/>
                  
                </div>
                <div>
                    <img src={img06} />
                   
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;