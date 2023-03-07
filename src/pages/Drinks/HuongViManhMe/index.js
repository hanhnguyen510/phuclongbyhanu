import Drinks from '~/pages/Drinks';
import styles from '../Drinks.module.scss';
import classNames from 'classnames/bind';
import { Button, Grid } from '@mui/material';

import { roytalcf, robustacf, culicf } from '../../../utils/imageDrinks';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function HuongViManhMe() {
    return (
        <>
            <Drinks />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6}>
                            <div className={cx('infor')}>
                                <div className={cx('title')}>CÀ PHÊ ROYAL</div>
                                <div className={cx('desc')}>
                                    Cà phê Royal là sự kết hợp hoàn hảo giữa ba loại hạt: Moka, Robusta và Culi theo tỉ
                                    lệ nhất định tạo nên sản phẩm hội tụ của sắc, hương và vị.
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
                                <img className={cx('image')} src={roytalcf} alt="cf" />
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className={cx('content')}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6}>
                            <div className={cx('cf-img')}>
                                {/* <img className={cx('bg')} src={backgroundcf} alt="cf" /> */}
                                <img className={cx('image')} src={robustacf} alt="cf" />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={cx('infor')}>
                                <div className={cx('title')}>CÀ PHÊ ROBUSTA</div>
                                <div className={cx('desc')}>
                                    Cà phê Robusta còn gọi là cà phê Vối, đây là giống cà phê được trồng phổ biến tại
                                    Việt Nam, đặc biệt là khu vực Tây Nguyên. Việt Nam hiện là nước sản xuất và xuất
                                    khẩu cà phê Robusta đứng đầu thế giới. Hạt cà phê Robusta tròn, sậm màu, hàm lượng
                                    caffein khoảng 2 – 2.5%.
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
                                <div className={cx('title')}>CÀ PHÊ CULI</div>
                                <div className={cx('desc')}>
                                    Cà phê Culi còn được gọi là Peaberry, có vị đắng gắt, hương thơm say đắm. Cà phê
                                    Culi là những trái cà phê đột biến có duy nhất một hạt từ các chủng loại thông
                                    thường như Arabica hay Robusta, chỉ chiếm khoảng 5% tổng số lượng cà phê trong một
                                    đợt thu hoạch, luôn được chọn lọc và rang riêng để đảm bảo chất lượng hoàn hảo.
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
                                <img className={cx('image')} src={culicf} alt="cf" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
}

export default HuongViManhMe;
