import React from 'react';
import styles from './Switch.module.css';

type Props = {
    isToggled: boolean;
    onToggle: () => void;
}

const Switch: React.FC<Props> = ({ isToggled, onToggle }) => (
    <label className={styles.switch}>
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className={styles.slider} />
    </label>
);

export default Switch;