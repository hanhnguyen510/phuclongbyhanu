import { SliderBanner } from '~/Layout/Components/Slider';
import { teaBanner } from '../../utils/imageBanner';
import styles from './Tea.module.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Tea() {
    return (
        <>
            <SliderBanner image={teaBanner} />;
            <div className={cx('container')}>
                <h2>LÁ TRÀ PHÚC LONG</h2>
                <div className={cx('seperator-icon')}></div>
                <ul className={cx('list-menu')}>
                    <li>
                        <NavLink
                            to="/tea/dam_vi_tra_Truyen_thong"
                            style={({ isActive }) => ({
                                borderTop: isActive ? '1px solid #0c713d' : '',
                                borderBottom: isActive ? '1px solid #0c713d' : '',
                                color: isActive ? '#0c713d' : '',
                            })}
                        >
                            Đậm vị trà truyền thống
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tea/lua_chon_la_tra"
                            style={({ isActive }) => ({
                                color: isActive ? '#0c713d' : '',
                                borderTop: isActive ? '1px solid #0c713d' : '',
                                borderBottom: isActive ? '1px solid #0c713d' : '',
                            })}
                        >
                            Lựa chọn là trà
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Tea;
