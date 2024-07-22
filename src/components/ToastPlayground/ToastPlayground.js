import React from 'react'

import Button from '../Button'
import { useToast } from '../Toast'

import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

const ToastPlayground = () => {
  const { showToast, clearToasts } = useToast();
  const messageId = React.useId()
  const [message, setMessage] = React.useState('')
  const [selectedVariant, setSelectedVariant] = React.useState(VARIANT_OPTIONS[0])
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label htmlFor={messageId} className={styles.label} style={{ alignSelf: 'baseline' }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              value={message}
              onChange={(event) => {
                setMessage(event.target.value)
              }}
              id={messageId}
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => {
              const variantId = `variant-${variant}`
              return (
                <label htmlFor={variantId} key={variant}>
                  <input
                    id={variantId}
                    type='radio'
                    name='variant'
                    value={variant}
                    checked={selectedVariant === variant}
                    onChange={(event) => {
                      setSelectedVariant(event.target.value)
                    }}
                  />
                  {variant}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => showToast({ message, variant: selectedVariant })}>Pop Toast!</Button>
          </div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button variant={'danger'} onClick={clearToasts}>Clear Toasts</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToastPlayground
