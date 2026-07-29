import "./PageRenderer.css";

export default function PageRenderer({ blocks }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {

          case "heading":
            return (
              <h2 className="page-heading" key={block.order || index}>
                {block.data.content}
              </h2>
            );

          case "paragraph":
            return (
              <p className="page-paragraph" key={block.order || index}>                         
                {block.data.content}
              </p>
            );

          case "equation":
            return (
              <pre className="page-equation" key={block.order || index}>
                {block.data.content}
              </pre>
            );

          default:
            return null;
        }
      })}
    </>
  );
}