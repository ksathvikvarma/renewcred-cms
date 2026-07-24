import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import "./CreatePage.css";

export default function EditPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [status, setStatus] = useState("draft");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPage = async () => {
        try {
        const response = await api.get(`/pages/${id}`);

        const page = response.data.data;

        setTitle(page.title);
        setSlug(page.slug);
        setStatus(page.status);

        if (page.blocks.length > 0) {
            setContent(page.blocks[0].data.content);
        }
        } catch (error) {
        console.error(error);
        alert("Failed to load page.");
        }
    };
    fetchPage();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pageData = {
      title,
      slug,
      status,
      blocks: [
        {
          type: "text",
          data: {
            content,
          },
          order: 1,
        },
      ],
    };

    try {
      await api.put(`/pages/${id}`, pageData);

      alert("Page updated successfully!");

      navigate("/pages");
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Failed to update page.");
    }
  };

  return (
    <div className="create-page-container">

      <button
        className="secondary-btn"
        onClick={() => navigate("/pages")}
      >
        ← Back to Pages
      </button>

      <div className="page-card">

        <h1>Edit Page</h1>

        <p>Update the page details below.</p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Title</label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Slug</label>

            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Status</label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <div className="form-group">
            <label>Content</label>

            <textarea
              rows="8"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <div className="button-group">

            <button
              type="button"
              className="secondary-btn"
              onClick={() => navigate("/pages")}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="primary-btn"
            >
              Update Page
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}