import { Route, Routes } from "react-router";
import DefaultLayout from "./layout/default/default-layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}></Route>
      </Routes>

      <p className="text-red-400">toko</p>
    </>
  );
}

export default App;
