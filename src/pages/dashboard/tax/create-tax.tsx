import { Helmet } from 'react-helmet-async';

import Grid2 from '@mui/material/Unstable_Grid2';

import { CONFIG } from 'src/config-global';

import {  CreateTax } from 'src/sections/dashboard/tax/view/create-tax';


// ----------------------------------------------------------------------

const metadata = { title: `taxpage | Dashboard - ${CONFIG.appName}` };

export default function TaxPage() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <CreateTax/>
    </>
  );
}
