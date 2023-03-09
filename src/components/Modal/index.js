import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cartsSlice';
const cx = classNames.bind(styles);

function Modal({ data, setIsOpen }) {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [total, setTotal] = useState(data.price);
    const newData = { ...data, qty: count, total: total };

    const handleAddCart = () => {
        setIsOpen(false);
        dispatch(addToCart(newData));
    };
    const handleRemoveQuantity = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
            setTotal((prev) => prev - data.price);
        } else {
            setCount(1);
        }
    };
    const handleAddQuantity = () => {
        setCount((prev) => prev + 1);
        setTotal((prev) => prev + data.price);
    };
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return (
        <div
            className={cx('modal')}
            onClick={() => {
                setIsOpen(false);
            }}
        >
            <div
                className={cx('modal-dialog')}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <button
                    onClick={() => {
                        setIsOpen(false);
                    }}
                    className={cx('btn-close')}
                >
                    <FontAwesomeIcon icon={faClose} />
                </button>
                <div className={cx('modal-content')}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={5}>
                            <div className={cx('item-img')}>
                                <img width="264" height="264" src={data.img} alt="pl" />
                                <div className={cx('item-infor-mb')}>
                                    <div className={cx('item-title-mb')}>{data.name}</div>
                                    <div className={cx('item-price-mb')}>{VND.format(data.price)} </div>
                                </div>

                                <div className={cx('item-price')}>{VND.format(data.price)}</div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <div className={cx('item-infor')}>
                                <div className={cx('item-title')}>{data.name}</div>
                                <div className={cx('item-desc')}>{data.desc}</div>
                                <div className={cx('item-size')}>
                                    <span>Kích cỡ </span>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            fontSize: '1.2rem',
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
                                        {' '}
                                        Ice regular size
                                    </Button>
                                </div>
                                <div className={cx('item-quantity')}>
                                    <span>Số lượng</span>
                                    <Button
                                        onClick={handleRemoveQuantity}
                                        sx={{
                                            fontSize: '1.5rem',
                                            backgroundColor: '#fff',
                                            color: '#171717',
                                            borderColor: '#B3B3B3',
                                            '&:hover': {
                                                backgroundColor: '#0c713d',
                                                color: '#fff',
                                                borderColor: '#0c713d',
                                            },
                                        }}
                                        variant="outlined"
                                        size="small"
                                        className={cx('change-decrease')}
                                    >
                                        -
                                    </Button>
                                    <Button
                                        sx={{
                                            fontSize: '1.5rem',
                                            backgroundColor: '#fff',
                                            color: '#171717',
                                            borderColor: '#B3B3B3',
                                            '&:hover': {
                                                borderColor: '#0c713d',
                                            },
                                        }}
                                        variant="outlined"
                                        size="small"
                                        className={cx('quantity')}
                                    >
                                        {count}
                                    </Button>
                                    <Button
                                        onClick={handleAddQuantity}
                                        sx={{
                                            fontSize: '1.5rem',
                                            backgroundColor: '#fff',
                                            color: '#171717',
                                            borderColor: '#B3B3B3',
                                            '&:hover': {
                                                backgroundColor: '#0c713d',
                                                color: '#fff',
                                                borderColor: '#0c713d',
                                            },
                                        }}
                                        variant="outlined"
                                        size="small"
                                        className={cx('change-increase')}
                                    >
                                        +
                                    </Button>
                                </div>
                                <div className={cx('item-notes')}>
                                    <span>Ghi chú</span>
                                    <input></input>
                                </div>
                                <div className={cx('item-total-price')}>
                                    <span>Tổng:</span>
                                    <div className={cx('total-price')}>{VND.format(total)} </div>
                                </div>
                                <div className={cx('add-to-cart')}>
                                    <Button
                                        onClick={handleAddCart}
                                        variant="outlined"
                                        size="medium"
                                        sx={{
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
                                        ĐẶT HÀNG
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Modal;
