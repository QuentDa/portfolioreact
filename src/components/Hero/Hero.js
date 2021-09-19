import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Quentin <br />
          De Andrade
        </SectionTitle>

        <SectionText>
          Développeur Web Full Stack <br /> UX/UI Design
        </SectionText>
        <Button onClick={() => window.location = 'https://google.com'}>En Savoir Plus</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;