import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function Home() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await api.get("/pages/public");

      setPages(response.data.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
        style={{
        width: "900px",
        margin: "50px auto",
        fontFamily: "Arial",
        }}
    >
        <h1>RenewCred CMS Demo</h1>

        <p>
        This website is completely powered by the CMS.
        </p>

        <hr />

        <h2>Published Pages</h2>

        {pages.length === 0 ? (
        <p>No published pages available.</p>
        ) : (
        pages.map((page) => (
            <div
            key={page._id}
            style={{
                marginBottom: "20px",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
            }}
            >
            <h3>{page.title}</h3>

            <p>{page.slug}</p>

            <Link to={`/${page.slug}`}>
                Read Page →
            </Link>
            </div>
        ))
        )}
    </div>
    );
}