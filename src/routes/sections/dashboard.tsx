import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { Taxtable } from 'src/sections/dashboard/tax/view/existing-tax';

import { AuthGuard } from 'src/auth/guard';

// import { OverviewAppView } from 'src/sections/overview/app/view';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/dashboard/index'));
const PageTwo = lazy(() => import('src/pages/dashboard/two'));
const PageThree = lazy(() => import('src/pages/dashboard/three'));
const PageFour = lazy(() => import('src/pages/dashboard/four'));
const PageFive = lazy(() => import('src/pages/dashboard/five'));
const PageSix = lazy(() => import('src/pages/dashboard/six'));
const ExistingTax= lazy(()=> import ('src/pages/dashboard/tax/existing-tax'))
const CreateTax = lazy(()=> import ('src/pages/dashboard/tax/create-tax'))
const EditTax= lazy(()=>import('src/pages/dashboard/tax/edit-tax'))

// const UsersPage = lazy(() => import('src/pages/dashboard/user/index'));

// const InvoicePage = lazy(() => import('src/pages/dashboard/invoice/list'));

// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { element: <IndexPage />, index: true },
      { path: 'two', element: <PageTwo /> },
      { path: 'three', element: <PageThree /> },
      {
        path: 'group',
        children: [
          { element: <PageFour />, index: true },
          { path: 'five', element: <PageFive /> },
          { path: 'six', element: <PageSix /> },
        ],
      },
      // {
      //   path: 'user',
      //   children: [
      //     { element: <UsersPage />, index: true },
      //     { path: 'create', element: <>user create</> },
      //     { path: 'edit', element: <>user edit</> },
      //   ],
      // },
      // {
      //   path: 'invoice',
      //   children: [
      //     { element: <InvoicePage />, index: true },
      //     { path: 'create', element: <>user create</> },
      //     { path: 'edit', element: <>user edit</> },
      //   ],
      // },
      {
      path: 'tax',
      children: [
        // { element: </>, index: true },
        { path: 'create-tax', element: <CreateTax/> },
        { path: 'existing-tax', element: <ExistingTax/> },
        { path: 'edit-tax', element: <EditTax/> },
        
      ],
    },
    ],
  },
];
