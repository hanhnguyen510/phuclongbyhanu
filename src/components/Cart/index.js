import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import classNames from 'classnames/bind';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { useDispatch, useSelector } from 'react-redux';
import styles from './Cart.module.scss';
import { deleteToAllCart } from '../../redux/actions';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import cartEmpty from '~/assets/images/Home/cart-empty.png';
const cx = classNames.bind(styles);

function Cart() {
    const dispatch = useDispatch();

    const data = useSelector((state) => state.cartReducer.carts);

    const count = data.map((item) => item.count);
    const qty = count.reduce((sum, item) => sum + item, 0);
    const total = () => {
        const price = data.map((item) => item.total);

        return price.reduce((sum, item) => sum + item, 0);
    };

    const removeItem = (id) => {
        dispatch(deleteToAllCart(id));
    };
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return (
        <>
            <div className={cx('cart-wrapper')}>
                <div className={cx('cart-text')}>Giỏ hàng</div>
                <div className={cx('cart')}>
                    {/* <FontAwesomeIcon className={cx('cart-icon')} icon={faCartShopping} /> */}
                    <ShoppingCartOutlinedIcon sx={{ fontSize: '20px' }} />
                    <div className={cx('cart-number')}>{qty}</div>
                </div>
                <div className={cx('mini-cart')}>
                    <div className={cx('mini-cart__content')}>
                        <div className={cx('cart-infor')}>
                            <span>Giỏ hàng của bạn</span>
                        </div>
                        {data.length !== 0 ? (
                            <div className={cx('scroll-content')}>
                                {data.map((item) => (
                                    <div className={cx('cart-list')}>
                                        <div className={cx('item-thumb')}>
                                            <img width="80" height="80" src={item.img} alt="" />
                                        </div>

                                        <div className={cx('item-title')}>
                                            <div className={cx('item-name')}>{item.name}</div>
                                            <div className={cx('item-size')}>Ice Regular</div>
                                            <div className={cx('item-total')}>
                                                <span className={cx('item-quantity')}>{item.count}</span> X
                                                <span className={cx('item-price')}> {VND.format(item.price)} </span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => {
                                                removeItem(item.id);
                                            }}
                                            className={cx('btn-close')}
                                        >
                                            <FontAwesomeIcon icon={faClose} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className={cx('nothing-in-cart')}>
                                <img width="50%" src={cartEmpty} alt="nothing" />
                            </div>
                        )}

                        <div className={cx('cart-total')}>
                            <span>Tổng tiền: </span>
                            <span className={cx('price-total')}>{VND.format(total())} </span>
                        </div>
                        <Link to="/cart">
                            <Button
                                variant="outlined"
                                size="large"
                                endIcon={<KeyboardArrowRightOutlinedIcon />}
                                sx={{
                                    width: '100%',

                                    fontSize: '1.3rem',
                                    backgroundColor: '#fff',
                                    color: '#0c713d',
                                    borderColor: '#0c713d',
                                    '&:hover': {
                                        backgroundColor: '#0c713d',
                                        color: '#fff',
                                        borderColor: '#0c713d',
                                    },
                                }}
                            >
                                XEM CHI TIẾT
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
