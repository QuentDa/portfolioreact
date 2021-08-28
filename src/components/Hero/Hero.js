import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenue Sur <br />
          Mon Portfolio
        </SectionTitle>

        <SectionText>
          Je suis un jeune Développeur Web autodidacte apprenant de jour en jour à se développer ainsi qu'à mettre à profit ses compétences pour un résultat autant satisfaisant que convaincant.
        </SectionText>
        <Button onClick={() => window.location = 'https://google.com'}>En Savoir Plus</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;