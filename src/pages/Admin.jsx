import { useState } from "react";

const Admin = () => {
  const [nameInput, setNameInput] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [createdLink, setCreatedLink] = useState("");

  function handleInput() {
    let givenName = nameInput;

    let url = "https://tristancollier.com/review/";

    let givenURL = videoLink;
    let splited = givenURL.split("v=");
    let splitedAgain = splited[1].split("&");
    let videoId = splitedAgain[0];

    let generatedLink = `${url}?videoId=${videoId}&name=${givenName}`;
    setCreatedLink(generatedLink);
    setVideoLink(`https://www.youtube.com/embed/${videoId}`);
  }

  return (
    <main className="flex flex-col justify-start place-items-center gap-5 md:gap-12 pt-24">
      <div className="grid place-content-center">
        <div className="bg-dark-primary border-2 border-light-primary rounded-md flex flex-col place-items-center justify-evenly p-10  gap-10 w-full">
          <p className="text-xl">Create A Custom Review Link</p>
          <form
            action=""
            className="flex flex-col gap-8 md:gap-6 place-items-center"
          >
            <span>
              <label
                htmlFor="recipient"
                className="flex gap-2 flex-col md:w-3/4 w-10/12"
              >
                Recipient Name:
              </label>
              <input
                type="text"
                className="md:text-xl border-2 rounded-lg p-2 border-light-primary"
                onChange={(e) => setNameInput(e.target.value)}
              />
            </span>
            <span>
              <label
                htmlFor="videoLink"
                className="flex gap-2 flex-col md:w-3/4 w-10/12"
              >
                Video Link:
              </label>
              <input
                type="text"
                className="md:text-xl border-2 rounded-lg p-2 border-light-primary"
                onChange={(e) => setVideoLink(e.target.value)}
              />
            </span>
            <button
              onClick={handleInput}
              type="button"
              className="bg-light-primary py-2 px-8 rounded-lg border-2 border-dark text-dark text-xl hover:bg-primary  hover:border-light-primary hover:text-light-primary robo"
            >
              Generate Link
            </button>
          </form>

          {createdLink && (
            <div className="flex flex-col gap-4 justify-evenly place-items-center w-full">
              <p className="text-lg">Video Link Created!</p>
            </div>
          )}
        </div>
      </div>

      {createdLink && (
        <div className="flex place-items-center flex-col gap-6  py-20">
          <a
            href={createdLink}
            className="underline text-wrap text-center link"
          >
            <p className="text-lg link">{createdLink}</p>
          </a>
          <p className="w-11/12 md:text-5xl text-4xl lg:text-6xl robo my-shadow text-pretty whitespace-normal text-light-primary text-center">
            Preview
          </p>
          <p className="text-2xl">Hello {nameInput}!</p>
          <iframe
            className="md:w-[560px] w-9/12 sm:w-3/4 h-[200px] sm:h-[300px] md:h-[300px]"
            // video params =  ?autoplay=1&rel=0
            // https://www.youtube.com/embed/{video id}?autoplay=1&rel=1
            src={videoLink}
            title="Get Started"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </main>
  );
};

export default Admin;
