import { Outlet } from "react-router";
import { Header } from "./header";
import { Footer } from "./footer";

export default function DefaultLayout() {
  return (
    <div className="min-h-screen  bg-gradient-to-r from-[#4A2192] to-[#1A88B0]">
      <Header />
      <main>
        <div className="mx-auto ">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
