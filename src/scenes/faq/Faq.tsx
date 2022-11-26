import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" display="flex" flexDirection="column" gap="10px">
      <Header title="faq" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded disableGutters={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Test Question One
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            a, deserunt nobis voluptatem aliquid eos autem error, quam, aut hic
            maiores perspiciatis. Dolorem laborum nesciunt dolore ipsa labore
            officiis distinctio?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded disableGutters={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Test Question Two
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            a, deserunt nobis voluptatem aliquid eos autem error, quam, aut hic
            maiores perspiciatis. Dolorem laborum nesciunt dolore ipsa labore
            officiis distinctio?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded disableGutters={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Test Question Three
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            a, deserunt nobis voluptatem aliquid eos autem error, quam, aut hic
            maiores perspiciatis. Dolorem laborum nesciunt dolore ipsa labore
            officiis distinctio?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded disableGutters={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Test Question Four
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            a, deserunt nobis voluptatem aliquid eos autem error, quam, aut hic
            maiores perspiciatis. Dolorem laborum nesciunt dolore ipsa labore
            officiis distinctio?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded disableGutters={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Test Question Five
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            a, deserunt nobis voluptatem aliquid eos autem error, quam, aut hic
            maiores perspiciatis. Dolorem laborum nesciunt dolore ipsa labore
            officiis distinctio?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded disableGutters={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Test Question Six
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            a, deserunt nobis voluptatem aliquid eos autem error, quam, aut hic
            maiores perspiciatis. Dolorem laborum nesciunt dolore ipsa labore
            officiis distinctio?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
