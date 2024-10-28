import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
};

export function CreateTax({ title = 'Create Tax' }: Props) {
  return (
    <Stack spacing={2}> {/* Add spacing to Stack for better layout */}
      <Typography variant="h4">{title}</Typography>

      <Box
        component="form"
        sx={{
          mt: 5,
          width: 1,
          borderRadius: 2,
          bgcolor: 'background.paper', // Use default background color or theme color
          p: 3, // Added padding for the form
          boxShadow: 1, // Optional: add a little shadow for better UI
        }}
      >
        <TextField
          label="Tax Name"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }} // Margin bottom for spacing
        />
        <TextField
          label="Rate (%)"
          variant="outlined"
          fullWidth
          required
          type="number"
          sx={{ mb: 2 }} // Margin bottom for spacing
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }} // Margin bottom for spacing
        />
        <TextField
          label="Category"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }} // Margin bottom for spacing
        />
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </Box>
    </Stack>
  );
}
