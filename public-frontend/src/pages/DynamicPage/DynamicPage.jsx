import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";
import PageRenderer from "../../components/PageRenderer/PageRenderer";
import "./DynamicPage.css";

export default function DynamicPage() {
  const { slug } = useParams();

  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await api.get(`/pages/slug/${slug}`);

        setPage(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };


    fetchPage();
  }, [slug]);


  if (loading) {
    return (
      <div className="page-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="page-container">
        <h2>Page not found.</h2>

        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container">

      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>
        <span>{page.title}</span>
      </nav>

      <h1 className="page-title">{page.title}</h1>

      <PageRenderer blocks={page.blocks} />

      <div className="back-button">
        <Link to="/">← Back to Home</Link>
      </div>

    </div>
  );
}