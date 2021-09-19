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
          Hey, moi c'est Quentin, un développeur Web Full Stack passionné par les nouvelles technologies, l'informatique ainsi que le monde de demain. Mon but étant de pouvoir y contribuer et y laisser ma pierre à l'édifice, en échangeant et transmettant ce qui m'anime au quotidien.
        </SectionText>
        <Button onClick={() => window.location = '#about'}>En Savoir Plus</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;