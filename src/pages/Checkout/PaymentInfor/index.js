import classNames from 'classnames/bind';
import styles from './PaymentInfor.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDataCustomer } from '../../../redux/features/customerInforSlice';

const cx = classNames.bind(styles);

function PaymentInfor() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = { name: '', email: '', phone: '', address: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setIsSubmit(false);
    };
    const handleBlur = () => {
        setIsSubmit(false);

        setFormErrors(validate(formValues));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            dispatch(addDataCustomer(formValues));
            navigate('/cart/payment');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex =
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        if (!values.name) {
            errors.name = 'Họ tên không được để trống!';
        }
        if (!values.email) {
        } else if (!regex.test(values.email)) {
            errors.email = 'Emai không hợp lệ!';
        }
        if (!values.phone) {
            errors.phone = 'Số điện thoại không được để trống!';
        } else if (values.phone.length < 10) {
            errors.phone = 'Số điện thoại không hợp lệ!';
        }
        if (!values.address) {
            errors.address = 'Địa chỉ không được để trống!';
        }
        return errors;
    };
    return (
        <div className={cx('container')}>
            <div className={cx('block-process')}>
                <div className={`${styles['process-item']} ${styles.active}`}>
                    <div className={cx('icon')}>
                        <ShoppingCartIcon sx={{ fontSize: '20px', color: '#0c713d' }} />
                    </div>
                    <p>Chọn sản phẩm</p>
                </div>
                <div className={cx('process-item', 'active')}>
                    <div className={cx('icon')}>
                        <ContactMailIcon sx={{ fontSize: '20px', color: '#0c713d' }} />
                    </div>
                    <p>Thông tin đặt hàng</p>
                </div>
                <div className={cx('process-item')}>
                    <div className={cx('icon')}>
                        {' '}
                        <CreditCardIcon sx={{ fontSize: '20px', color: '#777' }} />
                    </div>
                    <p>Thanh toán</p>
                </div>
                <div className={cx('process-item')}>
                    <div className={cx('icon')}>
                        {' '}
                        <CheckBoxIcon sx={{ fontSize: '20px', color: '#777' }} />
                    </div>
                    <p>Hoàn tất đơn hàng</p>
                </div>
            </div>
            <div className={cx('block-box')}>
                {/* <pre> {JSON.stringify(formValues, undefined, 2)}</pre>
                <pre> {JSON.stringify(formErrors, undefined, 2)}</pre> */}
                <div className={cx('block-customer')}>
                    <p> Thông tin khách hàng</p>
                    <input
                        name="name"
                        values={initialValues.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Họ và tên (bắt buộc )"
                    />
                    <p className={cx('error')}>{formErrors.name}</p>

                    <input
                        onBlur={handleBlur}
                        name="phone"
                        values={initialValues.phone}
                        onChange={handleChange}
                        type="text"
                        placeholder="Số điện thoại (bắt buộc )"
                    />
                    <p className={cx('error')}>{formErrors.phone}</p>

                    <input
                        onBlur={handleBlur}
                        name="email"
                        values={initialValues.email}
                        onChange={handleChange}
                        type="email"
                        required="required"
                        placeholder="Email "
                    />
                    <p className={cx('error')}>{formErrors.email}</p>

                    <p>Nhập địa chỉ của bạn</p>
                    <input
                        onBlur={handleBlur}
                        name="address"
                        values={initialValues.address}
                        onChange={handleChange}
                        type="text"
                        placeholder="Nhập địa chỉ của bạn"
                    />
                    <p className={cx('error')}>{formErrors.address}</p>

                    <input type="text" placeholder="Yêu cầu khác" />
                </div>
            </div>
            <div className={cx('btn-submit')}>
                <Link to="/PaymentInfor/payment">
                    <Button
                        variant="text"
                        size="medium"
                        onClick={handleSubmit}
                        sx={{
                            fontSize: '1.6rem',
                            backgroundColor: '#0c713d',
                            color: '#fff',
                            textTransform: 'default',
                            borderColor: '#0c713d',
                            width: '100%',
                            padding: '8px',
                            '&:hover': {
                                backgroundColor: '#0c713d',
                                color: '#fff',
                                borderColor: '#0c713d',
                            },
                        }}
                    >
                        TIẾP TỤC
                    </Button>
                </Link>

                <Link to="/catogy/products">
                    <Button
                        variant="outlined"
                        size="medium"
                        sx={{
                            fontSize: '1.6rem',
                            backgroundColor: '#fff',
                            color: '#0c713d',
                            borderColor: '#0c713d',
                            padding: '8px',
                            width: '100%',
                            '&:hover': {
                                backgroundColor: '#0c713d',
                                color: '#fff',
                                borderColor: '#0c713d',
                            },
                        }}
                    >
                        CHỌN THÊM SẢN PHẨM KHÁC
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default PaymentInfor;
