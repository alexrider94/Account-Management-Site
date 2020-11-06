import React from 'react';

import { Box, Typography, Link } from '@material-ui/core';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
        Hyojin An (Alexrider94)
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Footer() {
  return (
    <Box mt={8}>
      <Copyright />
    </Box>
  );
}

