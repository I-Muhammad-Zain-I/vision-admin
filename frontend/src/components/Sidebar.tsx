import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutline,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./UI/FlexBetween";
import profileImage from "../assets/profile.jpeg";
import { navItems } from "../constants/constant";

type PropTypes = {
  user: { [key: string]: string };
  drawerWidth: string;
  isNonMobile: boolean;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
};

const Sidebar = ({
  user,
  drawerWidth,
  isNonMobile,
  isSidebarOpen,
  setIsSidebarOpen,
}: PropTypes) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const listItems = navItems.map(({ text, icon }) => {
    if (!icon) {
      return (
        <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
          {text}
        </Typography>
      );
    }
    const lcText = text.toLowerCase();

    return (
      <ListItem key={text} disablePadding>
        <ListItemButton
          onClick={() => {
            navigate(`/${lcText}`);
            setActive(lcText);
          }}
          sx={{
            backgroundColor:
              active === lcText ? theme.palette.secondary[300] : "transparent",
            color:
              active === lcText
                ? theme.palette.primary[200]
                : theme.palette.secondary[100],
          }}
        >
          <ListItemIcon
            sx={{
              ml: "2rem",
              color:
                active === lcText
                  ? theme.palette.primary[200]
                  : theme.palette.secondary[200],
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} />
          {active === lcText && <ChevronRightOutlined sx={{ ml: "auto" }} />}
        </ListItemButton>
      </ListItem>
    );
  });

  return (
    <Box component={"nav"}>
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width={"100%"}>
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
                  <Typography variant="h4" fontWeight="bold">
                    VISION-SE
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(false)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>{listItems}</List>
          </Box>
          <Box>
            <Divider />
            <FlexBetween
              textTransform={"none"}
              gap={"1rem"}
              m={"1.5rem 2rem 1rem 3rem"}
            >
              <Box
                component={"img"}
                alt="profile"
                src={profileImage}
                height={"30px"}
                width={"30px"}
                borderRadius={"50%"}
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign={"left"}>
                <Typography
                  fontWeight="bold"
                  fontSize={"0.9rem"}
                  sx={{
                    color: theme.palette.secondary[100],
                  }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontWeight="bold"
                  fontSize={"0.9rem"}
                  sx={{
                    color: theme.palette.secondary[100],
                  }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "20px",
                }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
