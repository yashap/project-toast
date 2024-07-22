import React from 'react'

import { ToastContext } from './ToastContext'

export const useToast = () => {
  const { showToast, clearToasts } = React.useContext(ToastContext)
  return { showToast, clearToasts }
}
