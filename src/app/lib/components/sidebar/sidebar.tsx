'use client';
import { IconMenu3 } from '@tabler/icons-react';
import NavLinkList from '@constants/sidebar.constants';
import React from 'react';
import SidebarMenuItem from './sidebar-item/sidebar-menu-item';
import { useSidebarStore } from 'lib/store/sidebar.store';

const Sidebar: React.FC = () => {
  const { isSideBarOpen } = useSidebarStore();
  return (
    isSideBarOpen && (
      <aside className="h-full w-[15vw] absolute">
        <div className="h-full bg-gray-800 text-white overflow-auto pt-14">
          {NavLinkList.map((navCategory) => {
            return (
              <div className="p-3 border-t-4 border-gray-600">
                <div className="flex gap-2 p-1">
                  <IconMenu3 stroke={2} />
                  <h2 className="text-2xl font-bold">
                    {navCategory.headerText}
                  </h2>
                </div>
                {navCategory.subMenu.map((subMenuItem) => {
                  return <SidebarMenuItem menuItem={subMenuItem} />;
                })}
              </div>
            );
          })}
        </div>
      </aside>
    )
  );
};

export default Sidebar;
