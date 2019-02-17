import { useEffect } from 'react';

const useOnClickOutside = (ref, callback) => {
  const onClick = event => !ref.current.contains(event.target) && callback(event);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [ref]);
};

export default useOnClickOutside;
