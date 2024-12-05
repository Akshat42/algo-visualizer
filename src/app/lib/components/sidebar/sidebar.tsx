'use client';
import { IconMenu3 } from '@tabler/icons-react';
import NavLinkList from '@constants/sidebar.constants';
import React from 'react';
import SidebarMenuItem from './sidebar-item/sidebar-menu-item';
import { useSidebarStore } from 'lib/store/sidebar.store';
import { motion } from 'motion/react';

const Sidebar: React.FC = () => {
    const { isSideBarOpen } = useSidebarStore();

    return (
        <motion.aside
            layout
            style={{ display: isSideBarOpen ? 'block' : 'none' }}
            className={'h-full min-w-40 w-[15vw] z-20 absolute'}
        >
            <div className="bg-gray-800 text-white overflow-auto pt-14 h-full">
                {NavLinkList.map((navCategory) => {
                    return (
                        <div className="p-3 border-t-4 border-gray-600 ">
                            <div className="flex gap-2 p-1 items-center">
                                <IconMenu3 stroke={2} />
                                <h2 className="text-2xl font-bold">
                                    {navCategory.headerText}
                                </h2>
                            </div>
                            {navCategory.subMenu.map((subMenuItem) => {
                                return (
                                    <SidebarMenuItem menuItem={subMenuItem} />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </motion.aside>
    );
};

export default Sidebar;
