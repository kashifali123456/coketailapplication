import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import Routers from "./Routers";
import theme from "./Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  );
}

export default App;
