// import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
// import { CONFIG } from 'src/config-global';
// import { InvoiceListView } from 'src/sections/dashboard/invoice/view';
=======
import { CONFIG } from 'src/config-global';

import { InvoiceListView } from 'src/sections/dashboard/invoice/view';
>>>>>>> 514dce4a27b655ee6b8bdbdd9884bc37a5ab3297

// // ----------------------------------------------------------------------

// const metadata = { title: `Invoice | Dashboard - ${CONFIG.appName}` };

<<<<<<< HEAD
// export default function Page() {
//   return (
//     <>
//       <Helmet>
//         <title> {metadata.title}</title>
//       </Helmet>

//       <InvoiceListView />      
//     </>
//   );
// }
=======
export default function Page() :JSX.Element {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      {/* <InvoiceListView />       */}
    </>
  );
}
>>>>>>> 514dce4a27b655ee6b8bdbdd9884bc37a5ab3297
