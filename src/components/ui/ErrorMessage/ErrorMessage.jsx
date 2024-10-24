import { Box, Typography } from "@mui/material";
import React from "react";

export default function ErrorMessage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="auto"
    >
      <Typography variant="h6">
        An error occurred - try refreshing the page
      </Typography>
    </Box>
  );
}
