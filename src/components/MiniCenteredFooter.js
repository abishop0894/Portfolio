/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";

import { ReactComponent as IgIcon } from "../images/instagram.svg";
import { ReactComponent as GithubIcon } from "../images/github-icon.svg";
import { ReactComponent as LinkedInIcon } from "../images/linkedin-icon.svg";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;

const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
export default () => {
  return (
    <Container style={{ marginTop: "20vh", backgroundColor: "#60a5fa" }}>
      <Content>
        <Row>
          <LogoContainer>
            <LogoText>
              <i>AB</i>
            </LogoText>
          </LogoContainer>
          <SocialLinksContainer>
            <SocialLink href="https://github.com/abishop0894">
              <GithubIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/alex-bishop-16214797/">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href="https://instagram.com/Modernistic.io">
              <IgIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText style={{ color: "white" }}>&copy; 2022</CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
