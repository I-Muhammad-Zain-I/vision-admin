import { useMemo } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reset CSS */}
    </ThemeProvider>
  );
}

export default App;
