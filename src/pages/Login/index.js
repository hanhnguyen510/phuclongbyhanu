import trpl from '~/assets/images/Tea/trà phúc long 1.jpg';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { Link, Navigate } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import googleLogo from '~/assets/images/Login/google.svg';

import logoLogin from '~/assets/images/Home/logo_2.png';
// import { signInWithGoogle } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function Login() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.userReducer.user);
    console.log(data);
    // const { user } = data;
    // console.log('user', user);
    const handleGGLogin = () => {
        // dispatch(signInWithGoogle());
    };
    return (
        <>
            <div className={cx('container')}>
                {data !== null && <Navigate to="/" />}
                <img className={cx('img-login')} src={trpl} alt="pl" />
                <div className={cx('login')}>
                    <div className={cx('header')}>
                        <Link to="/">
                            <img className={cx('logo-login')} src={logoLogin} alt="pl" />
                        </Link>
                        <h4>Đăng nhập vào Phúc Long Coffee && Tea</h4>
                    </div>
                    <div className={cx('body')}>
                        <div className={cx('mainStep')}>
                            <div className={cx('siginBtn-wrapper')}>
                                <PersonOutlineOutlinedIcon className={cx('icon-socialMedia')} />
                                <span className={cx('siginBtn-title')}>Sử dụng email / số điện thoại</span>
                            </div>
                            <div onClick={handleGGLogin} className={cx('siginBtn-wrapper')}>
                                <img src={googleLogo} alt="pl" className={cx('icon-socialMedia')} />
                                <span className={cx('siginBtn-title')}>Tiếp tục với Google</span>
                            </div>
                            {/* <div className={cx('siginBtn-wrapper')}>
                                <img src={fbLogo} alt="" className={cx('icon-socialMedia')} />
                                <span className={cx('siginBtn-title')}>Tiếp tục với Facebook</span>
                            </div> */}
                        </div>
                        <p className={cx('dontHaveAcc')}>
                            Bạn chưa có tài khoản?
                            <Link to="/register">Đăng ký</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
