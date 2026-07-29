import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./Home.css";

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
    <main>

      {/* Hero Section */}

      <section className="hero">

        <div className="hero-content">

          <h1>Welcome to RenewCred</h1>

          <p>
            Helping businesses build a strong digital presence through
            reliable solutions, modern technology, and quality services.
          </p>

          <a href="#pages" className="hero-btn">
            Explore Our Pages
          </a>

        </div>

      </section>

      {/* Features */}

      <section className="features">

        <h2>Why Choose RenewCred </h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>Reliable Solutions</h3>
            <p>
              We build dependable digital solutions focused on quality,
              performance and long-term value.
            </p>
          </div>

          <div className="feature-card">
            <h3>Customer First</h3>
            <p>
              Every project is designed with the customer's goals,
              experience and business needs in mind.
            </p>
          </div>

          <div className="feature-card">
            <h3>Modern Technology</h3>
            <p>
              We use modern web technologies to create scalable,
              secure and maintainable applications.
            </p>
          </div>

          <div className="feature-card">
            <h3>Continuous Improvement</h3>
            <p>
              We believe in constantly improving our products and
              delivering better experiences over time.
            </p>
          </div>

        </div>

      </section>

      {/* Pages */}

      <section className="pages" id="pages">

        <h2>Learn More</h2>

        <div className="page-grid">

          {pages.map((page) => (

            <div className="page-card" key={page._id}>

              <h3>{page.title}</h3>

              <p>
                {page.blocks.length > 0
                  ? page.blocks[0].data.content.substring(0, 90) + "..."
                  : "No preview available."}
              </p>

              <Link
                to={`/${page.slug}`}
                className="read-more"
              >
                View Page →
              </Link>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}