import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Pages from "./pages/Pages";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={
                <Login /> } />
        <Route path="/dashboard" element={
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        } />
        <Route path="/pages" element={
            <ProtectedRoute>
                <Pages />
            </ProtectedRoute>} />
        <Route path="/pages/create" element={
            <ProtectedRoute>
                <CreatePage />
            </ProtectedRoute>} />
        <Route path="/pages/edit/:id" element={
            <ProtectedRoute>
                <EditPage />
            </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;