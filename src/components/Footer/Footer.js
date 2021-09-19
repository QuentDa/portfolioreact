import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Me Contacter</LinkTitle>
          <LinkItem href="tel:0682054339">06.82.05.43.39</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:deandradeq@gmail.com">deandradeq@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Faites ce que vous aimez, aimez ce que vous faites.</Slogan>
        </CompanyContainer>

        <SocialIcons href="https://github.com/quentda">
          <AiFillGithub size="3rem"/>
        </SocialIcons>

        <SocialIcons href="https://www.linkedin.com/in/quentin-de-andrade-911611156/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
