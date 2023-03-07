import { useRef } from 'react';
import styles from './SliderHome.module.scss';
import classNames from 'classnames/bind';

// Core modules imports are same as usual
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation'; // Navigation module
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import 'swiper/scss/effect-fade';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

//img
import { homeCategoryData } from '../../../../utils/imageHome';
const cx = classNames.bind(styles);

function SliderHome() {
    const swiperPrevIcon = useRef(null);
    const swiperNextIcon = useRef(null);
    return (
        <div className={cx('container')}>
            <Swiper
                modules={[Navigation, EffectFade, Pagination, Autoplay]}
                effect
                pagination={{ clickable: true }}
                speed={1000}
                slidesPerView={1}
                loop
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = swiperPrevIcon.current;
                    swiper.params.navigation.nextEl = swiperNextIcon.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                className={cx('mySwiper')}
            >
                {homeCategoryData.map(({ img, name }, index) => (
                    <SwiperSlide className={cx('swpierslide')}>
                        <img src={img} alt={name} />
                    </SwiperSlide>
                ))}

                <div className={cx('swiperPrevIcon')} ref={swiperPrevIcon}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className={cx('swiperNextIcon')} ref={swiperNextIcon}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </Swiper>
        </div>
    );
}
export default SliderHome;
