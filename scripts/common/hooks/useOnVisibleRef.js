import { useRef, useEffect } from 'react';

const useOnVisibleRef = (
  callback,
  { once = true, root, rootMargin, threshold },
  dependencies = []
) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries.find(entry => entry.isIntersecting);
        if (entry) {
          once && observer.unobserve(element);
          callback();
        }
      },
      { root, rootMargin, threshold }
    );
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [...dependencies, ref]);
  return ref;
};

export default useOnVisibleRef;
