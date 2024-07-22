import React from 'react'

import { Toast } from '../Toast'
import { ToastContext } from '../ToastContext'
import styles from './ToastShelf.module.css'

export const ToastShelf = () => {
  const { toasts, removeToast } = React.useContext(ToastContext)
  return (
    <ol className={styles.wrapper} role='region' aria-live='polite' aria-label='Notification'>
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast onClickRemove={() => removeToast(id)} variant={variant}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  )
}
