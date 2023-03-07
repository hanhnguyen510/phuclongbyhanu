import Drinks from '~/pages/Drinks';
import styles from './DamHatCaPhe.module.scss';
import classNames from 'classnames/bind';
import { Grid } from '@mui/material';

import { cfdv1, cfdv2, cfdv3 } from '../../../utils/imageDrinks';
const cx = classNames.bind(styles);

function DamHatCaPhe() {
    return (
        <>
            <Drinks />
            <div className={cx('content')}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                        <img width="540" height="320" className={cx('img-1')} src={cfdv1} alt="tra" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={cx('item')}>
                            <p className={cx('text')}>
                                Cà phê càng được rang sẫm màu hương vị càng trọn vẹn. Rang cà phê là một quá trình đòi
                                hỏi sự tinh tế từ đôi bàn tay và sự am hiểu từng loại hạt cà phê của người nghệ nhân.
                                Rang lửa nhỏ khiến cà phê chưa chín tới và đắng hơn, trong khi rang quá kỹ lại khiến cà
                                phê cháy khét đánh mất những đặc tính thượng hạng vốn có. Trong quá trình rang đủ thời
                                gian, những dinh dưỡng như proteins, enzymes mới sẽ tích tụ phía trong tạo nên phần chất
                                của cà phê, làm cho cà phê đậm hơn, sánh hơn.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={cx('item')}>
                            <p className={cx('text')}>
                                Trên hành trình tìm kiếm những hạt cà phê ngon nhất, Phúc Long luôn chú trọng bốn đặc
                                tính từ trái cà phê nhằm tôn trọng nguyên bản cho tách cà phê đậm vị.
                            </p>
                            <p className={cx('text')}>
                                - Hương thơm là mùi hương của hạt cà phê - thơm bao nhiêu hứa hẹn cho nhiều vị bấy
                                nhiêu.
                            </p>
                            <p className={cx('text')}>
                                - Thể chất là khái niệm để chỉ độ đậm đà trong nước chiết xuất cà phê. cảm nhận thông
                                qua đánh giá của người thưởng thức.
                            </p>
                            <p className={cx('text')}>- Acid là hợp chất tạo nên vị chua thanh của cà phê.</p>
                            <p className={cx('text')}>
                                - Hậu vị là cảm nhận vị cà phê còn đọng lại sau khi thưởng thức.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img width="540" height="320" className={cx('img-1')} src={cfdv2} alt="tra" />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <img width="540" height="320" className={cx('img-1')} src={cfdv3} alt="tra" />
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

export default DamHatCaPhe;
