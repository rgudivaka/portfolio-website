import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! <br />
        My Name is Rishi
      </SectionTitle>
      <SectionText>
        I am a recent Northwestern University Computer Science and economics graduate aspiring to become a fullstack developer.  
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/rishi-g-74ab97124'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;