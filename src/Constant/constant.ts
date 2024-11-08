interface MenuItemsTypes {
  title: string;
  url: string;
  cName: string;
}

export const MENUITEMS: MenuItemsTypes[] = [
  {
    title: 'Swap',
    url: '/swap',
    cName: 'nav-links',
  },
  {
    title: 'Liquidity',
    url: '/liquidity',
    cName: 'nav-links',
  },
  {
    title: 'Index',
    url: '/buy-index',
    cName: 'nav-links',
  },
  {
    title: 'Stake',
    url: '/staking',
    cName: 'nav-links',
  },
  {
    title: 'Loans',
    url: '/loans',
    cName: 'nav-links',
  },
];
