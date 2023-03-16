import styles from './Auth.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userAuthContext } from '../../context/UserAuthContext';

import googleLogo from '~/assets/images/Login/google.svg';
import fbLogo from '~/assets/images/Login/facebook.svg';
import logoLogin from '~/assets/images/Home/logo_2.png';
import config from '../../config';

const cx = classNames.bind(styles);

function Signin() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { signIn } = useContext(userAuthContext);
    const { sigInWithGoogle } = useContext(userAuthContext);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Please enter a valid email address').required('Required'),
            password: Yup.string().required('Required').min(8, 'Password is too short - should be 8 chars minimum.'),
            // eslint-disable-next-line no-useless-escape
        }),
        onSubmit: async (values) => {
            try {
                await signIn(values.email, values.password);

                navigate(config.routes.home);
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            }
        },
    });

    const handleGGLogin = async () => {
        try {
            await sigInWithGoogle();
            navigate(config.routes.home);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        }
    };

    return (
        <>
            <div className={cx('container')}>
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
                                ĐĂNG NHẬP
                            </Button>
                        </form>
                        <p className={cx('dontHaveAcc')}>
                            Bạn chưa có tài khoản?
                            <Link to="/signup">Đăng ký</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signin;
