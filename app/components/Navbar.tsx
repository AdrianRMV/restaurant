import Link from 'next/link';
import Menu from './Menu';
import CartIcon from './CartIcon';
import Image from 'next/image';
import UserLinks from './UserLinks';

const user = false;

const Navbar = () => {
    return (
        <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-4 xl:px-40">
            {/* LEFT LINKS */}
            <div className="hidden md:flex gap-4 flex-1">
                <Link href="/">Homepage</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/">Contact</Link>
            </div>

            {/* LOGO */}
            <div className="text-xl md:font-bold flex-1 md:text-center">
                <Link href="/">The Bear</Link>
            </div>

            {/* MOBILE MENU */}
            <div className="md:hidden">
                <Menu />
            </div>

            {/* RIGHT LINKS */}
            <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
                <div className="md:absolute top-2 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 p-1 rounded-md">
                    <Image src="/phone.png" alt="" width={20} height={20} />
                    <span>612 3482 563</span>
                </div>
                <UserLinks />
                <CartIcon />
            </div>
        </div>
    );
};

export default Navbar;
