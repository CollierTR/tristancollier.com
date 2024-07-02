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
        text="Set yourself apart from the competition with a modern website. Our websites are fast, mobile responsive, and feature designs tailored to our client's needs."
      ></SplitSection>
      <SplitSection
        img={lineChart}
        title="Business Growth Plans"
        link={true}
        imgWidth="450px"
        linkOrHref="/plans/monthly"
        buttonText="Compare Plans"
        flip={true}
        text="Boost the potential of your business with our monthly service plans. Our plans go above and beyond traditional web services giving you the edge you need to take your business to the next level."
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
        text="Shoot to the top of Google search results with our reputation management software. Our reputation management software is unique from others in that it integrates directly into your website. This makes it easy to use and and customer friendly."
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
