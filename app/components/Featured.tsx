'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { featuredProducts } from '../data';

const Featured = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        const handleMouseDown = (e: MouseEvent) => {
            isDown = true;
            startX = e.pageX;
            scrollLeft = slider!.scrollLeft;
        };

        const handleMouseLeave = () => {
            isDown = false;
        };

        const handleMouseUp = () => {
            isDown = false;
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX;
            const walk = x - startX;
            slider!.scrollLeft -= walk;
            startX = e.pageX; // Actualizamos startX para el siguiente movimiento
        };

        if (slider) {
            slider.addEventListener('mousedown', handleMouseDown);
            slider.addEventListener('mouseleave', handleMouseLeave);
            slider.addEventListener('mouseup', handleMouseUp);
            slider.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (slider) {
                slider.removeEventListener('mousedown', handleMouseDown);
                slider.removeEventListener('mouseleave', handleMouseLeave);
                slider.removeEventListener('mouseup', handleMouseUp);
                slider.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <div className="w-screen overflow-x-hidden text-red-500">
            {/* WRAPPER */}
            <div ref={sliderRef} className="inline-flex space-x-4 cursor-grab">
                {/* SINGLE ITEM */}
                {featuredProducts.map((item) => (
                    <div
                        key={item.id}
                        className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw]"
                    >
                        {/* IMAGE CONTAINER */}
                        {item.img && (
                            <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                                <Image
                                    src={item.img}
                                    alt=""
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        )}
                        {/* TEXT CONTAINER */}
                        <div className="flex-1 flex flex-col gap-4 items-center text-center">
                            <h1 className="text-lg font-bold uppercase">
                                {item.title}
                            </h1>
                            <p className="p-4">{item.desc}</p>
                            <span className="text-xl font-bold">
                                ${item.price}
                            </span>
                            <button className="bg-red-500 text-white p-2 rounded-md transition duration-300 hover:bg-red-600">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;
