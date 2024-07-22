import React from 'react';

import styles from './Button.module.css';

function Button({ className = '', variant = 'submit', ...delegated }) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...delegated}
    />
  );
}

export default Button;
