import { create } from 'zustand';

interface SidebarState {
  isSideBarOpen: boolean;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isSideBarOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSideBarOpen: !state.isSideBarOpen })),
}));
