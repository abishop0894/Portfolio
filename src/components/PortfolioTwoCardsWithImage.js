/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import AnimationRevealPage from "./helpers/AnimationRevealPage";
import react from "../images/reactproj.svg";
import node from "../images/node.svg";
import firebase from "../images/firebase.svg";
import aws from "../images/aws.svg";
import mui from "../images/mui.svg";
import ng from "../images/angular.svg";
import HTML from "../images/html.svg";
import CSS from "../images/css.svg";
import mongo from "../images/mongo.svg";
import Ts from "../images/typescriptproj.svg";

import js from "../images/jsproj.svg";
import Csharp from "../images/csharp.svg";
import bootstrap from "../images/bootstrap.svg";
import windows from "../images/windows.svg";
import "../styles.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const HeadingColumn = styled(Column)((props) => [
  tw`w-full xl:w-5/12`,
  props.textOnLeft ? tw`xl:order-first` : tw`xl:order-last xl:ml-12 xl:mr-0`,
]);
const CardColumn = tw(
  Column
)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 xl:last:ml-auto`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`mt-4 xl:text-left leading-tight`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`,
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardCompany = tw.div`text-blue-400 font-bold text-lg`;
const CardType = tw.div`font-semibold text-sm text-gray-600`;
const Icons = tw.section`flex flex-row items-center gap-1`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;

/*
  {
      imageSrc:
        "https://cdn.discordapp.com/attachments/1047259322171785236/1047632345517273159/paulieworld.png",
      project: "Paulieworld Powerwashing",
      type: "Freelance",
      icons: [react, node, mui],
      description:
        "Paulieworld Powerwashing is a simple project I built for a client. It features a gallery using Swiperjs, review section pulling and randomizing the most recent, highest ranking reviews from google business API, and a contact section.  Libraries used to build components of this project include material UI, and bootstrap. This projects server is hosted on Heroku.",
      technologies: "ReactJS, NodeJS, Express, Bootstrap, Material UI",
      projectUrl: "https://www.paulieworldpowerwashing.com/",
      repoUrl: "https://github.com/abishop0894/paulieworld-powerwashing",
    },



*/

export default ({
  subheading = "Portfolio",
  headingHtmlComponent = (
    <>
      I've worked on <span tw="text-blue-400">some cool projects.</span>
    </>
  ),

  linkText = "View More Projects",

  viewText = "View Project",
  textOnLeft = false,
}) => {
  const [show, setShow] = React.useState(false);

  const cards = [
    {
      imageSrc:
        "https://cdn.discordapp.com/attachments/1047259322171785236/1080567157202628768/image.png",
      project: "moBot AI",
      type: "Professional",
      icons: [react, node, mui],
      description:
        "Mobot is an AI chatbot I built for the development company I co-own, Modernistic Technology. Users are able to query GPT-3 via text prompt or voice-to-text prompt, and adjust temperature for a wider variety of responses. It's fully optimized for all devices. Mobot will soon be migrated to GPT-4.",
      technologies: "ReactJS, NodeJs, Express, Mui",
      projectUrl: "https://www.mobotai.app",
      repoUrl: "https://github.com/abishop0894/mobot-mern",
    },
    {
      imageSrc:
        "https://cdn.discordapp.com/attachments/1047259322171785236/1047631226648924190/Joyfully.png",
      project: "Joyfully",
      type: "Professional",
      icons: [react, node, firebase, aws],
      description: (
        <>
          Joyfully is a mental health awareness app that connects users with
          trained staff that can relate to their problems. Its built with React,
          Express, Node, and Firebase. I work primarily on the client end
          alongside a very small group of developers, building and maintaining
          user facing components. Notable customers of Joyfully include{" "}
          <span tw="text-blue-400">Viacom</span>, and the{" "}
          <span tw="text-blue-400">London Stock Exchange Group</span>.
        </>
      ),
      technologies: "ReactJS, NodeJs, Express, Firebase, Redux, AWS amplify",
      projectUrl: "http://bit.ly/joinjoyfullyfree",
    },
  ];

  const projects = [
    {
      imageSrc:
        "https://cdn.discordapp.com/attachments/1047259322171785236/1047632345517273159/paulieworld.png",
      project: "Paulieworld Powerwashing",
      type: "Freelance",
      icons: [react, node, mui, aws],
      description:
        "Paulieworld Powerwashing is a simple project I built for a client. It features a gallery using Swiperjs, review section pulling and randomizing the most recent, highest ranking reviews from google business API, and a contact section.  Libraries used to build components of this project include material UI, and bootstrap. This projects server is hosted on Heroku.",
      technologies: "ReactJS, NodeJS, Express, Bootstrap, Material UI, AWS S3",
      projectUrl: "https://www.paulieworldpowerwashing.com/",
      repoUrl: "https://github.com/abishop0894/paulieworld-powerwashing",
    },
    {
      imageSrc:
        "https://cdn.discordapp.com/attachments/1047259322171785236/1047633799808290926/3d.png",
      project: "3D Weather App",
      type: "Personal",
      icons: [react, HTML, bootstrap, CSS],
      description:
        "This project features a 3D interactive map imported from Mapbox API for react.  I added relevant code for 3D rendering, terrain, and a building layer. The weather data is being pulled from open weather API. Combining these 2 was a challenge initially, but it turned out to be a fruitful experience and one of my favorite builds.",
      technologies: "ReactJS, HTML, Bootstrap CSS",
      projectUrl: "https://lovely-tulumba-0dde76.netlify.app/",
      repoUrl: "https://github.com/abishop0894/AB-Maps",
    },
    {
      imageSrc:
        "https://cdn.discordapp.com/attachments/1047259322171785236/1047650034428166214/sitter.png",
      project: "Twitter Clone (Sitter)",
      type: "Personal",
      icons: [js, firebase, HTML, CSS, bootstrap],
      description:
        "Sitter is a Twitter clone, with full CRUD functionality integrated with Firebase. I started by creating a bare bones wire frame using mockingbird. Then, I built a mock-up for it using Figma. The App features both human and computer posts, and pulls and displays data from a news API. It's optimized for pc and mobile devices, and was built on vanilla JS.",
      technologies: "JavaScript, HTML, CSS, Bootstrap",
      mockup:
        "https://www.figma.com/file/LdxhWYcVS9br3d6rK59ppe/Twitter-Mockup-AB?node-id=0%3A1&t=vaxVtA4QZv9up3tj-1",
      projectUrl: "https://clever-meringue-3b7cee.netlify.app/",
      repoUrl:
        "https://github.com/Abishop0831/FED2207/tree/main/Projects/Twitter%20Clone",
    },
    {
      imageSrc:
        "https://cdn.discordapp.com/attachments/980168318151450717/1047658534428475412/image.png",
      project: "Full-Stack Bank App",
      type: "Personal",
      icons: [react, node, mongo, aws, bootstrap],
      description:
        "This was my final capstone project at the MIT bootcamp. Its a MERN stack application. This project gave me hands on experience building data abstraction layers with mongoDB. All data is persistent throughout sessions and can be viewed by the user. It's hosted from a public AWS S3 bucket. ",
      technologies: "ReactJS, NodeJS, Express, Bootstrap, MongoDB, AWS S3",
      projectUrl:
        "http://alexander-bishopfullstackbankingapplication.s3-website-us-east-1.amazonaws.com/",
      repoUrl: "https://github.com/abishop0894/capstone-frontend",
    },
    {
      imageSrc:
        "https://cdn.discordapp.com/attachments/1047259322171785236/1049190066829926440/rest_contries.png",
      project: "RxJS REST Countries",
      type: "Challenge",
      icons: [ng, Ts, bootstrap],
      description:
        "This is an advanced level Frontend Mentor challenge. This project gave me experience working with the observer design pattern using RxJS. The goal was to filter through a large dataset and grab relevant information. I used Postman to simulate API calls and get an idea of the structure. A behavior subject was used to subscribe to click events of the individual cards for the purpose of displaying relevant property values on the second page. This project is optimized for all devices.",
      technologies: "Angular, TypeScript, Bootstrap, RxJS",
      projectUrl: "https://fabulous-kitten-815500.netlify.app/",
      repoUrl: "https://github.com/abishop0894/rxjs-countries",
    },
    {
      imageSrc:
        "https://cdn.discordapp.com/attachments/1047259322171785236/1049191204157399111/space.png",
      project: "Space Tourism (Desktop)",
      type: "Challenge",
      icons: [ng, Ts, bootstrap],
      description:
        "This is an intermediate level Frontend Mentor challenge. It was built using Angular, TypeScript, and Bootstrap. The main idea was to create a desktop optimized application with Angular routing, that pulled data from a local JSON file. This required some changes to the default ts.config file settings to allow Angular to read JSON files directly.",
      technologies: "Angular, TypeScript, Bootstrap",
      projectUrl: "https://golden-tiramisu-091e1e.netlify.app/",
      repoUrl:
        "https://github.com/Abishop0831/FED2207/tree/main/Projects/11%20Space%20Tourism/my-app",
    },
    {
      imageSrc:
        "https://cdn.discordapp.com/attachments/1047259322171785236/1049139939696181279/bus_tracker.png",
      project: "MBTA Bus stop Simulator",
      type: "Personal",
      icons: [js, HTML, CSS],
      description:
        "This is a project built with Mapbox API that simulates the stops between the MIT and Harvard campuses. Coordinates were adjusted to be centered on the Cambridge, MA area.",
      technologies: "JavaScript, HTML, CSS",
      projectUrl: "https://ornate-blini-fa1664.netlify.app/",
      repoUrl: "https://github.com/abishop0894/MBTA-Bus-Tracker-Project",
    },
    {
      imageSrc:
        "https://cdn.discordapp.com/attachments/1047259322171785236/1049139060771389490/todo.png",
      project: "Vanilla JS To-do List",
      type: "Personal",
      icons: [js, HTML, CSS, bootstrap],
      description: "This is a simple To-do list I built with vanilla JS.",
      technologies: "JavaScript, HTML, CSS, Bootstrap",
      projectUrl: "https://wizardly-ardinghelli-9bd722.netlify.app/",
      repoUrl: "https://github.com/abishop0894/Todo-list-Vanilla-JS",
    },

    {
      imageSrc:
        "https://cdn.discordapp.com/attachments/1047259322171785236/1049341150726725643/Microsoft_.NET_logo.svg.png",
      project: "Calculator",
      type: "Personal",
      icons: [Csharp, windows],
      description:
        "This is a simple calculator I built using C#, and Windows Forms to solidify my fundamental knowledge of the .NET framework.",
      technologies: "C#, Windows Forms",
      repoUrl:
        "https://github.com/abishop0894/calculator-application-Csharp/blob/main/WinFormsApp1/Form1.cs",
    },

    {
      imageSrc:
        "https://cdn.discordapp.com/attachments/1047259322171785236/1049136409220493342/LeetCode_Sharing.png",
      project: "Code Challenges",
      icons: [HTML, CSS],
      type: "Personal",
      description:
        "This is a simple HTML document that features a handful of LeetCode, and Edabit coding challenges I've completed. Also included are step by step explanations of my solutions.",
      technologies: "HTML, CSS",
      projectUrl: "https://clever-pie-53c3e8.netlify.app/",
    },
  ];

  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn textOnLeft={textOnLeft}>
            <HeadingInfoContainer>
              <Subheading>{subheading}</Subheading>
              <HeadingTitle>{headingHtmlComponent}</HeadingTitle>
              <PrimaryLink onClick={() => setShow(true)}>
                {linkText} <ArrowRightIcon />
              </PrimaryLink>
            </HeadingInfoContainer>
          </HeadingColumn>

          {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  <CardHeader>
                    <CardCompany>{card.project}</CardCompany>
                    <CardType>{card.type}</CardType>
                  </CardHeader>

                  <Icons>
                    {card.icons.map((item) => (
                      <img src={item} alt="" />
                    ))}
                  </Icons>
                  <Accordion flush tw="mt-2">
                    <Accordion.Item eventKey={`${index}`}>
                      <Accordion.Header>
                        <h4 tw="font-semibold text-lg text-gray-600">
                          Description
                        </h4>
                      </Accordion.Header>

                      <Accordion.Body>
                        <h4 tw="font-semibold text-lg text-gray-600">
                          {card.description}
                        </h4>
                        <br />
                        <h4 tw="font-semibold text-lg text-gray-600">
                          Technologies: {card.technologies}
                        </h4>
                      </Accordion.Body>
                      <hr />
                    </Accordion.Item>
                  </Accordion>

                  <CardMeta></CardMeta>
                  <a href={card.projectUrl}>
                    <CardAction>{viewText}</CardAction>
                  </a>
                  {card.repoUrl && (
                    <a href={card.repoUrl}>
                      <CardAction>View Repository</CardAction>
                    </a>
                  )}
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>

      <Modal
        scrollable={true}
        show={show}
        fullscreen={true}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 tw="font-semibold text-xl text-white">Projects</h1>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AnimationRevealPage>
            <section className=" projBody">
              {projects.map((project, index) => (
                <Card style={{ width: "24rem" }}>
                  <CardImage imageSrc={project.imageSrc} />
                  <CardText>
                    <CardHeader>
                      <CardCompany>{project.project}</CardCompany>
                      <CardType>{project.type}</CardType>
                    </CardHeader>

                    <Icons>
                      {project.icons.map((item) => (
                        <img src={item} alt="" />
                      ))}
                    </Icons>
                    <Accordion flush tw="mt-2">
                      <Accordion.Item eventKey={`${index}`}>
                        <Accordion.Header>
                          <h4 tw="font-semibold text-lg text-gray-600">
                            Description
                          </h4>
                        </Accordion.Header>
                        <Accordion.Body>
                          <h4 tw="font-semibold text-lg text-gray-600">
                            {project.description}
                          </h4>
                          <br />
                          {project.mockup && (
                            <PrimaryLink
                              style={{ margin: 0 }}
                              href={project.mockup}
                            >
                              View Mockup
                            </PrimaryLink>
                          )}
                          <h4 tw="font-semibold text-lg text-gray-600">
                            Technologies: {project.technologies}
                          </h4>
                        </Accordion.Body>
                        <hr />
                      </Accordion.Item>
                    </Accordion>

                    <CardMeta>{/*icons */}</CardMeta>
                    {project.projectUrl && (
                      <a href={project.projectUrl}>
                        <CardAction>{viewText}</CardAction>
                      </a>
                    )}
                    {project.repoUrl && (
                      <a href={project.repoUrl}>
                        <CardAction>View Repository</CardAction>
                      </a>
                    )}
                  </CardText>
                </Card>
              ))}{" "}
            </section>{" "}
          </AnimationRevealPage>{" "}
        </Modal.Body>
      </Modal>
    </Container>
  );
};
