import {Box, Button, Typography} from "@mui/material";

import {ParallaxLayer} from "@react-spring/parallax";
import React from "react";
import AccordionCourse from "./AccordionCourse.tsx";
import {useNavigate} from "react-router-dom";

const AccordionLayerCourses = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const navigate = useNavigate();

  const handleChange =
      (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };

  return (
      <ParallaxLayer offset={1} speed={0}
                     style={{
                       zIndex: 1,
                       display: 'block',
                       justifyContent: 'center',
                       height: 'auto'
                     }}>
        <Box style={{
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          borderTop: '4px solid #AE0101',
          backgroundColor: '#FFFCEE',
          height: 'auto'
        }}>
          <Box sx={{borderBottom: {md: '4px solid #AE0101'}, width: {xs: '100%', md: '80%'}, p: {xs: 5, md: 10}}}>
            <AccordionCourse
                expanded={expanded}
                panel={"panel1"}
                handleChange={handleChange}
                title="A1"
                subtitle="Beginner Level – Start your German journey"
                firstTitle="Speaking"
                firstText="Learn how to introduce yourself, greet others, and engage in basic conversations about everyday life."
                secondTitle="Writing"
                secondText="Master writing simple sentences, filling out basic forms, and drafting short personal messages."
                textArray={[
                  "Basic understanding of German vocabulary and expressions.",
                  "Ability to greet, introduce yourself, and ask simple questions.",
                  "Confidence in handling simple dialogues in familiar situations.",
                  "Understanding simple written texts and instructions."
                ]}
            />
            <AccordionCourse
                expanded={expanded}
                panel={"panel2"}
                handleChange={handleChange}
                title="A2"
                subtitle="Elementary Level – Strengthen your basics"
                firstTitle="Speaking"
                firstText="Learn how to discuss your daily routines, express personal needs, and hold longer conversations about familiar topics."
                secondTitle="Writing"
                secondText="Develop skills in writing short paragraphs about yourself, your family, and your work, along with simple letters or emails."
                textArray={[
                  "Deeper understanding of essential vocabulary and grammar.",
                  "Ability to handle routine conversations in shops, restaurants, and travel situations.",
                  "Confidence in discussing past and future events.",
                  "Reading and understanding short stories or personal emails."
                ]}
            />
            <AccordionCourse
                expanded={expanded}
                panel={"panel3"}
                handleChange={handleChange}
                title="B1"
                subtitle="Intermediate Level – Expand your communication"
                firstTitle="Speaking"
                firstText="Learn to express opinions, describe personal experiences, and hold in-depth conversations about work, hobbies, and current events."
                secondTitle="Writing"
                secondText="Gain skills to write detailed texts about your experiences, opinions, and simple reports."
                textArray={[
                  "Ability to navigate more complex social interactions.",
                  "Confidence in expressing opinions and making requests.",
                  "Deeper understanding of grammar and vocabulary for everyday communication.",
                  "Reading comprehension for intermediate-level articles and literature."
                ]}
            />
            <AccordionCourse
                expanded={expanded}
                panel={"panel4"}
                handleChange={handleChange}
                title="B2"
                subtitle="Upper Intermediate – Achieve fluency"
                firstTitle="Speaking"
                firstText="Engage in detailed discussions about complex topics like politics, culture, and technology, with fluency and spontaneity."
                secondTitle="Writing"
                secondText="Master writing clear, well-structured essays, reports, and formal correspondence."
                textArray={[
                  "The ability to converse naturally in diverse situations.",
                  "Fluency in articulating arguments and opinions in professional and social settings.",
                  "Reading advanced articles, essays, and texts without much assistance.",
                  "Mastery of more nuanced grammar and advanced vocabulary."
                ]}
            />
            <AccordionCourse
                expanded={expanded}
                panel={"panel5"}
                handleChange={handleChange}
                title="C1"
                subtitle="Advanced Level – Master German proficiency"
                firstTitle="Speaking"
                firstText="Discuss abstract topics, make presentations, and use the language in academic and professional contexts fluently."
                secondTitle="Writing"
                secondText="Learn to write complex texts with a clear structure and argumentation, suitable for business or academic purposes."
                textArray={[
                  "Native-like fluency and understanding of sophisticated language structures.",
                  "Ability to communicate effectively in academic or professional environments.",
                  "Proficiency in reading and understanding complex texts such as research papers and professional reports.",
                  "Confidence in writing reports, articles, and academic papers."
                ]}
            />
          </Box>
          <Box
              sx={{
                borderBottom: '4px solid #AE0101',
                borderLeft: '4px solid #AE0101',
                backgroundColor: "#FFCC01",
                display: {xs: 'none', md: "flex"},
                flexDirection: 'column',
                paddingTop: '40px',
                zIndex: 1,
                width: "40%",
                padding: "50px",
                textAlign: "left",
                color: "#AE0101",
              }}
          >
            <Typography variant="h4" sx={{fontWeight: "bold"}}>
              Master the German Language at Your Own Pace
            </Typography>
            <Typography variant="h6" sx={{marginTop: "20px", color: '#000000'}}>
              Whether you're starting as a beginner or refining your advanced skills, our online German language school
              is
              here to support your journey.
            </Typography>
            <Button
                onClick={() => navigate("/register")}
                sx={{
                  my: 2,
                  color: '#FFCC01',
                  display: 'block',
                  backgroundColor: '#AE0101',
                  p: 1,
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#e1b016',
                    color: '#FFFCEE',
                    transition: '0.4s ease-in'
                  }
                }}
            >
              Register now!
            </Button>
          </Box>
        </Box>
        <Box
            sx={{
              borderTop: '4px solid #AE0101',
              borderBottom: '4px solid #AE0101',
              backgroundColor: "#FFCC01",
              display: {xs: 'flex', md: 'none'},
              flexDirection: 'column',
              paddingTop: '40px',
              zIndex: 1,
              width: "auto",
              padding: "50px",
              textAlign: "center",
              color: "#AE0101",
            }}
        >
          <Typography variant="h4"
                      sx={{fontWeight: 'bold', fontSize: {xs: '20px', sm: '24px', md: '30px', lg: '36px'}}}>
            Master the German Language at Your Own Pace
          </Typography>
          <Typography variant='h6' sx={{marginTop: '20px', color: '#000000'}}>
            Whether you're starting as a beginner or refining your advanced skills, our online German language school is
            here to support your journey.
          </Typography>
          <Button
              onClick={() => navigate("/register")}
              sx={{
                my: 2,
                color: '#FFCC01',
                display: 'block',
                backgroundColor: '#AE0101',
                p: 1,
                fontWeight: 600,
                fontSize: '1.1rem',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#e1b016',
                  color: '#FFFCEE',
                  transition: '0.4s ease-in'
                }
              }}
          >
            Register now!
          </Button>
        </Box>
      </ParallaxLayer>
  )
}

export default AccordionLayerCourses;