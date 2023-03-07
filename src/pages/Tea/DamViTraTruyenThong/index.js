import Tea from '~/pages/Tea';
import styles from './DamViTraTruyenThong.scss';
import classNames from 'classnames/bind';
import { Grid } from '@mui/material';

import t1 from '~/assets/images/Tea/trà phúc long 1.jpg';
import t2 from '~/assets/images/Tea/trà phúc long 2.jpg';
import t3 from '~/assets/images/Tea/trà-phúc-long-3.jpg';
const cx = classNames.bind(styles);

function DamViTraTruyenThong() {
    return (
        <>
            <Tea />
            <div className={cx('content')}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                        <img width="540" height="320" className={cx('img-1')} src={t1} alt="tra" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={cx('item')}>
                            <p className={cx('text')}>
                                Một cây trà nếu được trồng ở những vùng đất có độ cao và khí hậu khác nhau thì sẽ thu
                                được những loại trà cũng khác nhau. Có thể thấy sự phức tạp đến từ phía bên trong, từ
                                những thành phần cũng như cấu tạo hoá học độc nhất vô nhị mà chỉ mình cây trà có được.
                                Thấu hiểu điều đó, để giữ trọn vị tươi nguyên, bảo toàn dưỡng chất tốt nhất, một búp và
                                hai lá non thường được chúng tôi thu hái vào thời điểm sáng sớm. Tiếp đến, quy trình sản
                                xuất để cho ra các sản phẩm trà chất lượng cũng được thực hiện khép kín.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={cx('item')}>
                            <p className={cx('text')}>
                                Trong quá trình tìm kiếm từng loại trà thượng hạng, Phúc Long luôn giữ gìn những hợp
                                chất đặc biệt từ lá trà để làm nên tách trà đậm vị. - Theanine (vị ngon) là cảm nhận
                                được trạng thái tỉnh táo, tràn đầy năng lượng khi thưởng thức trà. - Carbohydrate (vị
                                ngọt) là đường tích trữ trong lá trà. - Polyphenols (vị chát) là thành phần đặc biệt có
                                nhiều trong lá trà non. - Caffein (vị đắng) là thành phần bị ảnh hưởng bởi 2 yếu tố:
                                nhiệt độ nước và cách ngâm. Để tiết chế caffein, khi pha nên dùng nước nhiệt độ vừa phải
                                và giảm thời gian ngâm trà. - Enzyme (men) là chất xúc tác sinh học thúc đẩy quá trình
                                lên men của lá trà
                            </p>
                            <p className={cx('text')}>
                                Phúc Long thấu hiểu để có được một tách trà ngon thì từ quá trình thu hái lá trà cho đến
                                quá trình sao chế và pha trà cũng cần phải chuẩn xác. Khi sao trà cần phải canh lửa vừa
                                vặn, khi pha trà nhiệt độ nước cũng vừa phải. Để giờ đây, cầm trên tay tách trà ngát
                                hương, nhâm nhi trọn vị trà truyền thống như là một cách thể hiện tâm tình đối với cuộc
                                sống, cảm thụ hương vị tự nhiên toát ra từ lá trà, lòng an nhiên trước bao bộn bề.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img width="540" height="320" className={cx('img-1')} src={t2} alt="tra" />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <img width="540" height="320" className={cx('img-1')} src={t3} alt="tra" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={cx('item')}>
                            <p className={cx('text')}>
                                Tách cà phê hoàn hảo được định nghĩa là tách cà phê có vị đắng đậm đà, chua thanh thoát,
                                lan toả hương thơm nồng nàn, dễ dàng chinh phục vị giác của bất cứ ai. Tách cà phê đậm
                                vị luôn luôn là thức uống giữ vị trí nhất định trong lòng những tín đồ cà phê Việt, dù
                                văn hoá thưởng thức có nhiều thay đổi theo sự phát triển từng ngày của xã hội.
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default DamViTraTruyenThong;
