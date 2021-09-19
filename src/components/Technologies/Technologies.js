import React from 'react';
import { DiFirebase, DiReact, DiPhotoshop } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <br />
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      J'ai eu l'occasion de découvrir et pratiquer différentes technos qui aujourd'hui construisent mon stack qui continue de s'étoffer chaque jour. Si le Front-End et le Back-End sont primordiaux, j'aime également faire de la veille en regardant ce qui se fait à droite puis un coup à gauche pour ainsi satisfaire mon affect pour l'UX/UI.
    </SectionText>
    <List>
    <ListItem>
        <DiReact size="3rem"></DiReact>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML, CSS, Javascript, Jquery, Bootstrap, Tailwind, React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            PHP, MySQL, Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPhotoshop size="3rem"></DiPhotoshop>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Adobe XD, Photoshop, Illustrator, Indesign
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
