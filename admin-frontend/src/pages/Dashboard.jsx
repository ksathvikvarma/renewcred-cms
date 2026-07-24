import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await api.get("/pages");
        setPages(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPages();
  }, []);

  

  const totalPages = pages.length;
  const publishedPages = pages.filter(
    (page) => page.status === "published"
  ).length;
  const draftPages = pages.filter(
    (page) => page.status === "draft"
  ).length;

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">

        <h1 className="dashboard-title">
            RenewCred CMS Dashboard
        </h1>

        <p className="dashboard-subtitle">
            Welcome Admin! Manage your website content from here.
        </p>

        <div className="stats-container">

            <StatCard
                title="Total Pages"
                value={totalPages}
            />

            <StatCard
                title="Published"
                value={publishedPages}
            />

            <StatCard
                title="Draft"
                value={draftPages}
            />

        </div>

        <div className="action-buttons">

            <button
                className="primary-btn"
                onClick={() => navigate("/pages")}
            >
                Manage Pages
            </button>

            <button
                className="primary-btn"
                onClick={() => navigate("/pages/create")}
            >
                Create New Page
            </button>

            <button
                className="logout-btn"
                onClick={logout}
            >
                Logout
            </button>

        </div>

    </div>
);
}

function StatCard({ title, value }) {
    return (
        <div className="stat-card">
            <h3>{title}</h3>

            <h1>{value}</h1>
        </div>
    );
}

