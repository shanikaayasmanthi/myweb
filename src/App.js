import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "./pages";
import { ThemeProvider } from "./context/ThemeContext";
import CustomCursor from "./components/CustomCursor/CustomCursor";

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Index />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
