import React, { useEffect, useState } from "react";

interface CustomCarouselProps {
    children: React.ReactNode[];
    index: number; // total number of slides
}

function CustomCarousel({ children, index }: CustomCarouselProps) {
    const [currentChild, setCurrentChild] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        const timer = setTimeout(() => {
            interval = setInterval(() => {
                setCurrentChild((prev) => (prev === children.length - 1 ? 0 : prev + 1));
            }, 6000);
        }, index * 1000);


        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [children.length, index]);

    return (
        <div className="w-full h-full overflow-hidden relative">
            <div
                className="w-full h-full flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentChild * 100}%)` }}
            >
                {children.map((child, i) => (
                    <div key={i} className="w-full flex-shrink-0">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomCarousel;
