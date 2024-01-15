import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Grid from "@mui/material/Grid";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Perguntas Frequentes" subtitle="Página de Perguntas Frequentes" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
             Como o Gráfico de Rosca representa a Taxa de Empregabilidade?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            O Gráfico de Rosca visualiza a Taxa de Empregabilidade usando fatias para mostrar categorias como "Empregados" e "Desempregados", proporcionando uma visão clara.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
             Qual a principal característica do Gráfico de Área Empilhada para a Taxa de Retenção no Emprego?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            O Gráfico de Área Empilhada destaca visualmente a Taxa de Retenção no Emprego ao longo do tempo, com camadas empilhadas que representam diferentes períodos.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
             Como o Gráfico de Barra Empilhada Horizontal retrata a Demanda por Habilidades?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             O Gráfico de Barra Empilhada Horizontal representa a Demanda por Habilidades usando barras que mostram intensidade, facilitando a análise da distribuição da demanda.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
             O que representa o Mapa de Calor (Heatmap) no contexto da Demanda por Habilidades por Região?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             O Mapa de Calor oferece uma visão geográfica da Demanda por Habilidades, colorindo regiões com diferentes intensidades, destacando padrões regionais.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
             Por que considerar a inclusão de um Mapa de Calor no Dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             A inclusão de um Mapa de Calor enriquece o Dashboard, proporcionando insights geográficos sobre a Demanda por Habilidades, facilitando decisões informadas.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
