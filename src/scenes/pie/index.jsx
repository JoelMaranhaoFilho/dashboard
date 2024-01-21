import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import { useEffect, useState } from 'react';
import { getCandles } from "../../DataService";

const Pie = () => {
  
  const [symbol, setSymbol] = useState("BTCUSDT");

  const [interval, setInterval] = useState("1m");

  const [data, setData] = useState([]);

  useEffect(() => {
    getCandles(symbol, interval)
      .then(data => setData(data))
      .catch(err => alert(err.response ? err.response.data : err.message))
  }, [symbol, interval])

  function onSymbolChange(event) {
    setSymbol(event.target.value);
  }

  function onIntervalChange(event) {
    setInterval(event.target.value);
  }

  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
      <select onChange={onSymbolChange} value={symbol}>
        <option>BTCUSDT</option>
        <option>ETHUSDT</option>
        <option>ADAUSDT</option>
      </select>
      <select onChange={onIntervalChange} value={interval}>
        <option>1m</option>
        <option>15m</option>
        <option>1h</option>
        <option>1d</option>
      </select>
        <PieChart data={data}/>
      </Box>
    </Box>
  );
};

export default Pie;