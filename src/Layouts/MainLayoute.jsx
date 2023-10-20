import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
