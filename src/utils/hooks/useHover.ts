import { useEffect, useState } from "react";
import { RefObject } from "react";

const useHover = (
    refElement: any,
    callbackEnter: Function,
    callbackLeave: Function
) => {
    const [hovered, setHovered] = useState(false);
    const enter = () => {
        setHovered(true);
        callbackEnter();
    };
    const leave = () => {
        setHovered(false);
        callbackLeave();
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (hovered) {
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [hovered]);

    useEffect(() => {
        if (refElement) {
            refElement.current.addEventListener("mouseenter", enter);
            refElement.current.addEventListener("mouseleave", leave);
        }

        return () => {
            if (refElement.current) {
                refElement.current.removeEventListener("mouseenter", enter);
                refElement.current.removeEventListener("mouseleave", leave);
            }
        };
    }, []);

    return [hovered];
};

export default useHover;
