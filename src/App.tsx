import { Route, Routes } from "react-router";
import DefaultLayout from "./layout/default/default-layout";
import LandingView from "./pages/landing/views/landing-view";
import PlansView from "./pages/plans/views/plans-view";
import PartnersView from "./pages/partners/views/partners-view";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<LandingView />} />
          <Route path="/plans" element={<PlansView />} />
          <Route path="/partners" element={<PartnersView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
