import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../../../styles/CrashCourse.css";
import NewNavbar from "./NewNavbar";
const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NewNavbar/>
      <Outlet />
    </>
  );
};

export default Layout;
