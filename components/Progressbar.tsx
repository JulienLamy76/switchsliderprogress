import React from 'react';
import styles from './Progressbar.module.css';

type Props = {
    value: number;
}

const Progressbar: React.FC<Props> = ({ value }) => (
    <div className={styles.progressbar} data-progress={value}>
        <span className={styles.fill} style={{ width: `${value}%` }} />
    </div>
);

export default Progressbar;