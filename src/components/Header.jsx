import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box style={{ marginBottom: "2em" }}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0", fontSize: { xs: "2rem", md: "3rem", lg: "4rem" } }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={colors.grey[100]}
        sx={{
          fontSize: { xs: "1rem", md: "1.5rem", lg: "2rem" },
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
