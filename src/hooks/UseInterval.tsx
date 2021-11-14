import { useEffect, useRef } from 'react';

const UseInterval = (callback: any, delay: number | null) => {
    const savedCallback = useRef<() => void | null>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            if (typeof savedCallback?.current !== 'undefined') {
                savedCallback.current();
            }
        };
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

export default UseInterval;
