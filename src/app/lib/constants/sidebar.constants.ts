import { LinkProps } from 'next/link';

interface NavList {
  headerText: string;
  subMenu: {
    subMenuText: string;
    navLinks: NavLink[];
  }[];
}

interface NavLink {
  linkText: string;
  link: LinkProps['href'];
}

const NavLinkList: NavList[] = [
  {
    headerText: 'Sorts',
    subMenu: [
      {
        subMenuText: 'Logarithmic',
        navLinks: [
          {
            linkText: 'Quick Sort',
            link: '/sort/quick-sort',
          },
          {
            linkText: 'Merge Sort',
            link: '/sort/merge-sort',
          },
          {
            linkText: 'Heap Sort',
            link: '/sort/heap-sort',
          },
        ],
      },
      {
        subMenuText: 'Quadratic',
        navLinks: [
          {
            linkText: 'Bubble Sort',
            link: '/sort/bubble-sort',
          },
          {
            linkText: 'Selection Sort',
            link: '/sort/selection-sort',
          },
          {
            linkText: 'Insertion Sort',
            link: '/sort/insertion-sort',
          },
          {
            linkText: 'Genome Sort',
            link: '/sort/genome-sort',
          },
        ],
      },
      {
        subMenuText: 'Weird',
        navLinks: [
          {
            linkText: 'Bitonic Sort',
            link: '/sort/bitonic-sort',
          },
          {
            linkText: 'Radix Sort',
            link: '/sort/radix-sort',
          },
          {
            linkText: 'Shell Sort',
            link: '/sort/shell-sort',
          },
          {
            linkText: 'Genome Sort',
            link: '/sort/genome-sort',
          },
        ],
      },
    ],
  },
] as const;

export default NavLinkList;
