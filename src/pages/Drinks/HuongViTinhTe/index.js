import Drinks from '~/pages/Drinks';
import styles from '../Drinks.module.scss';
import classNames from 'classnames/bind';
import { Button, Grid } from '@mui/material';

import { roytalcf, robustacf, culicf } from '../../../utils/imageDrinks';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function HuongViTinhTe() {
    return (
        <>
            <Drinks />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6}>
                            <div className={cx('infor')}>
                                <div className={cx('title')}>CÀ PHÊ ARABICA - CULI</div>
                                <div className={cx('desc')}>
                                    Hương cà phê Arabica rất thơm, có vị chua, sau khi uống đọng lại cảm giác ngọt ở cổ
                                    họng. Arabica Cầu Đất có vị chua thanh xen lẫn với vị đắng nhẹ, nước pha màu nước
                                    nâu nhạt, trong trẻo của hổ phách. Mùi hương của Arabica rất thanh tao, quý phái,
                                    ...
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
                                <div className={cx('title')}>CÀ PHÊ CHERRY</div>
                                <div className={cx('desc')}>
                                    Cà phê Cherry còn được gọi là cà phê Mít. Hạt cà phê Cherry có màu vàng, sáng bóng
                                    rất đẹp. Hương vị tuy không đậm đà như Robusta, cũng không nồng nàn như Arabica,
                                    nhưng cà phê Cherry mang đặc trưng riêng: chua nhẹ, hơi chát, hàm lượng caffein
                                    thấp, cùng hương thơm thoang thoảng.
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
                                <div className={cx('title')}>CÀ PHÊ MOKA</div>
                                <div className={cx('desc')}>
                                    Cà phê Moka là giống cà phê rất khó trồng, thuộc chi Arabica, được trồng phổ biến
                                    tại Đà Lạt, Lâm Đồng, đặc biệt là Moka Cầu Đất. Ở Việt Nam, cà phê Moka được xếp vào
                                    sản phẩm thực sự quý hiếm bởi chất lượng và hương vị tuyệt vời: thơm sang trọng,
                                    chua thanh thoát.
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

export default HuongViTinhTe;
