import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

type PropTypes = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: PropTypes) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[300]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
