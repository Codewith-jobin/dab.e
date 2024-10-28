import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`${CONFIG.assetsDir}/assets/icons/navbar/${name}.svg`} />
);

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    subheader: 'Overview',
    items: [{ title: 'App', path: paths.dashboard.root, icon: ICONS.dashboard }],
  },
  /**
   * Management
   */
  {
    subheader: 'Seller Hub',
    items: [
      { title: 'Orders', path: paths.dashboard.two, icon: ICONS.invoice },
      {
        title: 'Products',
        path: paths.dashboard.group.five,
        icon: ICONS.product,
        children: [
          { title: 'All Orders', path: paths.dashboard.group.five },
          { title: 'Five', path: paths.dashboard.group.five },
          { title: 'Six', path: paths.dashboard.group.six },
        ],
      },
      {
        title: 'User',
        path: paths.dashboard.user.root,
        icon: ICONS.user,
        children: [
          { title: 'All Users', path: paths.dashboard.user.root },
          { title: 'Create', path: paths.dashboard.user.create },
          { title: 'Edit', path: paths.dashboard.user.edit },
        ],
      },
      {
        title: 'Invoice',
        path: paths.dashboard.invoice.root,
        icon: ICONS.invoice,
        children: [
          { title: 'List', path: paths.dashboard.invoice.root },
          { title: 'Create', path: paths.dashboard.invoice.create },
          { title: 'Edit', path: paths.dashboard.invoice.edit },
        ],
      },
      {
        title: 'tax',
        path: paths.dashboard.tax.root,
        icon: ICONS.invoice,
        children: [
          { title: 'Taxlist', path: paths.dashboard.tax.root },
          { title: 'TaxCreate', path: paths.dashboard.tax.create },
          { title: 'TaxEdit', path: paths.dashboard.tax.edit },
        ],
      },
    ],
  },
];
