import { Route, Routes } from "react-router";
import DefaultLayout from "./layout/default/default-layout";
import LandingView from "./pages/landing/views/landing-view";
import PlansView from "./pages/plans/views/plans-view";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<LandingView />} />
          <Route path="/plans" element={<PlansView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
