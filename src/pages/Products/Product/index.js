import { Button, Grid } from '@mui/material';
import styles from './Product.module.scss';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { listProducts } from '~/utils/imageListProducts';
import Modal from '~/components/Modal';
import { NavLink } from 'react-router-dom';
import { productBanner } from '~/utils/imageBanner';
import { SliderBanner } from '~/components/Layout/Slider';

const cx = classNames.bind(styles);

function Products() {
    const [isOpen, setIsOpen] = useState(false);
    const [itemData, setItemData] = useState({});
    const handleShowModal = (data) => {
        setIsOpen(true);
        setItemData(data);
    };
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return (
        <>
            <SliderBanner image={productBanner} />;
            <div className={cx('container')}>
                <h2>THỨC UỐNG</h2>
                <div className={cx('seperator-icon')}></div>
                <ul className={cx('list-menu')}>
                    <li>
                        <NavLink
                            to="/catogy/products"
                            style={({ isActive }) => ({
                                borderTop: isActive ? '1px solid #0c713d' : '',
                                borderBottom: isActive ? '1px solid #0c713d' : '',
                                color: isActive ? '#0c713d' : '',
                            })}
                        >
                            THỨC UỐNG
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/catogy/snacks"
                            style={({ isActive }) => ({
                                color: isActive ? '#0c713d' : '',
                                borderTop: isActive ? '1px solid #0c713d' : '',
                                borderBottom: isActive ? '1px solid #0c713d' : '',
                            })}
                        >
                            SNACKS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/catogy/bakery"
                            style={({ isActive }) => ({
                                color: isActive ? '#0c713d' : '',
                                borderTop: isActive ? '1px solid #0c713d' : '',
                                borderBottom: isActive ? '1px solid #0c713d' : '',
                            })}
                        >
                            BAKERY
                        </NavLink>
                    </li>
                </ul>
                <Grid container spacing={0}>
                    {listProducts.map((data, index) => (
                        <Grid key={index} item xs={6} md={3}>
                            <div className={cx('product-item')}>
                                <div className={cx('item-wrapper')}>
                                    <img width="180" height="180" className={cx('item-img')} src={data.img} alt="pl" />
                                    <div className={cx('item-infor')}>
                                        <div className={cx('item-name')}>{data.name}</div>
                                        <div className={cx('item-desc')}>{data.desc}</div>
                                        <div className={cx('item-price')}>{VND.format(data.price)} </div>
                                    </div>
                                    <Button
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
                                        onClick={() => {
                                            handleShowModal(data);
                                        }}
                                    >
                                        ĐẶT HÀNG
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
                {isOpen && <Modal key={itemData.id} setIsOpen={setIsOpen} data={itemData} />}
            </div>
        </>
    );
}

export default Products;
