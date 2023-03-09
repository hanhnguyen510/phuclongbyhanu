import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useRef, useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

import { delivery, logo, logo1, logo2 } from '../../../utils/imageHome';
import deliveryMobile from '~/assets/images/Home/delivery-mobile.png';
import Cart from '../../Cart';

const cx = classNames.bind(styles);
function Header() {
    const menuRef = useRef();
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const dispatch = useDispatch();

    // const data = useSelector((state) => state.userReducer.user);
    const singOutHandler = () => {};

    // cart in mobile
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const qty = useSelector((state) => state.carts.cartTotalQuantity);
    const total = useSelector((state) => state.carts.cartTotalAmount);
    // const count = dataCart.map((item) => item.count);
    // const qty = count.reduce((sum, item) => sum + item, 0);
    // const total = () => {
    //     const price = dataCart.map((item) => item.total);

    //     return price.reduce((sum, item) => sum + item, 0);
    // };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('h-top')}>
                <div className={cx('inner')}>
                    <span onClick={toggleMenu} className={cx('menu-btn')}>
                        <FontAwesomeIcon icon={faBars} />
                    </span>

                    <Link to="/" className={cx('link-icon')}>
                        <img src={delivery} alt="phuclong" />
                    </Link>

                    <Link to="/">
                        <img className={cx('bottom', 'logo')} src={logo} alt="phuclong" />
                        <img className={cx('midle', 'logo')} src={logo2} alt="phuclong" />
                        <img className={cx('top', 'logo')} src={logo1} alt="phuclong" />
                    </Link>
                    <a href="tel: 18006779" className={cx('link-icon-mobile')}>
                        <img src={deliveryMobile} alt="phuclong" />
                    </a>
                    <div className={cx('action')}>
                        <Link to="/" className={cx('account')}></Link>
                        {/* {data ? (
                            <div className={cx('userLogin')}>
                                <img className={cx('avatar')} src={data.photoURL} alt="" />

                                <Link to="/" className={cx('log-out')} onClick={singOutHandler}>
                                    <LogoutIcon className={cx('logout-icon')} />
                                    <div className={cx('logout-text')}> Đăng xuất</div>
                                </Link>
                            </div>
                        ) : (
                            <Link to="/login" className={cx('account')}>
                                <span>Log in</span>
                            </Link>
                        )} */}
                        <div className={cx('lang-wrapper')}>
                            <Link to="/">
                                <span className={cx('lang-item', 'active')}>VN</span>
                            </Link>
                            |
                            <Link to="/">
                                <span className={cx('lang-item')}>EN</span>
                            </Link>
                        </div>
                        {<Cart />}
                    </div>
                </div>
            </div>
            <div className={cx('h-menu')}>
                <div className={cx('container')}>
                    <ul className={`${styles.main} ${showMenu ? styles['menu-open'] : ''}`} ref={menuRef}>
                        <li className={cx('item')}>
                            <NavLink
                                onClick={toggleMenu}
                                to="/"
                                style={({ isActive }) => ({
                                    color: isActive ? '#0c713d' : '',
                                })}
                            >
                                TRANG CHỦ
                            </NavLink>
                        </li>
                        <li className={cx('item')}>
                            <NavLink
                                onClick={toggleMenu}
                                to="/drinks/dam-vi-hat-ca-phe"
                                style={({ isActive }) => ({
                                    color: isActive ? '#0c713d' : '',
                                })}
                            >
                                CÀ PHÊ
                            </NavLink>
                            <div className={cx('menu-sub')}>
                                <ul className={cx('list-multi')}>
                                    <li>
                                        <Link to="/drinks/dam-vi-hat-ca-phe">Hành trình tách cà phê đậm vị</Link>
                                    </li>
                                    <li>
                                        <Link to="/drinks/dam-vi-hat-ca-phe">Hạt cà phê phúc long</Link>
                                    </li>
                                    <li>
                                        <Link to="/drinks/dam-vi-hat-ca-phe">Nghệ thuật pha chế</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={cx('item')}>
                            <NavLink
                                onClick={toggleMenu}
                                to="/tea/dam_vi_tra_Truyen_thong"
                                style={({ isActive }) => ({
                                    color: isActive ? '#0c713d' : '',
                                })}
                            >
                                TRÀ
                            </NavLink>
                            <div className={cx('menu-sub')}>
                                <ul className={cx('list-multi')}>
                                    <li>
                                        <Link to="/tea/dam_vi_tra_Truyen_thong">Hành trình tách trà phê đậm vị</Link>
                                    </li>
                                    <li>
                                        <Link to="/tea/dam_vi_tra_Truyen_thong">Lá trà phúc long</Link>
                                    </li>
                                    <li>
                                        <Link to="/tea/dam_vi_tra_Truyen_thong">
                                            Cold Brew Tea - Trà Ủ Lạnh - Phong Cách Trà Mới
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/tea/dam_vi_tra_Truyen_thong">Nghệ thuật pha chế</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className={cx('item')}>
                            <NavLink
                                onClick={toggleMenu}
                                style={({ isActive }) => ({
                                    color: isActive ? '#0c713d' : '',
                                })}
                                to="/catogy/products"
                            >
                                SẢN PHẨM
                            </NavLink>
                            <div className={cx('menu-sub')}>
                                <ul className={cx('list-multi')}>
                                    <li>
                                        <Link to="/catogy/products">Thức uống</Link>
                                    </li>
                                    <li>
                                        <Link to="/catogy/bakery">Bánh tráng miệng</Link>
                                    </li>
                                    <li>
                                        <Link to="/catogy/snacks">Đồ ăn mặn</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={cx('item')}>
                            <NavLink
                                onClick={toggleMenu}
                                to="/promotions"
                                style={({ isActive }) => ({
                                    color: isActive ? '#0c713d' : '',
                                })}
                            >
                                KHUYẾN MÃI
                            </NavLink>
                        </li>
                        <li className={cx('item')}>
                            <NavLink
                                onClick={toggleMenu}
                                to="/aboutus"
                                style={({ isActive }) => ({
                                    color: isActive ? '#0c713d' : '',
                                })}
                            >
                                VỀ CHÚNG TÔI
                            </NavLink>
                            <ul className={cx('list-single')}>
                                <li className={cx('list-item')}>
                                    <Link to="/aboutus">
                                        <h5 className={cx('title')}>CÔNG TY</h5>
                                    </Link>
                                    <ul className={cx('menu-item')}>
                                        <li>Tầm nhìn</li>
                                        <li>Sứ mệnh</li>
                                        <li>Gía trị cốt lõi</li>
                                        <li>Lĩnh vực hoạt động</li>
                                    </ul>
                                </li>
                                <li className={cx('list-item')}>
                                    <Link to="/aboutus">
                                        <h5 className={cx('title')}>TUYỂN DỤNG</h5>
                                    </Link>
                                    <ul className={cx('menu-item')}>
                                        <li>HTCH</li>
                                        <li>Kiosk</li>
                                        <li>Văn phòng</li>
                                        <li>Nhà máy</li>
                                    </ul>
                                </li>
                                <li className={cx('list-item')}>
                                    <Link to="/aboutus">
                                        <h5 className={cx('title')}>THƯ VIỆN</h5>
                                    </Link>
                                    <ul className={cx('menu-item')}>
                                        <li>Hình ảnh</li>
                                        <li>Video</li>
                                        <li>Hồ sơ công bố</li>
                                        <li>Công văn</li>
                                    </ul>
                                </li>
                                <li className={cx('list-item')}>
                                    <Link to="/aboutus">
                                        <h5 className={cx('title')}>LIÊN HỆ</h5>
                                    </Link>
                                    <ul className={cx('menu-item')}>
                                        <li>Hệ thống cừa hàng PHÚC LONG COFFEE & TEA </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <button className={cx('icon-search')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <div onClick={toggleMenu} className={showMenu ? styles['menu-overlay'] : ''}></div>
                </div>
            </div>
            <Link to="/cart" className={cx('cart-on-mobile')}>
                <ShoppingCartOutlinedIcon sx={{ fontSize: '20px', color: '#fff' }} />
                <div className={cx('cart-number')}>{qty}</div>
                <span className={cx('payload-mb')}>THANH TOÁN</span>
                <span className={cx('total-mb')}>{VND.format(total)} </span>
            </Link>
        </header>
    );
}

export default Header;
