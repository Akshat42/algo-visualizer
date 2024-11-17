import { IconMenu3, IconX } from '@tabler/icons-react';
import NavLinkList from '@constants/sidebar.constants';
import Link, { LinkProps } from 'next/link';
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className=" h-full flex-[0.3]">
      <div className="h-full pt-1 px-3 bg-gray-800 text-white">
        <div className="flex justify-between pb-2 border-b-2 text-xl lg: text-3xl">
          <button className="h-full">
            <IconX stroke={2} width={32} height={32} />
          </button>
          <div className="flex flex-grow justify-center">
            <p className="text-center">ALGORITHMS</p>
          </div>
        </div>
        {NavLinkList.map((navCategory) => {
          return (
            <div className="p-3">
              <div className="flex gap-2 p-2">
                <IconMenu3 stroke={2} />
                <h2 className="text-2xl font-bold">{navCategory.headerText}</h2>
              </div>
              {navCategory.subMenu.map((subMenuItem) => {
                return (
                  <div className="p-3 pb-0">
                    <h3 className="text-xl text-slate-400 pb-2 font-semibold">
                      {subMenuItem.subMenuText}
                    </h3>
                    <ul>
                      {subMenuItem.navLinks.map((navLink) => {
                        return (
                          <li>
                            <Link
                              href={navLink.link}
                              className="text-lg text-slate-100	font-medium p-2 pb-3"
                            >
                              {navLink.linkText}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
