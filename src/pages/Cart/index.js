import { Button, Grid } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import cartEmpty from '~/assets/images/Home/cart-empty.png';
import { addToCart, removeFromCart, decreaseCart, increaseCart } from '../../redux/features/cartsSlice';

const cx = classNames.bind(styles);

function Cart() {
    let discount = 0;

    const dispatch = useDispatch();
    const data = useSelector((state) => state.carts.cartItems);
    const total = useSelector((state) => state.carts.cartTotalAmount);

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

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

    const removeItem = (item) => {
        dispatch(removeFromCart(item));
    };
    const handleIncreaseQty = (item) => {
        dispatch(increaseCart(item));
    };
    const handleDereaseQty = (item) => {
        dispatch(decreaseCart(item));
    };
    return (
        <>
            <div className={cx('contaner')}>
                {data.length !== 0 ? (
                    <Grid container justify="space-around" spacing={1}>
                        <Grid xs={12} md={9}>
                            <table>
                                <tbody>
                                    <tr className={cx('t-head')}>
                                        <td className={cx('product')}>Sản phẩm</td>
                                        <td className={cx('price')}>Giá tiền</td>
                                        <td className={cx('qty')}>Số lượng</td>
                                        <td className={cx('total')}>Thành tiền</td>
                                    </tr>

                                    {data.map((item) => (
                                        <tr className={cx('item-infor')}>
                                            <td className={cx('product')}>
                                                <img width="80" height="80" src={item.img} alt="pl" />
                                                <div className={cx('infor-sp')}>
                                                    <div className={cx('item-title')}> {item.name}</div>
                                                    <div className={cx('item-desc')}> {item.desc}</div>
                                                </div>
                                                <span
                                                    className={cx('btn-close')}
                                                    onClick={() => {
                                                        removeItem(item);
                                                    }}
                                                >
                                                    {' '}
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </span>
                                            </td>
                                            <td className={cx('price')}>{VND.format(item.price)} </td>
                                            <td className={cx('qty')}>
                                                <span
                                                    onClick={() => {
                                                        handleDereaseQty(item);
                                                    }}
                                                    className={cx('handle-qty')}
                                                >
                                                    -
                                                </span>
                                                <span className={cx('ini-qty')}> {item.cartQuantity}</span>
                                                <span
                                                    onClick={() => {
                                                        handleIncreaseQty(item);
                                                    }}
                                                    className={cx('handle-qty-plus')}
                                                >
                                                    +
                                                </span>
                                            </td>
                                            <td className={cx('total')}>
                                                {VND.format(item.price * item.cartQuantity)}{' '}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className={cx('t-last')}>
                                        <td className={cx('continute-buying')}>
                                            <Link to="/catogy/products">
                                                <ArrowBackIosIcon sx={{ fontSize: '2.3rem', textAlign: 'center' }} />
                                                <span>Tiếp tục mua hàng</span>
                                            </Link>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td className={cx('thanhtien')}>
                                            <div className={cx('temp-price')}>
                                                Tạm tính: <span> {VND.format(total)} </span>
                                            </div>
                                            <div className={cx('vat')}>(Đã bao gồm VAT)</div>
                                            <div className={cx('btn-checkout')}>
                                                {/* <Link to="/checkout">
                                                <Button
                                                    variant="text"
                                                    size="medium"
                                                    sx={{
                                                        fontSize: '1.2rem',
                                                        backgroundColor: '#0c713d',
                                                        color: '#fff',
                                                        textTransform: 'default',
                                                        borderColor: '#0c713d',
    
                                                        '&:hover': {
                                                            backgroundColor: '#0c713d',
                                                            color: '#fff',
                                                            borderColor: '#0c713d',
                                                        },
                                                    }}
                                                >
                                                    Tiến hành đặt hàng
                                                </Button>
                                            </Link> */}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <div className={cx('bill-wrap')}>
                                <div className={cx('bill-header')}>Hóa đơn của bạn</div>
                                <div className={cx('bill-content')}>
                                    <div className={cx('bill-temp-price')}>
                                        Tạm tính: <span> {VND.format(total)} </span>
                                    </div>

                                    <div className={cx('discount')}>
                                        Giảm giá: <span>{VND.format(discount)} </span>
                                    </div>
                                    <div className={cx('total-item')}>
                                        Tổng tiền: <span>{VND.format(total - discount)} </span>
                                    </div>

                                    <div className={cx('vat')}>(Đã bao gồm VAT)</div>
                                    <Link to="/cart/payment-infor">
                                        <Button
                                            variant="text"
                                            size="medium"
                                            sx={{
                                                fontSize: '1.4rem',
                                                backgroundColor: '#0c713d',
                                                color: '#fff',
                                                textTransform: 'default',
                                                borderColor: '#0c713d',
                                                width: '100%',

                                                '&:hover': {
                                                    backgroundColor: '#0c713d',
                                                    color: '#fff',
                                                    borderColor: '#0c713d',
                                                },
                                            }}
                                        >
                                            Tiến hành đặt hàng
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                ) : (
                    <div className={cx('nothing-in-cart')}>
                        <img src={cartEmpty} alt="empty" />
                        <div>Không có sản phẩm nào trong giỏ hàng</div>
                        <Link to="/catogy/products">
                            {' '}
                            <Button
                                variant="text"
                                size="medium"
                                sx={{
                                    fontSize: '1.4rem',
                                    backgroundColor: '#0c713d',
                                    color: '#fff',
                                    textTransform: 'default',
                                    borderColor: '#0c713d',
                                    width: '100%',
                                    '&:hover': {
                                        backgroundColor: '#0c713d',
                                        color: '#fff',
                                        borderColor: '#0c713d',
                                    },
                                }}
                            >
                                Quay lại mua hàng
                            </Button>
                        </Link>
                    </div>
                )}
            </div>

            <div className={cx('wrap-mb')}>
                {data.length !== 0 ? (
                    <>
                        {' '}
                        <div className={cx('item-wrap')}>
                            {data.map((item) => {
                                return (
                                    <div className={cx('item-item')}>
                                        <img width="70" height="70" src={item.img} alt="pl" />
                                        <div className={cx('mb-item-infor')}>
                                            <span className={cx('mb-item-title')}>{item.name}</span>
                                            <span className={cx('mb-item-desc')}>{item.desc}</span>
                                            <div className={cx('mb-item-quantity')}>
                                                <span
                                                    onClick={() => {
                                                        handleDereaseQty(item);
                                                    }}
                                                    className={cx('mb-qty')}
                                                >
                                                    -
                                                </span>
                                                <span className={cx('mb-ini-qty')}> {item.cartQuantity}</span>
                                                <span
                                                    onClick={() => {
                                                        handleIncreaseQty(item);
                                                    }}
                                                    className={cx('mb-qty')}
                                                >
                                                    +
                                                </span>
                                                <span className={cx('mb-item-price')}>
                                                    {' '}
                                                    x {VND.format(item.price)}{' '}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={cx('bill-content')}>
                            <div className={cx('bill-temp-price')}>
                                Tạm tính: <span> {VND.format(total)} </span>
                            </div>

                            <div className={cx('discount')}>
                                Giảm giá: <span>{VND.format(discount)} </span>
                            </div>
                            <div className={cx('total-item')}>
                                Tổng tiền: <span>{VND.format(total - discount)} </span>
                            </div>

                            <div className={cx('vat')}>
                                <span>(Đã bao gồm VAT)</span>
                            </div>
                        </div>
                        <Link className={cx('continute-buying')} to="/catogy/products">
                            <ArrowBackIosIcon sx={{ fontSize: '1.6rem', textAlign: 'center' }} />
                            <span>Tiếp tục mua hàng</span>
                        </Link>
                        <Link to="/cart/payment-infor">
                            <Button
                                variant="text"
                                size="medium"
                                sx={{
                                    fontSize: '1.4rem',
                                    backgroundColor: '#0c713d',
                                    color: '#fff',
                                    textTransform: 'default',
                                    borderColor: '#0c713d',
                                    width: '100%',
                                    '&:hover': {
                                        backgroundColor: '#0c713d',
                                        color: '#fff',
                                        borderColor: '#0c713d',
                                    },
                                }}
                            >
                                Tiến hành đặt hàng
                            </Button>
                        </Link>
                    </>
                ) : (
                    <div className={cx('nothing-in-cart')}>
                        <img src={cartEmpty} alt="empty" />
                        <div>Không có sản phẩm nào trong giỏ hàng</div>
                        <Link to="/catogy/products">
                            {' '}
                            <Button
                                variant="text"
                                size="medium"
                                sx={{
                                    fontSize: '1.4rem',
                                    backgroundColor: '#0c713d',
                                    color: '#fff',
                                    textTransform: 'default',
                                    borderColor: '#0c713d',
                                    width: '100%',
                                    '&:hover': {
                                        backgroundColor: '#0c713d',
                                        color: '#fff',
                                        borderColor: '#0c713d',
                                    },
                                }}
                            >
                                Quay lại mua hàng
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;
