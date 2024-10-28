import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { varAlpha } from 'src/theme/styles';
import { DashboardContent } from 'src/layouts/dashboard';
import { useState } from 'react';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
};

// Sample initial tax data for demonstration; replace this with actual data passed via props or context
const initialTaxData = {
  name: '',
  rate: 0,
  description: '',
  category: '',
};

export function EditTax({ title = 'Edit Tax' }: Props) {
  const [taxData, setTaxData] = useState(initialTaxData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTaxData((prev) => ({
      ...prev,
      [name]: name === 'rate' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call to save data)
    console.log('Updated Tax Data:', taxData);
    // Navigate back or show a success message after saving
  };

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4">{title}</Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 5,
          width: 1,
          borderRadius: 2,
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
          border: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
          p: 3, // Added padding for the form
        }}
      >
        <TextField
          label="Tax Name"
          name="name"
          value={taxData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }} // Margin bottom for spacing
        />
        <TextField
          label="Rate (%)"
          name="rate"
          value={taxData.rate}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          type="number"
          sx={{ mb: 2 }} // Margin bottom for spacing
        />
        <TextField
          label="Description"
          name="description"
          value={taxData.description}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }} // Margin bottom for spacing
        />
        <TextField
          label="Category"
          name="category"
          value={taxData.category}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }} // Margin bottom for spacing
        />
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </DashboardContent>
  );
}
