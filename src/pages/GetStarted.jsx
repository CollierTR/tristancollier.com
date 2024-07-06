import Button from "../componets/Button";
import Nav from "../componets/Nav";

const GetStarted = () => {
  return (
    <>
      <Nav></Nav>
      <main className="flex flex-col justify-start place-items-center gap-5 md:gap-12 pt-24">
        <div className="grid place-content-center items-center place-items-center py-20">
          <iframe
            className="md:w-[560px] w-9/12 sm:w-3/4 h-[200px] sm:h-[300px] md:h-[300px]"
            // video params =  ?autoplay=1&rel=0
            // https://www.youtube.com/embed/{video id}?autoplay=1&rel=1
            src="https://www.youtube.com/embed/bqktEwkQcp4?autoplay=1&rel=1"
            title="Get Started"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-center text-xl md:text-lg">
          Please be as detailed as possible when filling out the form as it will
          help me maximize the value I can provide to you.
        </p>

        <Button
          text="Go to form"
          size="text-xl md:text-2xl"
          padding="py-2 md:py-3 px-6 md:px-10"
          color="bg-dark-primary"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdgDdxvvZJ07ips2sfpptqj6zNxMvW3uqBVqKnFkyxkEuAnyg/viewform"
        ></Button>
      </main>
    </>
  );
};

export default GetStarted;
