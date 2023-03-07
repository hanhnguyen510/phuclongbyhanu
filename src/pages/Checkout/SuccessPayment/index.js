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
import { paymentSuccess } from '../../../redux/actions';
const cx = classNames.bind(styles);

function SuccessPayment() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.customerInforReducer.dataCustomer);
    let dataCart = useSelector((state) => state.cartReducer.carts);
    const handleDataCart = () => {
        dispatch(paymentSuccess());
    };
    const total = () => {
        const price = dataCart.map((item) => item.total);

        return price.reduce((sum, item) => sum + item, 0);
    };
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
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
                        <span> Người đặt: </span> {data.name}
                    </div>
                    <div className={cx('infor')}>
                        <span> Số điện thoại: </span> {data.phone}
                    </div>
                    <div className={cx('infor')}>
                        <span> Giao đến: </span> {data.address}
                    </div>
                    <div className={cx('infor')}>
                        <span> Tổng tiền: </span> {VND.format(total())}
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
                                    <span>Số lượng: </span> {item.count}
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
