import Tea from '~/pages/Tea';
import styles from '../Tea.module.scss';
import classNames from 'classnames/bind';
import { Button, Grid } from '@mui/material';
import trthietquanam from '~/assets/images/Tea/trthitquanm.jpg';
import trolong from '~/assets/images/Tea/trlongphclong.jpg';
import trxanhtn from '~/assets/images/Tea/trxanhthinguyn.jpg';
import trtieulongchau from '~/assets/images/Tea/tra_tieu_long_chau.jpg';

import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function LuaChonLaTra() {
    return (
        <>
            <Tea />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6}>
                            <div className={cx('infor')}>
                                <div className={cx('title')}>TRÀ THIẾT QUAN ÂM</div>
                                <div className={cx('desc')}>
                                    Tương truyền rằng trong thời loạn lạc người dân Phúc Kiến vẫn một lòng thờ phụng
                                    Quan Âm nên được Ơn Trên ban cho giống trà thượng hạng toả hương thanh khiết và từ
                                    đó cái tên Trà Thiết Quan Âm trở thành một nét văn hoá trà đặc sắc của người phương
                                    đông.
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
                                <img className={cx('image')} src={trthietquanam} alt="cf" />
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className={cx('content')}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6}>
                            <div className={cx('cf-img')}>
                                {/* <img className={cx('bg')} src={backgroundcf} alt="cf" /> */}
                                <img className={cx('image')} src={trolong} alt="cf" />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={cx('infor')}>
                                <div className={cx('title')}>TRÀ Ô LONG</div>
                                <div className={cx('desc')}>
                                    Trà Ô Long được biết đến như một trong những đại danh trà với hương vị tinh tế. Đặc
                                    điểm chế biến trà Ô Long rất độc đáo với cách thức bán lên men tự nhiên. Sau khi thu
                                    hoạch theo nguyên lý một búp và hai lá trà non sẽ được ủ lên men, khi thấy màu lá
                                    chuyển sang ba phần đỏ, bảy phần đen thì là thời điểm trà được sao ủ tốt nhất để có
                                    được mùi vị thơm ngon nhất.
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
                                <div className={cx('title')}>TRÀ XANH THÁI NGUYÊN</div>
                                <div className={cx('desc')}>
                                    Trà xanh là loại thức uống truyền thống của người Châu Á từ ngàn xưa đến nay. Từ
                                    những đọt trà non xanh tươi mơn mởn, trà xanh được chế biến không qua công đoạn lên
                                    men nhằm đảm bảo trọn vẹn hương vị thiên nhiên trong từng ngụm trà ấm áp. Dư vị trà
                                    xanh chát nhẹ nhưng thanh khiết, mang lại phút giây thư giãn tuyệt vời.
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
                                <img className={cx('image')} src={trxanhtn} alt="cf" />
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className={cx('content')}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6}>
                            <div className={cx('cf-img')}>
                                {/* <img className={cx('bg')} src={backgroundcf} alt="cf" /> */}
                                <img className={cx('image')} src={trtieulongchau} alt="cf" />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={cx('infor')}>
                                <div className={cx('title')}>TRÀ TIỂU LONG CHÂU</div>
                                <div className={cx('desc')}>
                                    Từ những búp trà non xanh tươi nhất giữa tiết trời xuân qua đôi bàn tay khéo léo của
                                    những nghệ nhân trà, trà Tiểu Long Châu như chính tên gọi, được tạo dáng thành những
                                    viên ngọc tròn nhỏ nhắn thuần khiết toả hương lài thơm ngát.
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

export default LuaChonLaTra;
