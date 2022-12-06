import { useEffect } from "react";

const useMouseLeaveAlerter = (ref: any, callback: Function) => {
    useEffect(() => {
        function handleMouseLeave(event: any) {
            if (ref.current !== event.target) {
                callback();
            }
        }
        document.addEventListener("mouseout", handleMouseLeave);
        return () => {
            document.removeEventListener("mouseout", handleMouseLeave);
        };
    }, [ref, callback]);
};

export default useMouseLeaveAlerter;
