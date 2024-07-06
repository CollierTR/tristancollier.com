import Review from "./pages/Review";
import Plans from "./pages/Plans";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import PageNotFound from "./pages/PageNotFound";
import Portfolio from "./pages/Portfolio";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import GetStarted from "./pages/GetStarted";
import { Route, Routes } from "react-router-dom";
import PlansList from "./componets/PlansList";

export default function App() {
  return (
    <>
      <div className="bg-gradient"></div>
      <Routes>
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review" element={<Review />}></Route>
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/plans" element={<Plans />}>
          <Route path="/plans/monthly" element={<PlansList monthly={true} />} />
          <Route path="/plans/yearly" element={<PlansList yearly={true} />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
