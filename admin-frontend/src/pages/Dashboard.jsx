import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>RenewCred CMS</h1>

      <h3>Welcome Admin</h3>

      <br />

      <button onClick={() => navigate("/pages")}>
        Manage Pages
      </button>

      <br />
      <br />

      <button onClick={() => navigate("/pages/create")}>
        Create New Page
      </button>

      <br />
      <br />

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}