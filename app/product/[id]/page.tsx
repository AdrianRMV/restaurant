import Image from 'next/image';

const SingleProduct = () => {
    return (
        <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row">
            {/* IMAGE CONTAINER  */}
            <div className="">
                <Image src="" alt="" fill className="object-contain" />
            </div>
            {/* TEXT CONTAINER */}
            <div className=""></div>
        </div>
    );
};

export default SingleProduct;
