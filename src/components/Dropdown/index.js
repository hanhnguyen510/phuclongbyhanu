import styles from './Dropdown.module.scss';
import classNames from 'classnames/bind';
// import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Dropdown({ options, selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={cx('dropdown')}>
            <div onClick={() => setIsActive(!isActive)} className={cx('dropdown-btn')}>
                <div className={cx('dropdown-text')}>{selected}</div>
                <KeyboardArrowDownIcon />
            </div>
            {isActive && (
                <div className={cx('dropdown-content')}>
                    {options.map((option) => (
                        <div
                            onClick={() => {
                                setSelected(option);
                                setIsActive(false);
                            }}
                            className={cx('dropdown-item')}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
