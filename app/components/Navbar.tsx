import Link from 'next/link';
import Menu from './Menu';

const Navbar = () => {
    return (
        <div>
            {/* LOGO */}
            <div>
                <Link href="/">Massimo</Link>
            </div>
            {/* MOBILE MENU */}
            <div>
                <Menu />
            </div>
        </div>
    );
};

export default Navbar;
