import React from 'react';
import styles from './Slider.module.css';

type Props = {
    value: number;
    onChange: (e: any) => void;
}

const Slider: React.FC<Props> = ({ value, onChange }) => (
    <div className={styles.sliderContainer}>
        <span className={styles.bar}><span className={styles.fill} style={{width: `${value}%`}}></span></span>
        <input className={styles.slider} type="range" min={0} max={100} value={value} onChange={onChange} />
    </div>
);

export default Slider;