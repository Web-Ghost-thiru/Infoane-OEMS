import { Box, Typography } from "@mui/material";

const PageNotFound = () => {
  return (
    <Box
      sx={{
        height: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" color="error" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="subtitle1">
        The page you're looking for doesn't exist.
      </Typography>
    </Box>
  );
};

export default PageNotFound;
