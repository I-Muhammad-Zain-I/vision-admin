import React from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "./UI/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../redux/themeSlice";
import profileImage from "./assets/profile.jpg";
import { AppDispatch } from "../store";
import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from "@mui/material";

type PropTypes = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
};

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: PropTypes) => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side */}
        <FlexBetween>
          <IconButton
            onClick={() => setIsSidebarOpen((prevState) => !prevState)}
          >
            <MenuIcon />
          </IconButton>
          <FlexBetween
            sx={{
              background: theme.palette.background.paper,
            }}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        {/* Right Side */}
        <FlexBetween gap={"1.5rem"}>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
