import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ConstructionIcon from "@mui/icons-material/Construction";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import StoreIcon from "@mui/icons-material/Store";
import SchoolIcon from "@mui/icons-material/School";
import Header from "../../components/Header";
import LineChartone from "../../components/LineChartone";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import CustomBarChart from "../../components/PieChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" alignItems="flex-start">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD CATCH" subtitle="Educação Profissional e Desenvolvimento Econômico" />

        <Box>
          <Button
            sx={{
              border: '1px solid', color: colors.grey[100], 
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Baixar relatórios
          </Button>
        </Box>
      </Box>
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow={colors.degrade[100]}
        >
          <StatBox
            sx={{ color: colors.greenAccent[1100], fontSize: "26px" }}
            style={{ color: colors.grey[100] }}
            title="Construção civil"
            subtitle=""
            progress="0.75"
            increase="+14%"
            icon={
              <ConstructionIcon
                sx={{ color: colors.greenAccent[1200], fontSize: "50px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow={colors.degrade[100]}
        >
          <StatBox
            title="Mecanica"
            subtitle=""
            progress="0.50"
            increase="+21%"
            icon={
              <BuildCircleIcon
                sx={{ color: colors.greenAccent[1200], fontSize: "50px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow={colors.degrade[100]}
        >
          <StatBox
            title="Comércio"
            subtitle=""
            progress="0.30"
            increase="+5%"
            icon={
              <StoreIcon
                sx={{ color: colors.greenAccent[1200], fontSize: "50px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow={colors.degrade[100]}
        >
          <StatBox
            title="Aulas"
            subtitle=""
            progress="0.80"
            increase="+43%"
            icon={
              <SchoolIcon
                sx={{ color: colors.greenAccent[1200], fontSize: "50px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Demanda por Habilidades
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[1200] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box  m="1px 0 0 0">
            <CustomBarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]} // cor do box do quadro geral
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[100]}`}
            colors={colors.grey[1100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Quadro Geral
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
  <Box
    key={`${transaction.txId}-${i}`}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    borderBottom={`4px solid ${colors.primary[100]}`}
    p="15px"
  >
    <Box>
      <Typography
        color={colors.grey[100]} //Coloração do subtitle no Quadro Geral
        variant="h5"
        fontWeight="600"
      >
        {transaction.txId}
      </Typography>
      <Typography color={colors.grey[100]}>
        {transaction.user}
      </Typography>
    </Box>
    <Box color={colors.grey[1100]}>{transaction.date}</Box>
    <Box
      backgroundColor={colors.greenAccent[1200]} //Coloração do "botao" do quadro geral
      color={colors.grey[1200]}
      p="5px 10px"
      borderRadius="4px"
    >
      {i === 0 ? 600 : i === 1 ? 420 : i === 2 ? 380 : ''}
    </Box>
  </Box>
  ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Retenção de Emprego
          </Typography>

          <Box 
          height="250"
          mt="30px"
          >
            < LineChartone  isDashboard={true}/>
            </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Taxa de Conclusão de Cursos
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Habilidades por Região
          </Typography>
          <Box height="100px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
