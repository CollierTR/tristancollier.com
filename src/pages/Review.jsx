import Button from "../componets/Button";

const Review = () => {
  return (
    <main className="flex flex-col justify-start place-items-center gap-12 pt-24">
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

      <h1 className="robo my-shadow text-6xl text-light-primary">Thank You!</h1>
      <p className="text-2xl w-3/5 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis cum
        adipisci accusamus facilis ipsum beatae repudiandae consequatur
        praesentium nobis, ipsa deserunt eaque atque tenetur iste ea rem ex quis
        qui.
      </p>
      <Button
        text="Leave us a reiview!"
        size="text-2xl"
        padding="py-3 px-10 mb-20"
        color="bg-dark-primary"
      ></Button>
    </main>
  );
};

export default Review;
