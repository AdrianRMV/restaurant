'use client';

import { useEffect, useState } from 'react';

type Props = {
    price: number;
    id: string;
    options?: {
        title: string;
        additionalPrice: number;
    }[];
};

const Price = ({ price, id, options }: Props) => {
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        setTotal(
            quantity *
                (options?.length
                    ? price + options[selected].additionalPrice
                    : price)
        );
    }, [quantity, selected, options, price]);

    return (
        <div className=" flex flex-col gap-4">
            <h2 className="text-2xl font-bold">${total}</h2>
            {/* OPTIONS CONTAINER */}
            <div className="flex gap-4">
                {options?.length &&
                    options?.map((option, index) => (
                        <button
                            key={option.title}
                            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
                            style={{
                                background:
                                    selected === index
                                        ? 'rgb(248 113 113)'
                                        : 'white',
                                color:
                                    selected == index
                                        ? 'white'
                                        : 'rgb(239 68 68)',
                            }}
                            onClick={() => setSelected(index)}
                        >
                            {option.title}
                        </button>
                    ))}
            </div>
            {/* QUANTITY AND ADD BOTTON CONTAINER */}
            <div className="flex justify-between items-center">
                {/* QUANTITY */}
                <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
                    <span>Quantity</span>
                    <div className="flex gap-4 items-center">
                        <button
                            onClick={() =>
                                setQuantity(
                                    quantity === 1 ? quantity : quantity - 1
                                )
                            }
                        >
                            {'<'}
                        </button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity((prev) => prev + 1)}>
                            {'>'}
                        </button>
                    </div>
                </div>
                {/* CART BUTTON */}
                <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-400">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Price;
