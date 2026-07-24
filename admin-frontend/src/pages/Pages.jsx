import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Pages() {
  const [pages, setPages] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await api.get("/pages");
      setPages(response.data.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load pages");
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this page?");

    if (!confirmed) return;

    try {
        await api.delete(`/pages/${id}`);

        alert("Page deleted successfully.");

        fetchPages();

        
    } catch (error) {
        console.error(error);

        alert(
        error.response?.data?.message || "Failed to delete page."
        );
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Pages</h1>

      <button onClick={() => navigate("/pages/create")}>
        Create Page
      </button>

<br /><br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Slug</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {pages.map((page) => (
            <tr key={page._id}>
              <td>{page.title}</td>
              <td>{page.slug}</td>
              <td>{page.status}</td>
              <td>
                <button onClick={() => navigate(`/pages/edit/${page._id}`)}>Edit</button>

                <button style={{ marginLeft: "10px" }} onClick={() => handleDelete(page._id)}>
                    Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}