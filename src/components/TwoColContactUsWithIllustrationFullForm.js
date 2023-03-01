/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/mail.jpg";
import desktop from "images/learn.jpg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

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

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-blue-400`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({
  subheading = "Contact",
  expHeading = "Experience",
  heading = (
    <>
      {" "}
      Feel free to <span tw="text-blue-400">get in touch</span>
      <wbr /> with me.
    </>
  ),
  experienceTxt = (
    <>
      {" "}
      I have a knack for <wbr />{" "}
      <span tw="text-blue-400">learning new things.</span>
    </>
  ),
  description = (
    <>
      I enjoy learning and working with cutting edge technologies to further
      improve my skillset. I keep up with daily industry updates via
      subscription to newsletters like <span tw="text-blue-400">TLDR</span> and
      blogs like <span tw="text-blue-400">Medium</span>. In addition to the
      technologies listed below, I have experience building AI software, working
      with and building containers using <span tw="text-blue-400">Docker</span>,
      cloud hosting and storage using <span tw="text-blue-400">AWS</span>,
      reactive programming using <span tw="text-blue-400">RxJS</span> and DOM
      manipulation libraries such as <span tw="text-blue-400">JQuery</span>. I
      also have experience working with <span tw="text-blue-400">GSAP</span>,{" "}
      <span tw="text-blue-400">Styled Components</span>,{" "}
      <span tw="text-blue-400">Framer Motion</span> and{" "}
      <span tw="text-blue-400">Twin Macro</span> which were used to build this
      site.{" "}
    </>
  ),
  submitButtonText = "Send",
  formAction = "https://formspree.io/f/mrgdnoak",
  formMethod = "POST",
  textOnLeft = true,
  experience = false,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      {!experience ? (
        <section id="contact"></section>
      ) : (
        <section id="experience"></section>
      )}
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={!experience ? EmailIllustrationSrc : desktop} />{" "}
          {/*Image here*/}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{!experience ? subheading : expHeading}</Subheading>
            <Heading>{!experience ? heading : experienceTxt}</Heading>
            <Description>{!experience ? null : description}</Description>
            {!experience && (
              <Form action={formAction} method={formMethod}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
                <Input type="text" name="name" placeholder="Name" required />
                <Input
                  type="text"
                  name="subject"
                  placeholder="Company (Optional)"
                />
                <Textarea name="message" placeholder="Message" required />
                <SubmitButton type="submit">{submitButtonText}</SubmitButton>
              </Form>
            )}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
