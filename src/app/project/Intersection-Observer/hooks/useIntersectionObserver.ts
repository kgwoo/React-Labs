import {
  useRef,
  useState,
  useEffect,
  useCallback,
  MutableRefObject,
} from "react";

export type CallbackRef = (node: HTMLElement | null) => any;

export default function useInterscetionObserver(): [
  boolean | null,
  CallbackRef
] {
  const [isInViewPort, setIsInViewPort] = useState<boolean | null>(null);
  const target: MutableRefObject<HTMLElement | null> = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInViewPort(true);
          } else {
            setIsInViewPort(false);
          }
        });
      },
      {
        threshold: 0.8,
      }
    );

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target]);

  const setRef: CallbackRef = useCallback(
    (ele: HTMLElement | null) => {
      if (ele) {
        target.current = ele;
      }
    },
    [target]
  );

  return [isInViewPort, setRef];
}
