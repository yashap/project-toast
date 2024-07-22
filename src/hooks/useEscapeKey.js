import React from 'react'

export const useEscapeKey = (onEscape) => {
  const onEscapeKeydown = React.useCallback((event) => {
    if (event.key === 'Escape') {
      onEscape()
    }
  }, [onEscape])
  React.useEffect(() => {
    document.addEventListener('keydown', onEscapeKeydown, false)
    return () => {
      document.removeEventListener('keydown', onEscapeKeydown, false)
    }
  }, [onEscapeKeydown])
}
