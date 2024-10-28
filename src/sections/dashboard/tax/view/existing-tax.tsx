import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import { varAlpha } from 'src/theme/styles';

import { DashboardContent } from 'src/layouts/dashboard';
import { paths } from 'src/routes/paths';

type Props = {
  title?: string;
};

// Sample tax data
const taxData = [
  { name: 'GST', rate: 1.5, description: 'Tax on property', category: 'Local', lastUpdated: '2024-09-12' },
  { name: 'VAT', rate: 20, description: 'Consumption tax', category: 'Federal', lastUpdated: '2024-10-01' },
  { name: 'CUT', rate: 7, description: 'Tax on goods', category: 'State', lastUpdated: '2024-08-15' },
  { name: 'SST', rate: 1.5, description: 'Tax on food', category: 'Local', lastUpdated: '2024-09-12' },
  { name: 'NVU', rate: 1.5, description: 'Tax on traveling', category: 'Local', lastUpdated: '2024-09-12' },
];

export function Taxtable({ title = 'tax' }: Props) {
  const navigate=useNavigate();
  const handleclickedit=(path:string)=>{
    navigate(path)
  }
    
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h6" gutterBottom>{title}</Typography> {/* Changed variant to h6 */}

      <Box
        sx={{
          mt: 5,
          width: 1,
          borderRadius: 2,
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
          border: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
          p: 1, // Reduced padding
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="normal">Tax Name</TableCell> {/* Reduced padding */}
                <TableCell padding="normal">Rate (%)</TableCell>
                <TableCell padding="normal">Description</TableCell>
                <TableCell padding="normal">Category</TableCell>
                <TableCell padding="normal">Last Updated</TableCell>
                <TableCell padding="normal">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {taxData.map((tax) => (
                <TableRow key={tax.name}>
                  <TableCell padding="normal">{tax.name}</TableCell>
                  <TableCell padding="normal">{tax.rate}</TableCell>
                  <TableCell padding="normal">{tax.description}</TableCell>
                  <TableCell padding="normal">{tax.category}</TableCell>
                  <TableCell padding="normal">{tax.lastUpdated}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button variant="outlined" color="primary" size="small" onClick={()=>handleclickedit(paths.dashboard.tax.edit)}>
                        Edit
                      </Button>
                      <Button variant="outlined" color="primary" size="small">
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </DashboardContent>
  );
}

