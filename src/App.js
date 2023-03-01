import Hero from "./components/TwoColumnWithFeaturesAndTestimonial";
import About from "./components/TwoColSingleFeatureWithStats2";
import Portfolio from "./components/PortfolioTwoCardsWithImage";
import React from "react";
import "tailwindcss/lib/css/preflight.css";
import AnimationRevealPage from "components/helpers/AnimationRevealPage";
import Chart from "./components/Chart.js";
import Radial from "components/Radial";
import Contact from "./components/TwoColContactUsWithIllustrationFullForm";
import Footer from "./components/MiniCenteredFooter";
import "./styles.css";

const App = ({
  experience = (
    <>
      I have a knack for <wbr /> <span>learning new things</span>
    </>
  ),
}) => {
  return (
    <AnimationRevealPage>
      <Hero />
      <About />
      <Contact experience={true} heading={experience} />
      <div className="pieCharts">
        <Radial
          type="Framework"
          skillOne="ReactJS"
          valOne={50}
          skillTwo="Angular 6+"
          valTwo={40}
          skillThree="NextJS"
          valThree={10}
        />
        <Radial
          type="Preprocessor"
          skillOne="PostCSS (Tw)"
          valOne={60}
          skillTwo="Sass"
          valTwo={30}
          skillThree="LESS"
          valThree={10}
        />
        <Radial
          type="Database"
          skillOne="MongoDB"
          valOne={60}
          skillTwo="Firebase"
          valTwo={30}
          skillThree="SQL Server"
          valThree={10}
        />
      </div>
      <Chart />

      <Portfolio />
      <Contact />
      <Footer />
    </AnimationRevealPage>
  );
};

export default App;
