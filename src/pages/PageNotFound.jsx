import Nav from "../componets/Nav";

const PageNotFound = () => {
  return (
    <main>
      <Nav></Nav>
      <div className="flex flex-col place-items-center my-60">
        <h1 className="text-6xl robo my-shadow text-light-primary">
          Page Not Found...
        </h1>
      </div>
    </main>
  );
};

export default PageNotFound;
