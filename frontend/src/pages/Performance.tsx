import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetPerformanceQuery } from "../redux/UserApi";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/UI/Header";
import { performanceHeaders } from "../constants/constant";
import CustomColumnMenu from "../components/admin/CustomColumnMenu";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Performance = () => {
  const theme = useTheme();
  const userId = useSelector((state: RootState) => state.theme.userId);

  const { data, isLoading } = useGetPerformanceQuery(userId);

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="PERFORMANCE"
        subtitle="Track your Affiliate Sales Performance"
      />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.sales) || []}
          columns={performanceHeaders}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
        />
      </Box>
    </Box>
  );
};

export default Performance;
