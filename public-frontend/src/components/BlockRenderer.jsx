export default function BlockRenderer({ blocks = [] }) {
  const sortedBlocks = [...blocks].sort((a, b) => a.order - b.order);

  return (
    <>
      {sortedBlocks.map((block) => {
        switch (block.type) {
          case "text":
            return (
              <p
                key={block._id}
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                }}
              >
                {block.data.content}
              </p>
            );

          default:
            return (
              <div
                key={block._id}
                style={{
                  color: "red",
                  marginBottom: "20px",
                }}
              >
                Unsupported block type: {block.type}
              </div>
            );
        }
      })}
    </>
  );
}