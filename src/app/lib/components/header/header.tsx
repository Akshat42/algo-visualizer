import BurgerMenu from '@assets/icons/menu.svg';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex flex-row justify-start items-center bg-slate-900">
      <Link href="/" className="p-3">
        <Image
          src={BurgerMenu}
          alt="burger_menu"
          className="bg-slate-200 lg:w-8"
        />
      </Link>
      <h1 className="text-xl lg:text-3xl	text-white">ALGO VISUALIZER</h1>
    </header>
  );
};

export default Header;
