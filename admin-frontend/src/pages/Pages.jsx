import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Pages.css";

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
    <div className="pages-container">

      <button
        className="back-btn"
        onClick={() => navigate("/dashboard")}
      >
        ← Dashboard
      </button>

      <div className="pages-header">
        <h1 className="pages-title">Manage Pages</h1>

        <button
          className="create-btn"
          onClick={() => navigate("/pages/create")}
        >
          + Create Page
        </button>
      </div>

      {pages.length === 0 ? (

        <div className="empty-state">
          <h2>No Pages Found</h2>
          <p>Create your first page to get started.</p>
        </div>

      ) : (

        <div className="table-container">

          <table className="pages-table">

            <thead>
              <tr>
                <th>Title</th>
                <th>Slug</th>
                <th>Status</th>
                <th>Updated</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {pages.map((page) => (

                <tr key={page._id}>

                  <td>{page.title}</td>

                  <td>{page.slug}</td>

                  <td>
                    <span
                      className={`status ${page.status}`}
                    >
                      {page.status}
                    </span>
                  </td>

                  <td>
                    {new Date(page.updatedAt).toLocaleDateString()}
                  </td>

                  <td>

                    <button
                      className="edit-btn"
                      onClick={() =>
                        navigate(`/pages/edit/${page._id}`)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDelete(page._id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

