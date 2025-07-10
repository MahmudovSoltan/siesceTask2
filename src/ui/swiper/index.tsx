import { Swiper, SwiperSlide } from 'swiper/react';
import './css/swiper.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image1 from '../../assets/images/Rectangle 20.svg'
import image2 from '../../assets/images/Rectangle.svg'
import image3 from '../../assets/images/Group 4.svg'

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
const Swipeer = () => {
    return (
        <div className='swiper_container'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                // navigation
                // navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swiper_card">
                        <img src={image1} alt="image1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper_card">
                        <img src={image2} alt="image2" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper_card">
                        <img src={image3} alt="image3" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Swipeer