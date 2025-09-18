import { useEffect, useState, type RefObject } from 'react';
type AnimateStep = 'in' | 'enter' | 'out';
export function useAnimate(ref: RefObject<HTMLElement>, className: string) {
    const [animate, setAnimate] = useState<AnimateStep>('in');
    useEffect(() => {
        let timerEnter: number;

        if (animate === 'in') {
            ref.current?.classList.add(className + '-in');
            ref.current?.classList.remove(className + '-enter');
            ref.current?.classList.remove(className + '-out');

            timerEnter = window.setTimeout(() => {
                setAnimate('enter');
            }, 300);
        } else if (animate === 'enter') {
            ref.current?.classList.remove(className + '-in');
            ref.current?.classList.add(className + '-enter');

            // timerEnter = window.setTimeout(() => {
            //     setAnimate('out');
            // }, 300);
        } else if (animate === 'out') {
            ref.current?.classList.remove(className + '-enter');
            ref.current?.classList.add(className + '-out');
        }

        return () => {
            clearTimeout(timerEnter);
        };
    }, [animate, className, ref]);
    return {
        triggerAnimateIn: () => setAnimate('in'),
        triggerAnimateEnter: () => setAnimate('enter'),
        triggerAnimateOut: () => setAnimate('out'),
    };
}
