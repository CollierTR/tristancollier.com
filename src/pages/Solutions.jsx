import Footer from "../componets/Footer";
import Nav from "../componets/Nav";
import SplitSection from "../componets/SplitSection";
import reputationManagementPic from "../assets/reputation-management.png";
import lineChart from "../assets/Take_your_business_to_the_next_level___1_-removebg-preview.png";
import customWebsitePic from "../assets/custom-website.png";

function Solutions() {
  return (
    <main>
      <Nav></Nav>
      <SplitSection
        title="Custom Websites"
        link={true}
        linkOrHref="/get-started"
        buttonText="Get Your Free Quote"
        imgWidth="500px"
        img={customWebsitePic}
        text="I use a data-driven approach to building websites. Everyone wants a website that looks good, but what you need is a website that brings and results. You need a website that converts. You need a website that multiplies your profit margin. I build websites with layouts and features that have proven version rates. I also into what make my clients websites more than a website I integrate tools for my clients that help drive their business to the next level. "
      ></SplitSection>
      <SplitSection
        img={lineChart}
        title="Business Growth Plans"
        link={true}
        imgWidth="450px"
        linkOrHref="/plans/monthly"
        buttonText="Compare Plans"
        flip={true}
        text="Having started my career in sales and getting to work my way up to a corporate position, I have the ability to see the big picture for my clients. Few people just need a website. If you are looking to increase sales, funnel leads, and push your business into the spotlight, my services may be what you need to take your business to the next level."
      ></SplitSection>
      {/* <SplitSection
        title="Custom Tooling"
        buttonText="Learn More"
        text="Having started my career in sales and getting to work my way up to a corporate position, I have the ability to see the big picture for my clients. Few people just need a website. If you are looking to increase sales, funnel leads, and push your business into the spotlight, my services may be what you need to take your business to the next level."
      ></SplitSection> */}
      <SplitSection
        title="Reputation Management"
        link={true}
        linkOrHref="/get-started"
        buttonText="Get Started Today!"
        imgWidth="500"
        text="Having started my career in sales and getting to work my way up to a corporate position, I have the ability to see the big picture for my clients. Few people just need a website. If you are looking to increase sales, funnel leads, and push your business into the spotlight, my services may be what you need to take your business to the next level."
        img={reputationManagementPic}
      ></SplitSection>
      {/* <SplitSection
        title="Optimize your Business"
        buttonText="Learn More"
        text="Having started my career in sales and getting to work my way up to a corporate position, I have the ability to see the big picture for my clients. Few people just need a website. If you are looking to increase sales, funnel leads, and push your business into the spotlight, my services may be what you need to take your business to the next level."
      ></SplitSection> */}
      <Footer></Footer>
    </main>
  );
}

export default Solutions;
