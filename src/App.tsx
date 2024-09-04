import './App.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes/AppRouter.tsx";
import BaseLayout from "./layout/BaseLayout.tsx";
import theme from "./themes/Theme.tsx";
import {ThemeProvider} from "@mui/material";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <BaseLayout>
            <AppRouter/>
          </BaseLayout>
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
