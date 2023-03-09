import classNames from 'classnames/bind';
import styles from './SuccessPayment.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../redux/features/cartsSlice';
const cx = classNames.bind(styles);

function SuccessPayment() {
    const dispatch = useDispatch();

    let dataCart = useSelector((state) => state.carts.cartItems);
    let dataCustomer = useSelector((state) => state.dataCustomer.customerInfor);
    const handleDataCart = () => {
        dispatch(clearCart());
    };
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
                <div className={cx('process-item', 'active')}>
                    <div className={cx('icon')}>
                        {' '}
                        <CheckBoxIcon sx={{ fontSize: '20px', color: '#0c713d' }} />
                    </div>
                    <p>Hoàn tất đơn hàng</p>
                </div>
            </div>
            <div className={cx('block-box')}>
                <span className={cx('text-thank')}>
                    Cảm ơn Quý khách hàng đã chọn mua hàng tại Phúc Long .
                    <span className={cx('text-note')}>
                        {' '}
                        * Các đơn hàng từ 21h30 tối tới 8h sáng hôm sau. Phúc Long sẽ liên hệ với Quý khách trước 10h
                        trưa cùng ngày
                    </span>
                </span>
                <div className={cx('block-box-infor')}>
                    <h4>ĐẶT HÀNG THÀNH CÔNG</h4>
                    <div className={cx('infor')}>
                        <span> Mã đơn hàng: </span> 300933387
                    </div>
                    <div className={cx('infor')}>
                        <span> Người đặt: </span> {dataCustomer.name}
                    </div>
                    <div className={cx('infor')}>
                        <span> Số điện thoại: </span> {dataCustomer.phone}
                    </div>
                    <div className={cx('infor')}>
                        <span> Giao đến: </span> {dataCustomer.address}
                    </div>
                    <div className={cx('infor')}>
                        <span> Tổng tiền: </span> {VND.format(total - discount)}
                    </div>
                </div>

                <div className={cx('product-list')}>
                    {dataCart.map((item) => (
                        <div className={cx('product-item')}>
                            <img src={item.img} alt="pl" />
                            <div className={cx('item-infor')}>
                                <div className={cx('item-name')}>
                                    {item.name} <span>{item.desc}</span>
                                </div>
                                <div className={cx('item-price')}>
                                    <span>Giá: </span> {VND.format(item.price)}
                                </div>
                                <div className={cx('item-qty')}>
                                    {' '}
                                    <span>Số lượng: </span> {item.cartQuantity}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={cx('btn-submit')}>
                <Link to="/catogy/products">
                    <Button
                        onClick={handleDataCart}
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
                        TIẾP TỤC MUA HÀNG
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default SuccessPayment;
