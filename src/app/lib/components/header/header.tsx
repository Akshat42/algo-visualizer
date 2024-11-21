'use client';
import { IconMenu2 } from '@tabler/icons-react';
import { useSidebarStore } from 'lib/store/sidebar.store';

const Header: React.FC = () => {
    const { toggleSidebar } = useSidebarStore();
    return (
        <header className="flex flex-row justify-start items-center bg-gray-800 p-1">
            <button className="p-3" onClick={toggleSidebar}>
                <IconMenu2 stroke={2} color="white" />
            </button>
            <h1 className="text-xl font-medium lg:text-3xl text-white">
                ALGO VISUALIZER
            </h1>
        </header>
    );
};

export default Header;
