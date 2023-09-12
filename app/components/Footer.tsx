import Link from 'next/link';

const Footer = () => {
    return (
        <div className="h-12 md:h-16 p-4 lg:p-10 xl:p-20 text-red-500 flex items-center justify-between">
            <Link href={'/'} className="font-bold text-xl">
                THE BEAR
            </Link>
            <p>ALL RIGHTS RESERVED.</p>
        </div>
    );
};

export default Footer;
