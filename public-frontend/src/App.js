import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageDetails from "./pages/PageDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<PageDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;