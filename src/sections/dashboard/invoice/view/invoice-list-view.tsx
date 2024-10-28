import { Box } from "@mui/material"

import { InvoiceStatusCards } from "../invoice-status-cards"

export function InvoiceListView () {
  return(
    <Box sx={{px: 5}}>
      INVOICE LIST VIEW PARENT

      <InvoiceStatusCards />
    </Box>
  )
}