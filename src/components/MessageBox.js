// src/components/MessageBox.js
import React from 'react';
import styles from './MessageBox.module.css';

const MessageBox = ({ message, show, onClose }) => {
    return (
        <div className={`${styles.overlay} ${show ? styles.show : ''}`}>
            <div className={styles.content}>
                <p className={styles.text}>{message}</p>
                <button onClick={onClose} className={styles.button}>OK</button>
            </div>
        </div>
    );
};

export default MessageBox;