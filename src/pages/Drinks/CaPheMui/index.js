import Drinks from '~/pages/Drinks';
import styles from '../Drinks.module.scss';
import classNames from 'classnames/bind';
import { Button, Grid } from '@mui/material';

import { chololatecf, vanilacf, hanzecf, capuchinocf } from '../../../utils/imageDrinks';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function CaPheMui() {
    return (
        <>
            <Drinks />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6}>
                            <div className={cx('infor')}>
                                <div className={cx('title')}>CÀ PHÊ CHOCOLATE</div>
                                <div className={cx('desc')}>
                                    Cà phê Chocolate là sự kết hợp giữa hai dòng Moka và Robusta cùng hương Chocolate
                                    tạo nên sản phẩm thơm ngon, vị dịu ngọt mang đến cảm giác khoan khoái cho người
                                    thưởng thức. ...
                                </div>
                                <Link to="/aboutus">
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
                                    >
                                        XEM THÊM
                                    </Button>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={cx('cf-img')}>
                                {/* <img className={cx('bg')} src={backgroundcf} alt="cf" /> */}
                                <img className={cx('image')} src={chololatecf} alt="cf" />
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className={cx('content')}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6}>
                            <div className={cx('cf-img')}>
                                {/* <img className={cx('bg')} src={backgroundcf} alt="cf" /> */}
                                <img className={cx('image')} src={vanilacf} alt="cf" />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={cx('infor')}>
                                <div className={cx('title')}>CÀ PHÊ VANILLA</div>
                                <div className={cx('desc')}>
                                    Cà phê Vanilla là sự kết hợp giữa cà phê Robusta và hương vani Pháp, mang lại cho
                                    người thưởng thức vị dịu nhẹ.
                                </div>
                                <Link to="/aboutus">
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
                                    >
                                        XEM THÊM
                                    </Button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className={cx('content')}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6}>
                            <div className={cx('infor')}>
                                <div className={cx('title')}>CÀ PHÊ HAZELNUT</div>
                                <div className={cx('desc')}>
                                    Cà phê Hazelnut là sự kết hợp hài hoà giữa cà phê Robusta và hương hạt Hazelnut -
                                    một lựa chọn hoàn hảo để khởi đầu một ngày mới.
                                </div>
                                <Link to="/aboutus">
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
                                    >
                                        XEM THÊM
                                    </Button>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={cx('cf-img')}>
                                {/* <img className={cx('bg')} src={backgroundcf} alt="cf" /> */}
                                <img className={cx('image')} src={hanzecf} alt="cf" />
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className={cx('content')}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6}>
                            <div className={cx('cf-img')}>
                                {/* <img className={cx('bg')} src={backgroundcf} alt="cf" /> */}
                                <img className={cx('image')} src={capuchinocf} alt="cf" />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={cx('infor')}>
                                <div className={cx('title')}>CÀ PHÊ CAPUCCINO</div>
                                <div className={cx('desc')}>
                                    Cà phê Cappuccino là sự kết hợp giữa hai dòng Moka và Robusta cùng hương Cappuccino
                                    tạo nên sản phẩm có hương thơm và vị béo đặc trưng.
                                </div>
                                <Link to="/aboutus">
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
                                    >
                                        XEM THÊM
                                    </Button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
}

export default CaPheMui;
