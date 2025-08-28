import React, { useEffect, useState } from "react";
import { Button } from "./button";

interface CustomCarouselProps {
    children: React.ReactNode[];
    index: number;
    variant?: string;
}

function CustomCarousel({ children, index, variant }: CustomCarouselProps) {
    const [currentChild, setCurrentChild] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        const timer = setTimeout(() => {
            interval = setInterval(() => {
                if (variant === 'popup') return;
                setCurrentChild((prev) => (prev === children.length - 1 ? 0 : prev + 1));
            }, 6000);
        }, index * 1000);


        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [children.length, index, variant]);

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
            {variant === 'popup' &&
                <>
                    <Button
                        className="absolute top-1/2 left-2 border-white"
                        variant="black"
                        onClick={() => setCurrentChild((prev) => (prev === 0 ? children.length - 1 : prev - 1))}
                    >
                        <svg className="embla__button__svg" viewBox="0 0 532 532">
                            <path
                                fill="currentColor"
                                d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                            />
                        </svg>
                    </Button>
                    <Button
                        className="absolute top-1/2 right-2 border-white"
                        variant="black"
                        onClick={() => setCurrentChild((prev) => (prev === children.length - 1 ? 0 : prev + 1))}
                    >
                        <svg className="embla__button__svg" viewBox="0 0 532 532">
                            <path
                                fill="currentColor"
                                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                            />
                        </svg>
                    </Button>
                </>
            }

        </div>
    );
}

export default CustomCarousel;
