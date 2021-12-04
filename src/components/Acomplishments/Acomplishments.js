import React from 'react';
import {DiReact, DiCss3 } from 'react-icons/di';
import { GrNode} from 'react-icons/gr';
import { AiFillHtml5} from 'react-icons/ai';
import { FaPython} from 'react-icons/fa';
import { SiTailwindcss} from 'react-icons/si';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const Acomplishments = () => (
  <Section>
    <SectionTitle>Current Proficiencies</SectionTitle>
    <Boxes>
        <Box>
          <BoxNum><AiFillHtml5 size="3rem" /></BoxNum>
          <BoxText>Hmtl5</BoxText>
        </Box>
        <Box>
          <BoxNum><DiCss3 size="3rem" /></BoxNum>
          <BoxText>CSS</BoxText>
        </Box>
        <Box>
          <BoxNum><SiTailwindcss size="3rem" /></BoxNum>
          <BoxText>Tailwind</BoxText>
        </Box>
        <Box>
          <BoxNum><DiReact size="3rem" /></BoxNum>
          <BoxText>React</BoxText>
        </Box>
        <Box>
          <BoxNum><GrNode size="3rem" /></BoxNum>
          <BoxText>Node.js</BoxText>
        </Box>
        <Box>
          <BoxNum><FaPython size="3rem" /></BoxNum>
          <BoxText>Python</BoxText>
        </Box>
        
    </Boxes>
  </Section>
);

export default Acomplishments;
