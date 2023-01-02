import {useEffect} from 'react'

export function stickyBlock(blockSelector, stickyClass, stickyOffSet, ) {
  const block = document.querySelector(blockSelector)
  const blockHeight = block && block.offsetHeight
  const windowHeight = window.outerHeight
  if (blockHeight) {
    const isSticky = windowHeight - (blockHeight + stickyOffSet) > 0
    isSticky ? block.classList.add(stickyClass) : block.classList.remove(stickyClass)
  }
}

const useSticky = (itemsList,blockSelector, stickyClass = '', stickyOffSet = 0, ) => {
  useEffect(() => {
    if (blockSelector && itemsList)
    stickyBlock(blockSelector, stickyClass, stickyOffSet)
  }, [itemsList, blockSelector, stickyOffSet, stickyClass])
}

export default useSticky

