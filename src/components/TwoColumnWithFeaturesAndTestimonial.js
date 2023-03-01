/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, {
  NavLinks,
  NavLink,
  PrimaryLink,
} from "components/headers/light.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import {
  Container,
  ContentWithVerticalPadding,
} from "components/misc/Layouts.js";
import styled from "styled-components";

const Header = tw(HeaderBase)`max-w-none`;
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(
  Column
)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(
  SectionHeading
)`text-left text-primary-900 leading-snug xl:text-6xl`;
const Description = tw(
  SectionDescription
)`mt-4 lg:text-base text-gray-700 max-w-lg`;
const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 inline-block w-56 tracking-wide text-center py-5`;
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;
const Image = tw.img`max-w-full w-96 rounded-t sm:rounded relative z-20`;
const Link = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center  text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;

export default ({
  description = (
    <>
      I create modern, sophisticated web applications using the most in-demand
      languages, libraries, and frameworks. Currently, I’m a React Developer at{" "}
      <Link href="https://joinjoyfully.com/encouragement">Joyfully</Link>.{" "}
    </>
  ),
  imageSrc = "https://cdn.discordapp.com/attachments/980168318151450717/1050593158532186222/Facetune_08-12-2022-21-00-18.jpg",
  primaryButtonUrl = "#contact",
  primaryButtonText = "Say Hello",
  buttonRounded = true,
}) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#experience">Experience</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink
        css={buttonRoundedCss}
        href="https://portfoliosite123.s3.amazonaws.com/Al+Bishop+Resume.pdf"
      >
        Resume
      </PrimaryLink>
    </NavLinks>,
  ];
  return (
    <>
      <Header links={navLinks} />
      <Container>
        <ContentWithVerticalPadding>
          <Row>
            <TextColumn>
              <Subheading>Hi, my name is</Subheading>
              <Heading>
                <span
                  style={{ color: "rgb(36 62 99 / var(--tw-text-opacity))" }}
                >
                  Alex Bishop.
                </span>{" "}
                <br />
                <span tw="text-blue-400">Full-Stack Web Developer.</span>
              </Heading>
              <Description tw="font-semibold text-lg text-gray-600">
                {description}
              </Description>
              <PrimaryButton
                as="a"
                href={primaryButtonUrl}
                css={buttonRoundedCss}
              >
                {primaryButtonText}
              </PrimaryButton>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={imageSrc} />
              </ImageContainer>
            </ImageColumn>
          </Row>
        </ContentWithVerticalPadding>
        <div id="about"></div>
      </Container>
    </>
  );
};
