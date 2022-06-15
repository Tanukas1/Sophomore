import { Book } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Footer from "./footer";
import Header from "./header";

const User = () => {
  const options = [
    {
      name: "Add Novels",
      icon: <Book />,
      link: "/user/addnovel",
    },
    {
      name: "Add Query",
      icon: <Book />,
      link: "/user/addQuery",
    },
    {
      name: "Manage Novels",
      icon: <Book />,
      link: "/user/exchangenovel",
    },
    {
      name: "Manage Queries",
      icon: <Book />,
      link: "/user/exchangenovel",
    },
  ];
  return (
    <>
      <Sidebar sidebarOptions={options} title={"User Dashboard"}>
        <Outlet />
      </Sidebar>
    </>
  );
};

export default User;
