'use client';
import BurgerMenu from '@assets/icons/menu.svg';
import { IconMenu2 } from '@tabler/icons-react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="flex flex-row justify-start items-center bg-gray-800 p-1">
      <button className="p-3">
        <IconMenu2 stroke={2} color="white" />
      </button>
      <h1 className="text-xl lg:text-3xl text-white">ALGO VISUALIZER</h1>
    </header>
  );
};

export default Header;
