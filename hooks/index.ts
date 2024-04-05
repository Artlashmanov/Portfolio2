import exp from "constants";
import { useEffect, useState } from "react";

const getWindowWith = () => {
    const {innerWidth: windowWidth } = typeof window !== 'undefined'
    ? window
    : { innerWidth: 0}

    return { windowWidth }

};

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(getWindowWith());

    const handleResize = () => setWindowWidth(getWindowWith);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {windowWidth, handleResize};
}

export const useMediaQuery = (maxWidth: number) => {
    const {windowWidth: {windowWidth}, handleResize} = useWindowWidth();
    const [isMedia, setIsMedia] = useState(false);

    useEffect(() => {
       

        if(windowWidth <= maxWidth) {
            setIsMedia(true);
        } else {
            setIsMedia(false);
        }
    }, [handleResize, maxWidth, windowWidth]);

    return isMedia;
}
