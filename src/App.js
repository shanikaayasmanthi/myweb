// import './App.css';
import { Routes,Route,BrowserRouter } from "react-router-dom";
import Index from "./pages";

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} >
            <Route index element={<Index/>} />
            {/* <Route path="/services" element={} /> */}
            {/* <Route path="/news" element={} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
