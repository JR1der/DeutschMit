import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {ParallaxLayer} from "@react-spring/parallax";
import React from "react";

const AccordionLayerCourses = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
      (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };

  return (
      <ParallaxLayer offset={1} speed={0}
                     style={{
                       zIndex: 1,
                       display: 'flex',
                       justifyContent: 'center',
                       borderTop: '4px solid #AE0101',
                       backgroundColor: '#FFFCEE'
                     }}>
        <Box sx={{width: '80%', p: 10}}>
          <Accordion expanded={expanded === 'panel1'} defaultExpanded onChange={handleChange('panel1')}
                     style={{borderRadius: '5px', border: "1px solid #FFD700", marginBottom: '10px'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{p: '10px', pl: '30px'}}
            >
              <Typography variant="h5"
                          sx={{width: '5%', textAlign: 'start', fontWeight: '500', color: '#AE0101'}}>A1</Typography>
              <Typography variant="h6"
                          sx={{fontWeight: '400', color: '#AE0101'}}>For complete
                beginners</Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                  borderTop: "1px solid #FFD700",
                  padding: "20px",
                }}
            >
              <Box sx={{display: "flex", justifyContent: "space-between", mb: 2}}>
                <Box>
                  <Typography variant="h6" sx={{textAlign: 'left', color: "#AE0101", mb: 1}}>
                    Speaking
                  </Typography>
                  <Typography variant="body2" sx={{textAlign: 'left'}}>
                    Lorem Ipsum is simply dummy asdasdasd text of. Lorem Ipsum is simply
                    dummy text of. Lorem Ipsum is sasdasimply dummy text of. Lorem Ipsum
                    is simply dummy text of.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{textAlign: 'left', color: "#AE0101", mb: 1}}>
                    Writing
                  </Typography>
                  <Typography variant="body2" sx={{textAlign: 'left'}}>
                    Lorem Ipsum is simply dummy asdasdasd text of. Lorem Ipsum is simply
                    dummy text of. Lorem Ipsum is sasdasimply dummy text of. Lorem Ipsum
                    is simply dummy text of.
                  </Typography>
                </Box>
              </Box>
              <Typography
                  variant="h5"
                  sx={{color: "#AE0101", textAlign: "center", mb: 3}}
              >
                What you will acquire
              </Typography>
              <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Box>
                  {["Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply", "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply", "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply", "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply"].map((text, index) => (
                      <Box key={index} sx={{display: "flex", alignItems: "center", mb: 1}}>
                        <CheckCircleIcon sx={{color: "#AE0101", mr: 1}}/>
                        <Typography variant="body2">{text}</Typography>
                      </Box>
                  ))}
                </Box>
                <Box
                    sx={{
                      border: "2px solid #FFD700",
                      borderRadius: '5px',
                      width: "50%",
                      height: "120px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                >
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                     sx={{border: '1px solid #FFD700', borderRadius: '5px', marginBottom: '10px'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{p: '10px', pl: '30px'}}
            >
              <Typography variant="h5"
                          sx={{width: '5%', textAlign: 'start', fontWeight: '500', color: '#AE0101'}}>A2</Typography>
              <Typography variant="h6"
                          sx={{fontWeight: '400', color: '#AE0101'}}>Pre-Intermediate</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{borderTop: '1px solid #FFD700', p: '20px'}}>
              <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 3}}>
                <Box>
                  <Typography variant='h6' sx={{textAlign: 'left', color: "#AE0101", mb: 1}}>Speaking</Typography>
                  <Typography variant='body2' sx={{textAlign: 'left'}}>Lorem Ipsum is simply dummy asdasdasd text of.
                    Lorem Ipsum is simply
                    dummy text of. Lorem Ipsum is sasdasimply dummy text of. Lorem Ipsum
                    is simply dummy text of.</Typography>
                </Box>
                <Box>
                  <Typography variant='h6' sx={{textAlign: 'left', color: "#AE0101", mb: 1}}>Writing</Typography>
                  <Typography variant='body2' sx={{textAlign: 'left'}}>Lorem Ipsum is simply dummy asdasdasd text of.
                    Lorem Ipsum is simply
                    dummy text of. Lorem Ipsum is sasdasimply dummy text of. Lorem Ipsum
                    is simply dummy text of.</Typography>
                </Box>
              </Box>
              <Typography
                  variant="h5"
                  sx={{color: "#AE0101", textAlign: "center", mb: 3}}
              >
                What you will acquire
              </Typography>
              <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Box>
                  {["Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply", "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply", "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply", "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply"].map((text, index) => (
                      <Box key={index} sx={{display: "flex", alignItems: "center", mb: 1}}>
                        <CheckCircleIcon sx={{color: "#AE0101", mr: 1}}/>
                        <Typography variant="body2">{text}</Typography>
                      </Box>
                  ))}
                </Box>
                <Box
                    sx={{
                      border: "2px solid #FFD700",
                      borderRadius: '5px',
                      width: "50%",
                      height: "120px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                >
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                     style={{borderRadius: '5px', border: "1px solid #FFD700", marginBottom: '10px'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{p: '10px', pl: '30px'}}
            >
              <Typography variant="h5"
                          sx={{width: '5%', textAlign: 'start', fontWeight: '500', color: '#AE0101'}}>B1</Typography>
              <Typography variant="h6"
                          sx={{fontWeight: '400', color: '#AE0101'}}>Intermediate</Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                  borderTop: "1px solid #FFD700",
                  padding: "20px",
                }}
            >
              <Box sx={{display: "flex", justifyContent: "space-between", mb: 2}}>
                <Box>
                  <Typography variant="h6" sx={{textAlign: 'left', color: "#AE0101", mb: 1}}>
                    Speaking
                  </Typography>
                  <Typography variant="body2" sx={{textAlign: 'left'}}>
                    Lorem Ipsum is simply dummy asdasdasd text of. Lorem Ipsum is simply
                    dummy text of. Lorem Ipsum is sasdasimply dummy text of. Lorem Ipsum
                    is simply dummy text of.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{textAlign: 'left', color: "#AE0101", mb: 1}}>
                    Writing
                  </Typography>
                  <Typography variant="body2" sx={{textAlign: 'left'}}>
                    Lorem Ipsum is simply dummy asdasdasd text of. Lorem Ipsum is simply
                    dummy text of. Lorem Ipsum is sasdasimply dummy text of. Lorem Ipsum
                    is simply dummy text of.
                  </Typography>
                </Box>
              </Box>
              <Typography
                  variant="h5"
                  sx={{color: "#AE0101", textAlign: "center", mb: 3}}
              >
                What you will acquire
              </Typography>
              <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Box>
                  {["Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply", "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply", "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply", "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply"].map((text, index) => (
                      <Box key={index} sx={{display: "flex", alignItems: "center", mb: 1}}>
                        <CheckCircleIcon sx={{color: "#AE0101", mr: 1}}/>
                        <Typography variant="body2">{text}</Typography>
                      </Box>
                  ))}
                </Box>
                <Box
                    sx={{
                      border: "2px solid #FFD700",
                      borderRadius: '5px',
                      width: "50%",
                      height: "120px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                >
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
                     style={{borderRadius: '5px', border: "1px solid #FFD700", marginBottom: '10px'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{p: '10px', pl: '30px'}}
            >
              <Typography variant="h5"
                          sx={{width: '5%', textAlign: 'start', fontWeight: '500', color: '#AE0101'}}>B2</Typography>
              <Typography variant="h6"
                          sx={{fontWeight: '400', color: '#AE0101'}}>Upper-Intermediate</Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                  borderTop: "1px solid #FFD700",
                  padding: "20px",
                }}
            >
              <Box sx={{display: "flex", justifyContent: "space-between", mb: 2}}>
                <Box>
                  <Typography variant="h6" sx={{textAlign: 'left', color: "#AE0101", mb: 1}}>
                    Speaking
                  </Typography>
                  <Typography variant="body2" sx={{textAlign: 'left'}}>
                    Lorem Ipsum is simply dummy asdasdasd text of. Lorem Ipsum is simply
                    dummy text of. Lorem Ipsum is sasdasimply dummy text of. Lorem Ipsum
                    is simply dummy text of.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{textAlign: 'left', color: "#AE0101", mb: 1}}>
                    Writing
                  </Typography>
                  <Typography variant="body2" sx={{textAlign: 'left'}}>
                    Lorem Ipsum is simply dummy asdasdasd text of. Lorem Ipsum is simply
                    dummy text of. Lorem Ipsum is sasdasimply dummy text of. Lorem Ipsum
                    is simply dummy text of.
                  </Typography>
                </Box>
              </Box>
              <Typography
                  variant="h5"
                  sx={{color: "#AE0101", textAlign: "center", mb: 3}}
              >
                What you will acquire
              </Typography>
              <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Box>
                  {["Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply", "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply", "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply", "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply"].map((text, index) => (
                      <Box key={index} sx={{display: "flex", alignItems: "center", mb: 1}}>
                        <CheckCircleIcon sx={{color: "#AE0101", mr: 1}}/>
                        <Typography variant="body2">{text}</Typography>
                      </Box>
                  ))}
                </Box>
                <Box
                    sx={{
                      border: "2px solid #FFD700",
                      borderRadius: '5px',
                      width: "50%",
                      height: "120px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                >
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}
                     style={{borderRadius: '5px', border: "1px solid #FFD700", marginBottom: '10px'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{p: '10px', pl: '30px'}}
            >
              <Typography variant="h5"
                          sx={{width: '5%', textAlign: 'start', fontWeight: '500', color: '#AE0101'}}>C1</Typography>
              <Typography variant="h6"
                          sx={{fontWeight: '400', color: '#AE0101'}}>Advanced</Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                  borderTop: "1px solid #FFD700",
                  padding: "20px",
                }}
            >
              <Box sx={{display: "flex", justifyContent: "space-between", mb: 2}}>
                <Box>
                  <Typography variant="h6" sx={{textAlign: 'left', color: "#AE0101", mb: 1}}>
                    Speaking
                  </Typography>
                  <Typography variant="body2" sx={{textAlign: 'left'}}>
                    Lorem Ipsum is simply dummy asdasdasd text of. Lorem Ipsum is simply
                    dummy text of. Lorem Ipsum is sasdasimply dummy text of. Lorem Ipsum
                    is simply dummy text of.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{textAlign: 'left', color: "#AE0101", mb: 1}}>
                    Writing
                  </Typography>
                  <Typography variant="body2" sx={{textAlign: 'left'}}>
                    Lorem Ipsum is simply dummy asdasdasd text of. Lorem Ipsum is simply
                    dummy text of. Lorem Ipsum is sasdasimply dummy text of. Lorem Ipsum
                    is simply dummy text of.
                  </Typography>
                </Box>
              </Box>
              <Typography
                  variant="h5"
                  sx={{color: "#AE0101", textAlign: "center", mb: 3}}
              >
                What you will acquire
              </Typography>
              <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Box>
                  {["Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply", "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply", "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply", "Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply"].map((text, index) => (
                      <Box key={index} sx={{display: "flex", alignItems: "center", mb: 1}}>
                        <CheckCircleIcon sx={{color: "#AE0101", mr: 1}}/>
                        <Typography variant="body2">{text}</Typography>
                      </Box>
                  ))}
                </Box>
                <Box
                    sx={{
                      border: "2px solid #FFD700",
                      borderRadius: '5px',
                      width: "50%",
                      height: "120px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                >
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </ParallaxLayer>
  )
}

export default AccordionLayerCourses;