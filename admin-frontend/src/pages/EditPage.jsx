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
  const [blocks, setBlocks] = useState([
    {
      type: "paragraph",
      content: "",
    },
  ]);

  const addBlock = () => {
    setBlocks([
      ...blocks,
      {
        type: "paragraph",
        content: "",
      },
    ]);
  };

  const removeBlock = (index) => {
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(index, 1);
    setBlocks(updatedBlocks);
  };

  const updateBlock = (index, field, value) => {
    const updatedBlocks = [...blocks];
    updatedBlocks[index][field] = value;
    setBlocks(updatedBlocks);
  };

  useEffect(() => {
    const fetchPage = async () => {
        try {
        const response = await api.get(`/pages/${id}`);

        const page = response.data.data;

        setTitle(page.title);
        setSlug(page.slug);
        setStatus(page.status);

        if (page.blocks && page.blocks.length > 0) {

          const loadedBlocks = page.blocks.map((block) => ({
            type: block.type,
            content: block.data.content,
          }));

          setBlocks(loadedBlocks);

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
      blocks: blocks.map((block, index) => ({
        type: block.type,
        data: {
          content: block.content,
        },
        order: index + 1,
      })),
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

          <h3 className="blocks-title">Content Blocks</h3>

          {blocks.map((block, index) => (

            <div
              key={index}
              className="block-card"
            >

              <h4>Block {index + 1}</h4>

              <div className="form-group">

                <label>Block Type</label>

                <select
                  className="block-select"
                  value={block.type}
                  onChange={(e) =>
                    updateBlock(index, "type", e.target.value)
                  }
                >
                  <option value="heading">Heading</option>
                  <option value="paragraph">Paragraph</option>
                  <option value="equation">Equation</option>
                </select>

              </div>

              <div className="form-group">

                <label>Content</label>

                <textarea
                  className="block-textarea"
                  value={block.content}
                  onChange={(e) =>
                    updateBlock(index, "content", e.target.value)
                  }
                  required
                />

              </div>

              <div className="block-actions">

                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() => removeBlock(index)}
                >
                  Remove Block
                </button>

              </div>

            </div>

          ))}

          <button
            type="button"
            className="secondary-btn add-block-btn"
            onClick={addBlock}
          >
            + Add Block
          </button>

          <br />
          <br />

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