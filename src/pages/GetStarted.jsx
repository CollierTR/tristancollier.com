import Button from "../componets/Button";
import Nav from "../componets/Nav";

const GetStarted = () => {
  return (
    <>
      <Nav></Nav>
      <main className="flex flex-col justify-start place-items-center gap-6 md:gap-12 pt-24 w-10/12 ">
        <iframe
          className="md:w-[560px] w-full sm:w-3/4 h-[150px] sm:h-[300px] md:h-[300px]"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=wBF509A8D9tjjy9E"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <p className="text-center md:text-lg">
          Please be as detailed as possible when filling out the form as it will
          help me maximize the value I can provide to you.
        </p>

        <Button
          text="Go to form"
          size="text-lg md:text-2xl"
          padding="py-2 md:py-3 px-6 md:px-10"
          color="bg-dark-primary"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdgDdxvvZJ07ips2sfpptqj6zNxMvW3uqBVqKnFkyxkEuAnyg/viewform"
        ></Button>
      </main>
    </>
  );
};

export default GetStarted;
