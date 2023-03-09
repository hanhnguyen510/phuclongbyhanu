import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// image
import cod from '~/assets/images/Payment/COD.7245762.png';
import moca from '~/assets/images/Payment/moca.f4be0b9.png';
import onepay from '~/assets/images/Payment/onepay.cac8b9a.png';
import zalopay from '~/assets/images/Payment/zalopay.08ce522.png';

const cx = classNames.bind(styles);

function Payment() {
    const data = useSelector((state) => state.dataCustomer.customerInfor);
    const total = useSelector((state) => state.carts.cartTotalAmount);
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    let discount = 0;
    if (total > 40000) {
        discount = 10000;
    }
    if (total > 200000) {
        discount = 20000;
    }
    if (total > 300000) {
        discount = 30000;
    }
    if (total > 400000) {
        discount = 40000;
    }
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
                <div className={cx('process-item', 'active')}>
                    <div className={cx('icon')}>
                        {' '}
                        <CreditCardIcon sx={{ fontSize: '20px', color: '#0c713d' }} />
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
                <span className={cx('thank')}>
                    Cảm ơn Quý khách hàng đã chọn mua hàng tại Phúc Long .
                    <span className={cx('note')}>
                        * Các đơn hàng từ 21h30 tối tới 8h sáng hôm sau. Phúc Long sẽ liên hệ với Quý khách trước 10h
                        trưa cùng ngày
                    </span>
                </span>
                <div className={cx('block-box-infor')}>
                    <h4>THÔNG TIN ĐẶT HÀNG</h4>
                    <div className={cx('infor')}>
                        <span> Mã đơn hàng: </span> 300933387
                    </div>
                    <div className={cx('infor')}>
                        <span> Người đặt: </span> {data.name}
                    </div>
                    <div className={cx('infor')}>
                        <span> Số điện thoại: </span> {data.phone}
                    </div>
                    {data.email.length !== 0 ? (
                        <div className={cx('infor')}>
                            <span>Emai: </span> {data.email}
                        </div>
                    ) : (
                        ''
                    )}
                    <div className={cx('infor')}>
                        <span> Giao đến: </span> {data.address}
                    </div>
                    <div className={cx('infor')}>
                        <span> Tổng tiền: </span> {VND.format(total - discount)}
                    </div>
                </div>

                <div className={cx('block-payment')}>
                    <h4>CHỌN HÌNH THỨC THANH TOÁN</h4>
                    <div className={cx('payment-group')}>
                        <label for="cod" className={cx('payment-item')}>
                            <span>Thanh toán khi nhận hàng</span>
                            <img src={cod} alt="cod" />
                        </label>
                        <label for="onepay" className={cx('payment-item')}>
                            <span>Thanh toán thẻ Visa/Master/JCB/Napas qua</span>
                            <img src={onepay} alt="cod" />
                        </label>
                        <label for="moca" className={cx('payment-item')}>
                            <span>Thanh toán qua</span>
                            <img src={moca} alt="cod" />
                        </label>
                        <label for="zalopay" className={cx('payment-item')}>
                            <span>Thanh toán qua</span>
                            <img src={zalopay} alt="cod" />
                        </label>
                    </div>
                </div>
            </div>

            <div className={cx('btn-submit')}>
                <Link to="/cart/success">
                    <Button
                        variant="text"
                        size="medium"
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
            </div>
        </div>
    );
}

export default Payment;
