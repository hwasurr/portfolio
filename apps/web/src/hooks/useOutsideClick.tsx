import { RefObject, useEffect } from 'react';

export const useOutsideClick = <T extends Element>(
  ref: RefObject<T>,
  onOutsideClick: () => void,
): void => {
  useEffect(() => {
    const outsideClickHandler = (event: MouseEvent | TouchEvent): void => {
      if (ref.current && !ref.current.contains(event.target as any)) {
        onOutsideClick?.();
      }
    };
    document.addEventListener('mousedown', outsideClickHandler);
    document.addEventListener('touchstart', outsideClickHandler);
    return () => {
      document.removeEventListener('mousedown', outsideClickHandler);
      document.removeEventListener('touchstart', outsideClickHandler);
    };
  }, [onOutsideClick, ref]);
};
export default useOutsideClick;
