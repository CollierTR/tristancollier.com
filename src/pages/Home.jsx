import SplitSection from "../componets/SplitSection";
import Nav from "../componets/Nav";
import Hero from "../componets/Hero";
import websitePic from "../assets/website.png";
import Footer from "../componets/Footer";
import bullseye from "../assets/bulleye.png";

const Home = () => {
  return (
    <main>
      <Nav></Nav>
      <Hero></Hero>
      <SplitSection
        title="Websites with results"
        buttonText="Get Started Today"
        text="I use a data-driven approach to building websites. Everyone wants a website that looks good, but what you need is a website that brings and results. You need a website that converts. You need a website that multiplies your profit margin. I build websites with layouts and features that have proven version rates. I also into what make my clients websites more than a website I integrate tools for my clients that help drive their business to the next level. "
        flip={true}
        img={websitePic}
        link={true}
        linkOrHref="/get-started"
        imgWidth="500px"
      ></SplitSection>
      <SplitSection
        title="Business Growth Plans"
        buttonText="Compare Plans"
        text="loram  fjdkjf dkfjd Having started my career in sales and getting to work my way up to a corporate position, I have the ability to see the big picture for my clients. Few people just need a website. If you are looking to increase sales, funnel leads, and push your business into the spotlight, my services may be what you need to take your business to the next level."
        img={bullseye}
        link={true}
        linkOrHref="/plans/monthly"
        imgWidth="500px"
      ></SplitSection>
      <Footer></Footer>
    </main>
  );
};

export default Home;
