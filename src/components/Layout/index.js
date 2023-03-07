import Footer from './Footer';
import Header from './Header';
import styles from './Layout.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { useState } from 'react';
import zIndex from '@mui/material/styles/zIndex';
const cx = classNames.bind(styles);

function Layout({ children }) {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour
                 in place of 'smooth' */
        });
    };
    window.addEventListener('scroll', toggleVisible);
    return (
        <div className={cx('page')}>
            <Header />
            <div className="container">{children}</div>

            <div style={{ display: visible ? 'inline' : 'none' }} className={cx('back-to-top')} onClick={scrollToTop}>
                <FontAwesomeIcon icon={faAngleUp} />
            </div>

            <div className={cx('ring')}>
                <a href="tel:18006779" title="Call now" className={cx('quickcallbtn')}>
                    <div className={cx('phone-ring')}>
                        <div className={cx('quick-alo-circle')}></div>
                        <div className={cx('quick-alo-circle-fill')}></div>
                        <div className={cx('quick-alo-circle-img')}>
                            <PhoneInTalkIcon sx={{ fontSize: '24px', color: '#fff', zIndex: '10' }} />
                        </div>
                    </div>
                </a>
                <div className={cx('text-call')}>HOTLINE: 1800 6779</div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
