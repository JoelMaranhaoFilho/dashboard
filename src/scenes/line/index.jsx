import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChartone from "../../components/LineChartone";

const Line = () => {
  
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChartone />
      </Box>
    </Box>
  );
};

export default Line;
