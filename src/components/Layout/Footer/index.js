/* eslint-disable no-unused-vars */
import { Button, Grid } from '@mui/material';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Footer() {
    const [email, setEmail] = useState();
    const [error, setError] = useState('');
    const handleChange = (e) => {
        setEmail(e.target.value);
        setError(validate(email));
    };
    const handleSubmit = () => {};
    const validate = (email) => {
        let err = '';
        const regex =
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        if (!regex.test(email)) {
            err = 'Email không hợp lệ!';
        }
        return err;
    };
    return (
        <footer className={cx('footer')}>
            <div className={cx('wrapper')}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                        <div className={cx('coppy_right')}>
                            <div>
                                {' '}
                                <span className={cx('title')}>Trụ sở chính:</span>
                                <span className={cx('text')}>
                                    {' '}
                                    Công ty Cổ Phần Phúc Long Heritage - ĐKKD: 0316 871719 do sở KHĐT TPHCM cấp lần đầu
                                    ngày 21/05/2021
                                </span>
                            </div>
                            <div>
                                {' '}
                                <span className={cx('title')}>Nhà máy:</span>
                                <span className={cx('text')}>
                                    {' '}
                                    D_8D_CN Đường XE 1, Khu Công Nghiệp Mỹ Phước III, phường Mỹ Phước, thị xã Bến Cát,
                                    tỉnh Bình Dương, Việt Nam
                                </span>
                            </div>
                            <div>
                                {' '}
                                <span className={cx('title')}> Địa chỉ:</span>
                                <span className={cx('text')}>
                                    {' '}
                                    Phòng 702, Tầng 7, Tòa nhà Central Plaza, số 17 Lê Duẩn, phường Bến Nghé, quận 1, Hồ
                                    Chí Minh
                                </span>
                            </div>
                            <div>
                                {' '}
                                <span className={cx('title')}> Điện thoại:</span>
                                <span className={cx('text')}> 1900 234 518 (Ext.9100/ 9102)</span>
                            </div>
                            <div>
                                <span className={cx('title')}> Fax:</span>
                                <span className={cx('text')}>
                                    {' '}
                                    (028) 6263 0379 Email: sales@phuclong.masangroup.com info2@phuclong.masangroup.com
                                </span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <div className={cx('follow')}>
                            <h5>Đăng ký nhận tin khuyến mãi</h5>
                            <input
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="Nhập địa chỉ email"
                            ></input>

                            <Button
                                onClick={handleSubmit}
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
                                Gửi
                            </Button>
                            <p className={cx('error')}> {error}</p>
                            <Link>Chính sách đặt hàng</Link>
                            <Link>Chính bảo mật thông tin</Link>
                        </div>
                    </Grid>
                    <Grid item sx={12} md={3}>
                        <div className={cx('language')}>
                            <div className={cx('lang-wrapper')}>
                                <Link to="/">
                                    <span className={cx('lang-item', 'active')}>VN</span>
                                </Link>
                                |
                                <Link to="/">
                                    <span className={cx('lang-item')}>EN</span>
                                </Link>
                            </div>
                            <div className={cx('social')}>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/phuclongcoffeeandtea">
                                            <FacebookIcon
                                                fontSize="2.2rem"
                                                sx={{
                                                    '&:hover': {
                                                        opacity: 0.7,
                                                    },
                                                }}
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <TwitterIcon
                                                fontSize="2.2rem"
                                                sx={{
                                                    '&:hover': {
                                                        opacity: 0.7,
                                                    },
                                                }}
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/phuclongcoffeeandtea/">
                                            <InstagramIcon
                                                fontSize="2.2rem"
                                                sx={{
                                                    '&:hover': {
                                                        opacity: 0.7,
                                                    },
                                                }}
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/channel/UCq6WR0wWNUuz53c4zeWSa8g">
                                            <YouTubeIcon
                                                fontSize="2.2rem"
                                                sx={{
                                                    '&:hover': {
                                                        opacity: 0.7,
                                                    },
                                                }}
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className={cx('cpright')}>© 2023 Bản quyền by Hanh__Nguyen</div>
        </footer>
    );
}

export default Footer;
