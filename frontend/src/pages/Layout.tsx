import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

type Props = {};

const Layout = (props: Props) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box
      display={isNonMobile ? "flex" : "block"}
      width={"100%"}
      height={"100%"}
    >
      <Sidebar
        isNonMobile={isNonMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        drawerWidth={"250px"}
      />
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Outlet />
    </Box>
  );
};

export default Layout;
