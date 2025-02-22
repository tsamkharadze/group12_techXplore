import { Outlet } from "react-router";
import { Header } from "./header";
import { Footer } from "./footer";

export default function DefaultLayout() {
  return (
    <div className="min-h-screen dark:bg-black bg-[#37507F]">
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
