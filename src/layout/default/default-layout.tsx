import { Outlet } from "react-router";
import { Header } from "./header";
import { Footer } from "./footer";

export default function DefaultLayout() {
  return (
    <div className="min-h-screen  bg-gradient-to-r from-[#03264a] to-[#32ADE6]">
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
