import styles from './Drinks.module.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import { SliderBanner } from '~/Layout/Components/Slider';
import { cafeBanner } from '../../utils/imageBanner';
const cx = classNames.bind(styles);

function Drinks() {
    return (
        <>
            <SliderBanner image={cafeBanner} />;
            <div className={cx('container')}>
                <h2>HẠT CÀ PHÊ PHÚC LONG</h2>
                <div className={cx('seperator-icon')}></div>
                <ul className={cx('list-menu')}>
                    <li>
                        <NavLink
                            to="/drinks/dam-vi-hat-ca-phe"
                            style={({ isActive }) => ({
                                borderTop: isActive ? '1px solid #0c713d' : '',
                                borderBottom: isActive ? '1px solid #0c713d' : '',
                                color: isActive ? '#0c713d' : '',
                            })}
                        >
                            Đậm vị hạt cà phê rang xay
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/drinks/huong-vi-manh-me"
                            style={({ isActive }) => ({
                                color: isActive ? '#0c713d' : '',
                                borderTop: isActive ? '1px solid #0c713d' : '',
                                borderBottom: isActive ? '1px solid #0c713d' : '',
                            })}
                        >
                            Hương vị mạnh mẽ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/drinks/huong-vi-tinh-te"
                            style={({ isActive }) => ({
                                color: isActive ? '#0c713d' : '',
                                borderTop: isActive ? '1px solid #0c713d' : '',
                                borderBottom: isActive ? '1px solid #0c713d' : '',
                            })}
                        >
                            Hương vị tinh tế
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/drinks/ca-phe-mui"
                            style={({ isActive }) => ({
                                color: isActive ? '#0c713d' : '',
                                borderTop: isActive ? '1px solid #0c713d' : '',
                                borderBottom: isActive ? '1px solid #0c713d' : '',
                            })}
                        >
                            Cà phê mùi
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Drinks;
