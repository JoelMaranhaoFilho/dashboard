import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";


const Geography = () => {
  
  return (
    <div id="mapacalor">
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border="10%"
        borderRadius="10px"
      >
        <GeographyChart />
      </Box>
    </Box>
    </div>
  );
};

export default Geography;
