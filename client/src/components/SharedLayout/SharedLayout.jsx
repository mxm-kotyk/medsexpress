import { Outlet } from "react-router-dom";
import AppBar from "../AppBar";

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
