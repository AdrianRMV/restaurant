import Link from 'next/link';

const Footer = () => {
    return (
        <div className="flex flex-col items-center pb-2 md:pb-0">
            <div className="h-12 md:h-16 p-4 lg:px-10 xl:px-20 text-red-500 flex items-center justify-between w-full">
                <Link href={'/'} className="font-bold text-xl">
                    THE BEAR
                </Link>
                <Link
                    href="https://github.com/AdrianRMV"
                    className="hidden md:block text-sm uppercase font-bold text-center text-red-500"
                >
                    Adrian Ramirez
                </Link>
                <p className="text-sm md:text-base">ALL RIGHTS RESERVED.</p>
            </div>
            <Link
                href="https://github.com/AdrianRMV"
                className="text-sm md:hidden uppercase font-bold text-center text-red-500"
            >
                Adrian Ramirez
            </Link>
        </div>
    );
};

export default Footer;
