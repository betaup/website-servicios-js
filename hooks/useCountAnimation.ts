import { useState, useEffect, useRef } from 'react';

interface UseCountAnimationOptions {
    end: number;
    duration?: number;
    startOnView?: boolean;
}

export const useCountAnimation = ({ end, duration = 2000, startOnView = true }: UseCountAnimationOptions) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!startOnView || hasAnimated) {
            // If not using intersection observer or already animated, start immediately
            if (!hasAnimated) {
                animateCount();
            }
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        animateCount();
                        setHasAnimated(true);
                    }
                });
            },
            {
                threshold: 0.3, // Trigger when 30% of element is visible
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [hasAnimated, startOnView]);

    const animateCount = () => {
        const startTime = Date.now();
        const startValue = 0;

        const animate = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation (easeOutExpo)
            const easeProgress = progress === 1
                ? 1
                : 1 - Math.pow(2, -10 * progress);

            const currentCount = Math.floor(startValue + (end - startValue) * easeProgress);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure we end at exact value
            }
        };

        requestAnimationFrame(animate);
    };

    return { count, ref: elementRef };
};
