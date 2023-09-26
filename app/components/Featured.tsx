'use client';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import Image from 'next/image';
import { ProductType } from '../types/types';

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/products', {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Fail!');
    }

    return res.json();
};

const Featured = async () => {
    const featuredProducts: ProductType[] = await getData();
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            slidesPerView={1}
            breakpoints={{
                //  >= 768px (md)
                768: {
                    slidesPerView: 2,
                },
                //  >= 1024px (lg)
                1024: {
                    slidesPerView: 3,
                },
            }}
            className="w-screen overflow-x-scroll text-red-500"
        >
            {/* WRAPPER */}
            <div className="w-max flex">
                {/* SINGLE ITEM */}
                {featuredProducts.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className="!w-screen !h-[60vh] !flex !flex-col !items-center !justify-around !p-4 hover:bg-fuchsia-50 transition-all duration-300 md:!w-[50vw] xl:!w-[33vw] xl:!h-[90vh] cursor-grab"
                    >
                        {/* IMAGE CONTAINER */}
                        {item.img && (
                            <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                                <Image
                                    src={item.img}
                                    alt=""
                                    fill
                                    className="object-contain relative"
                                />
                            </div>
                        )}
                        {/* TEXT CONTAINER */}
                        <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
                            <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                                {item.title}
                            </h1>
                            <p className="p-4 2xl:p-8">{item.desc}</p>
                            <span className="text-xl font-bold">
                                ${item.price}
                            </span>
                            <button className="bg-red-500 text-white p-2 rounded-md">
                                Add to Cart
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
    );
};

export default Featured;
