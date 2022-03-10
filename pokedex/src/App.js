import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme";
import { GlobalState } from "./Global/GlobalState";
import Router from "./Router/Router";

function App() {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
