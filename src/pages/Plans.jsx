import Footer from "../componets/Footer";
import Nav from "../componets/Nav";
import { Outlet } from "react-router-dom";

const Plans = () => {
  return (
    <>
      <Nav></Nav>
      <main className="flex justify-center">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Plans;
