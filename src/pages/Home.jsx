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
        text="Set yourself apart from the competition with a modern website. Our websites are fast, mobile responsive, and feature designs tailored to our clients needs."
        flip={true}
        img={websitePic}
        link={true}
        linkOrHref="/get-started"
        imgWidth="500px"
      ></SplitSection>
      <SplitSection
        title="Business Growth Plans"
        buttonText="Compare Plans"
        text="Boost the potential of your business with our monthly service plans. Our plans go above and beyond traditional web services giving you the edge you need to take your business to the next level."
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
