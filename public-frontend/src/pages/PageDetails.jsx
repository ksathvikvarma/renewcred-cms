import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import BlockRenderer from "../components/BlockRenderer";

export default function PageDetails() {
  const { slug } = useParams();

  const [page, setPage] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
        try {
        const response = await api.get(`/pages/slug/${slug}`);
        setPage(response.data.data);
        } catch (error) {
        console.error(error);
        }
    };
    fetchPage();
  }, [slug]);


  if (!page) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ width: "800px", margin: "40px auto" }}>
      <Link to="/">← Back</Link>

      <h1>{page.title}</h1>

      <BlockRenderer blocks={page.blocks} />
    </div>
  );
}