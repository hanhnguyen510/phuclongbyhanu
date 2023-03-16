import styles from './Auth.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import googleLogo from '~/assets/images/Login/google.svg';
import fbLogo from '~/assets/images/Login/facebook.svg';
import logoLogin from '~/assets/images/Home/logo_2.png';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { userAuthContext } from '../../context/UserAuthContext';
import config from '../../config';
const cx = classNames.bind(styles);

function Signup() {
    const navigate = useNavigate();

    const { signUp } = useContext(userAuthContext);
    const { sigInWithGoogle } = useContext(userAuthContext);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmedPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required').min(4, 'Must be 4 characters or more'),
            email: Yup.string().email('Please enter a valid email address').required('Required'),
            password: Yup.string().required('Required').min(8, 'Password is too short - should be 8 chars minimum.'),
            confirmedPassword: Yup.string()
                .required('Required')
                .oneOf([Yup.ref('password'), null], 'Password must match'),
            // eslint-disable-next-line no-useless-escape
        }),
        onSubmit: async (values) => {
            try {
                await signUp(values.email, values.password);

                await toast.success('SIGNUP SUCCESS', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                setTimeout(() => {
                    navigate(config.routes.home);
                }, 1000);
            } catch (error) {
                const errorMessage = error.message;

                toast.error(errorMessage, {
                    position: toast.POSITION.TOP_RIGHT,
                });
                console.log(errorMessage);
            }
        },
    });
    const handleGGLogin = async () => {
        try {
            await sigInWithGoogle();
            navigate(config.routes.home);
        } catch (error) {
            const errorMessage = error.message;
            toast.error(errorMessage, {
                position: toast.POSITION.TOP_RIGHT,
            });
            console.log(errorMessage);
        }
    };
    return (
        <>
            <div className={cx('container')}>
                <ToastContainer
                    autoClose={2000}
                    position="top-center"
                    className="toast-container"
                    toastClassName="dark-toast"
                />
                {/* <img className={cx('img-login')} src={trpl} alt="pl" /> */}
                <div className={cx('login')}>
                    <div className={cx('header')}>
                        <Link to="/">
                            <img className={cx('logo-login')} src={logoLogin} alt="pl" />
                        </Link>
                        <h4>Đăng nhập vào Phúc Long Coffee && Tea</h4>
                    </div>
                    <div className={cx('body')}>
                        <div className={cx('mainStep')}>
                            <div onClick={handleGGLogin} className={cx('siginBtn-wrapper')}>
                                <img src={googleLogo} alt="pl" className={cx('icon-socialMedia')} />
                                <span className={cx('siginBtn-title')}>Tiếp tục với Google</span>
                            </div>
                        </div>
                        <form className={cx('infor-form')} onSubmit={formik.handleSubmit}>
                            <label className={cx('label-auth')}>Your name</label>
                            <input
                                name="name"
                                type="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                className={cx('input-auth')}
                                placeholder="Enter your name"
                            />
                            {formik.errors.name ? <div className={cx('error')}>{formik.errors.name}</div> : null}

                            <label className={cx('label-auth')}>Email address</label>
                            <input
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className={cx('input-auth')}
                                placeholder="Enter your email"
                            />
                            {formik.errors.email ? <div className={cx('error')}>{formik.errors.email}</div> : null}
                            <label className={cx('label-auth')}>Password</label>
                            <input
                                className={cx('input-auth')}
                                placeholder="Enter your password"
                                type="password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />

                            {formik.errors.password ? (
                                <div className={cx('error')}>{formik.errors.password}</div>
                            ) : null}
                            <label className={cx('label-auth')}> Confirm Password</label>
                            <input
                                className={cx('input-auth')}
                                placeholder="Enter your password"
                                type="password"
                                name="confirmedPassword"
                                onChange={formik.handleChange}
                                value={formik.values.confirmedPassword}
                            />
                            {formik.errors.confirmedPassword ? (
                                <div className={cx('error')}>{formik.errors.confirmedPassword}</div>
                            ) : null}
                            <Button
                                type="submit"
                                variant="contained"
                                size="medium"
                                sx={{
                                    width: '100%',
                                    fontSize: '1.3rem',
                                    backgroundColor: '#0c713d',
                                    color: 'fff',
                                    borderColor: '#0c713d',
                                    marginTop: '12px',
                                    marginBottom: '32px',
                                    '&:hover': {
                                        opacity: '0.9',
                                    },
                                }}
                            >
                                ĐĂNG KÝ
                            </Button>
                        </form>
                        <p className={cx('dontHaveAcc')}>
                            Bạn đã có tài khoản?
                            <Link to="/signin">Đăng nhập</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
