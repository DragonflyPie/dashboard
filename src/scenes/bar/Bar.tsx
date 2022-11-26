import { Box } from "@mui/material";
import React from "react";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";
import { mockBarData } from "../../data/mockData";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Barchart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
