import React, { useState } from "react";
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
import profileImage from "../assets/profile.jpeg";
import { AppDispatch } from "../store";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";

type PropTypes = {
  user: { [key: string]: string };
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
};

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }: PropTypes) => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
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
          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                textTransform: "none",
              }}
            >
              <Box
                component={"img"}
                alt="profile"
                src={profileImage}
                height={"26px"}
                width={"26px"}
                borderRadius={"50%"}
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign={"left"}>
                <Typography
                  fontWeight="bold"
                  fontSize={"0.85rem"}
                  sx={{
                    color: theme.palette.secondary[100],
                  }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontWeight="bold"
                  fontSize={"0.75rem"}
                  sx={{
                    color: theme.palette.secondary[100],
                  }}
                >
                  {user.occupation}
                </Typography>
                <ArrowDropDownOutlined
                  sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
                />
              </Box>
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
