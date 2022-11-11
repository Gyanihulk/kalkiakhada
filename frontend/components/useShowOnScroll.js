import { useState } from 'react'
import useDocumentScrollThrottled from './useDocumentScrollThrottled'

export const useShowOnScroll = (
  defaultValue,
  { minScroll = 115, delay = 0 } = {},
  cb = null,
) => {
  const [show, setShow] = useState(defaultValue)

  useDocumentScrollThrottled(({ previousScrollTop, currentScrollTop }) => {
    const isScrollDown = previousScrollTop < currentScrollTop
    const isMinScrolled = currentScrollTop > minScroll

    if (cb) {
      cb({ previousScrollTop, currentScrollTop, isScrollDown, isMinScrolled })
    }

    setTimeout(() => {
      setShow(!(isScrollDown && isMinScrolled))
    }, delay)
  })

  return show
}

export default useShowOnScroll
