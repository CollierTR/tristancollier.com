import Button from "./Button";

const SplitContact = () => {
  return (
    <div className="w-11/12 flex justify-center mb-40 mt-32 gap-x-20 mx-auto">
      <div className="flex-col flex gap-10 w-5/12">
        <h1 className="text-light-primary robo my-shadow text-6xl">
          Let&apos;s Get in Touch!
        </h1>
        <p className="text-2xl">
          Want to get in touch? <br /> <br /> I'd be happy to! Please feel free
          to reach out to me using the contacts form for one of the links below.
        </p>
        <div className="flex gap-6">
          <Button
            text="Call"
            size="text-2xl"
            padding="py-3 px-16"
            href="tel:5402206532"
          ></Button>
          <Button
            text="Email"
            size="text-2xl"
            padding="py-3 px-16"
            href="mailto:tristancollier777@gmail.com"
          ></Button>
        </div>
      </div>

      <div className="w-5/12">
        <form
          className="flex flex-col gap-6 place-items-center"
          name="Contact Form"
          method="post"
          action="/contact"
        >
          <input type="hidden" name="form-name" value="Contact Form" />
          <span className="flex gap-2 flex-col w-3/4">
            <input type="hidden" name="form-name" value="Contact Form" />
            <label htmlFor="firstName" className="text-xl">
              First name:
            </label>
            <input
              type="text"
              name="firstName"
              required
              id="firstName"
              placeholder="John"
              className="text-xl border-2 rounded-lg p-2 border-light-primary"
            />
          </span>
          <span className="flex gap-2 flex-col w-3/4">
            <label htmlFor="lastName" className="text-xl">
              Last Name:
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="text-xl border-2 rounded-lg p-2 border-light-primary"
              name="lastName"
              required
              id="lastName"
            />
          </span>
          <span className="flex gap-2 flex-col w-3/4">
            <label htmlFor="email" className="text-xl">
              Email:
            </label>
            <input
              className="text-xl border-2 rounded-lg p-2 border-light-primary"
              type="email"
              required
              placeholder="example@email.com"
              id="email"
              name="email"
            />
          </span>
          <span className="flex gap-2 flex-col w-3/4">
            <label htmlFor="text" className="text-xl">
              How can we help you?
            </label>
            <textarea
              required
              id="text"
              name="text"
              className="ease-soft text-xl border-2 rounded-lg p-2 border-light-primary h-40 text-wrap"
            ></textarea>
          </span>
          <button
            type="submit"
            className=" border border-light-primary bg-dark-primary rounded-lg w-3/4 text-2xl robo py-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SplitContact;
