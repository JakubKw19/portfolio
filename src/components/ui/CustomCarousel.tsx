import React, { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface CustomCarouselProps {
    children: React.ReactNode[]
    index: number;
}

function CustomCarousel({ children, index }: CustomCarouselProps) {
    const autoplay = useRef(Autoplay({ delay: 6000 }));

    useEffect(() => {
        autoplay.current.stop();

        const timer = setTimeout(() => {
            autoplay.current.play();
        }, index * 1000);

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <Carousel opts={{ loop: true }} plugins={[autoplay.current]}>
            <CarouselContent>
                {
                    children.map((child) => (
                        <CarouselItem>{child}</CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default CustomCarousel;
