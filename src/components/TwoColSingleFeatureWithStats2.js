/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import StatsIllustrationSrc from "images/stats-illustration.svg";

import icon from "../images/idea.jpg";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import InstagramIcon from "@mui/icons-material/Instagram";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);
const Link = styled(PrimaryLinkBase)`
  ${tw`text-lg`}
  svg {
    ${tw`ml-0 w-0 h-0`}
  }
`;

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

export default ({
  subheading = "About",
  heading = (
    <>
      I turn ideas
      <wbr /> <span tw="text-blue-400"> into reality.</span>
    </>
  ),
  description = (
    <>
      My history of building basic web apps goes as far back as 6th grade. I
      began programming on a high level in 2021, when I started the{" "}
      <Link
        tw="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium"
        href="https://portfoliosite123.s3.amazonaws.com/Nucamp.pdf"
      >
        Nucamp Web Development Fundamentals Program
      </Link>
      . This laid out a solid foundation for many of the fundamental concepts I
      would continue to build on, before attending the 10 month{" "}
      <Link
        tw="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium"
        href="https://portfoliosite123.s3.amazonaws.com/MIT.pdf"
      >
        MIT MERN Stack bootcamp
      </Link>
      . Fast forward to today- and I have had some exciting opportunities,
      working on an app focused on the complex issue of mental health awareness
      in the workplace and freelance projects. My experiences have allowed me to
      build a strong knowledge of the JavaScript language and both the MERN and
      MEAN tech stacks.
    </>
  ),

  idea = icon,
  imageSrc = StatsIllustrationSrc,
  imageCss = null,
  imageContainerCss = null,

  imageInsideDiv = true,

  textOnLeft = false,
}) => {
  const actions = [
    {
      icon: <GitHubIcon />,
      name: "Github",
      href: "https://github.com/abishop0894",
    },
    {
      icon: <InstagramIcon />,
      name: "Instagram",
      href: "https://instagram.com/Modernistic.io",
    },
    {
      icon: <LinkedInIcon />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/alex-bishop-16214797/",
    },
  ];

  return (
    <Container>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss}>
          {imageInsideDiv ? (
            <Image imageSrc={idea} css={imageCss} />
          ) : (
            <img src={imageSrc} css={imageCss} alt="" />
          )}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <SpeedDial
              direction="right"
              ariaLabel="SpeedDial basic example"
              sx={{
                position: "initial",
                marginTop: "2vh",
                bottom: 16,
                right: 16,
              }}
              icon={<SpeedDialIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  href={action.href}
                />
              ))}
            </SpeedDial>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
