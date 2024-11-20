import { NavLinkItem } from '@constants/sidebar.constants';
import Link from 'next/link';

interface SidebarMenuItemProps {
  menuItem: NavLinkItem;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ menuItem }) => {
  return (
    <div className="p-3 pb-0">
      <h3 className="text-xl text-slate-400 pb-2 font-semibold">
        {menuItem.subMenuText}
      </h3>
      <ul>
        {menuItem.navLinks.map((navLink) => {
          return (
            <li key={navLink.linkText}>
              <Link
                href={navLink.link}
                className="text-lg text-slate-100	font-medium p-2 pb-3 hover:underline hover:text-slate-300"
              >
                {navLink.linkText}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarMenuItem;
