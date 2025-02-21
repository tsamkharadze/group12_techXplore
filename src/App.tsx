import { Route, Routes } from "react-router";
import DefaultLayout from "./layout/default/default-layout";
import LandingView from "./pages/landing/views/landing-view";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<LandingView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
