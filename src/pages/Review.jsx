//params are " ? name= & videoId="

import Button from "../componets/Button";

const Review = () => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");

  const videoId = params.get("videoId");

  const video = videoId
    ? `https://youtube.com/embed/${videoId}?autoplay=1&rel=1`
    : "https://www.youtube.com/embed/DTl3L0BaqdU?autoplay=1&rel=1";

  return (
    <main className="flex flex-col justify-start place-items-center gap-5 md:gap-12 pt-24">
      <iframe
        className="md:w-[560px] w-9/12 sm:w-3/4 h-[200px] sm:h-[300px] md:h-[300px]"
        src={video}
        title="Thank You!"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h1 className="robo my-shadow text-4xl md:text-6xl text-light-primary">
        {/* Optional name URL param */}
        Thank You{name ? ` ${name}` : null}!
      </h1>
      <p className=" md:text-2xl text-xl w-3/5 text-center">
        If you have any questions, or there is anything I can do for you, please
        don&apos;t hesitate to reach out to me.
      </p>
      <Button
        text="Leave us a review!"
        size="text-xl md:text-2xl"
        padding=" py-2 md:py-3 px-6 md:px-10 mb-20"
        color="bg-dark-primary"
        href="https://g.page/r/CbKwlapzWGr-EBI/review"
      ></Button>
    </main>
  );
};

export default Review;
