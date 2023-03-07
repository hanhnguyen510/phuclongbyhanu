import styles from './Slider.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const SliderBanner = ({ image }) => {
    return (
        <div className={cx('wrapper')}>
            <div>
                <img className={cx('img-slider')} src={image} alt="pl" width="100%" height="356" />
            </div>
        </div>
    );
};
export { SliderBanner };
export { default as SliderHome } from './SliderHome';
