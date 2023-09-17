import Link from 'next/link';

const Footer = () => {
    return (
        <div className="h-12 md:h-16 p-4 lg:px-10 xl:px-20 text-red-500 flex items-center justify-between ">
            <Link href={'/'} className="font-bold text-xl">
                THE BEAR
            </Link>
            <Link
                href="https://github.com/AdrianRMV"
                className="text-sm uppercase font-bold text-center"
            >
                Adrian Ramirez
            </Link>
            <p className="text-sm md:text-base">ALL RIGHTS RESERVED.</p>
        </div>
    );
};

export default Footer;
