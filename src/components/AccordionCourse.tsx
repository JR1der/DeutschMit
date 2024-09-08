import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface AccordionCourseProps {
  expanded: string | false;
  panel: string;
  handleChange: (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => void;
  title: string;
  subtitle: string;
  firstTitle: string;
  firstText: string;
  secondTitle: string;
  secondText: string;
  textArray: string[];
}

const AccordionCourse: React.FC<AccordionCourseProps> = ({
                                                           expanded,
                                                           panel,
                                                           handleChange,
                                                           title,
                                                           subtitle,
                                                           firstTitle,
                                                           firstText,
                                                           secondTitle,
                                                           secondText,
                                                           textArray,
                                                         }) => {
  return (
      <Accordion expanded={expanded === panel} defaultExpanded onChange={handleChange(panel)}
                 style={{borderRadius: '5px', border: "1px solid #FFD700", marginBottom: '10px'}}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{p: '10px', pl: {xs: '20px', md: '30px'}}}
        >
          <Typography
              className='text-left font-semibold text-dark-red '
              variant="h5"
                      sx={{
                        fontSize: {xs: '16px', sm: '20px', md: '22px', lg: '24px'},
                        width: {xs: '20%', sm: '15%', md: '10%', lg: '7%'},
                        textAlign: 'left',
                        fontWeight: '500',
                        color: '#AE0101'
                      }}>{title}</Typography>
          <Typography variant="h6"
                      sx={{
                        textAlign: 'left',
                        fontSize: {xs: '14px', sm: '15px', md: '16px', lg: '18px'},
                        fontWeight: '400',
                        color: '#AE0101'
                      }}>{subtitle}</Typography>
        </AccordionSummary>
        <AccordionDetails
            sx={{
              borderTop: "1px solid #FFD700",
              padding: "20px",
            }}
        >
          <Box sx={{display: {xs: "block", md: "flex"}, justifyContent: "space-between", mb: 2}}>
            <Box>
              <Typography variant="h6" sx={{
                fontSize: {xs: '16px', sm: '20px', md: '22px', lg: '24px'},
                textAlign: {xs: 'center', sm: 'left'},
                color: "#AE0101",
                mb: 1
              }}>
                {firstTitle}
              </Typography>
              <Typography variant="body2"
                          sx={{fontSize: {xs: '12px', sm: '16px', md: '18px', lg: '20px'}, textAlign: 'left'}}>
                {firstText}
              </Typography>
            </Box>
            <Box sx={{ml: {md: 2}}}>
              <Typography variant="h6" sx={{
                fontSize: {xs: '16px', sm: '20px', md: '22px', lg: '24px'},
                textAlign: {xs: 'center', sm: 'left'},
                marginTop: {xs: 3, md: 0},
                color: "#AE0101",
                mb: 1
              }}>
                {secondTitle}
              </Typography>
              <Typography variant="body2"
                          sx={{fontSize: {xs: '12px', sm: '16px', md: '18px', lg: '20px'}, textAlign: 'left'}}>
                {secondText}
              </Typography>
            </Box>
          </Box>
          <Typography
              variant="h5"
              sx={{
                fontSize: {xs: '16px', sm: '20px', md: '22px', lg: '24px'},
                color: "#AE0101",
                textAlign: "center",
                mb: 3
              }}
          >
            What you will acquire
          </Typography>
          <Box sx={{
            display: {xs: "block", md: "flex"},
            alignItems: 'center',
            justifyContent: {xs: 'center', md: "space-between"}
          }}>
            <Box>
              {textArray.map((text: string, index: number) => (
                  <Box key={index} sx={{display: "flex", mb: 1}}>
                    <CheckCircleIcon sx={{color: "#AE0101", mr: 1, height: {xs: '16px', sm: '20px', md: '24px'}}}/>
                    <Typography variant="body2" sx={{
                      fontSize: {xs: '12px', sm: '16px', md: '18px', lg: '20px'},
                      textAlign: 'left'
                    }}>{text}</Typography>
                  </Box>
              ))}
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
  )
}

export default AccordionCourse;