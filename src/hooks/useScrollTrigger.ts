import { useState, useEffect, useRef, RefObject } from "react";

interface UseScrollTriggerOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseScrollTriggerReturn<T extends HTMLElement> {
  ref: RefObject<T | null>;
  isInView: boolean;
  hasTriggered: boolean;
}

export function useScrollTrigger<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.3,
  rootMargin = "0px",
  triggerOnce = true,
}: UseScrollTriggerOptions = {}): UseScrollTriggerReturn<T> {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setHasTriggered(true);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView, hasTriggered };
}

export default useScrollTrigger;
