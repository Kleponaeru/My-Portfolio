// CustomScrollbar.js
import React, { useEffect, useState } from 'react';

const CustomScrollbar = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollWidth(scrolled);
        };

        handleScroll(); // Initial calculation
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div className="scroll-line" style={{ width: `${scrollWidth}%` }} />;
};

export default CustomScrollbar;