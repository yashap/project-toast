import React from 'react'

import {useEscapeKey} from '../../hooks/useEscapeKey'
import { ToastContext } from './ToastContext'
import { ToastShelf } from './ToastShelf'

export const ToastProvider = ({ children, maxToasts = 6, defaultToastTimeoutMs = 60_000 }) => {
  const [toasts, setToasts] = React.useState([])
  const defaultToastProps = React.useMemo(() => {
    return {
      message: '',
      variant: 'notice',
      timeoutMs: defaultToastTimeoutMs,
    }
  }, [defaultToastTimeoutMs])

  const removeToast = React.useCallback((id) => {
    setToasts((currentToasts) => {
      return currentToasts.filter((toast) => toast.id !== id)
    })
  }, [])

  const showToast = React.useCallback((props) => {
    const id = crypto.randomUUID()
    const { message, variant, timeoutMs } = { ...defaultToastProps, ...props }
    setToasts((currentToasts) => {
      const nextToasts = [...currentToasts, { id, message, variant }]
      return nextToasts.slice(-maxToasts)
    })
    if (timeoutMs) {
      setTimeout(() => removeToast(id), timeoutMs)
    }
    return id
  }, [])

  const clearToasts = React.useCallback(() => {
    setToasts([])
  }, [])

  useEscapeKey(clearToasts);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        showToast,
        removeToast,
        clearToasts,
      }}
    >
      {children}
      <ToastShelf />
    </ToastContext.Provider>
  )
}
