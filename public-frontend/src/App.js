
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/Home";
import DynamicPage from "./pages/DynamicPage/DynamicPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<DynamicPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;