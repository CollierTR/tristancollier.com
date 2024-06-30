import Button from "../componets/Button";
import Nav from "../componets/Nav";

const GetStarted = () => {
  return (
    <>
      <Nav></Nav>
      <main className="flex flex-col justify-start place-items-center gap-12 pt-24 ">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=wBF509A8D9tjjy9E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <p>
          Please be as detailed as possible when filling out the form as it will
          help me maximize the value I can provide to you.
        </p>

        <Button
          text="Go to form"
          size="text-2xl"
          padding="py-3 px-10"
          color="bg-dark-primary"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdgDdxvvZJ07ips2sfpptqj6zNxMvW3uqBVqKnFkyxkEuAnyg/viewform"
        ></Button>
      </main>
    </>
  );
};

export default GetStarted;
