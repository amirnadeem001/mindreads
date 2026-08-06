import AdSlot from "@/components/AdSlot";

type BlogContentProps = {
  content: string;
};

type Block =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string };

function parseContent(content: string): Block[] {
  const blocks: Block[] = [];
  const parts = content
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);

  for (const part of parts) {
    if (part.startsWith("## ")) {
      blocks.push({ type: "heading", text: part.replace(/^##\s+/, "") });
    } else {
      blocks.push({ type: "paragraph", text: part.replace(/\n/g, " ") });
    }
  }

  return blocks;
}

export default function BlogContent({ content }: BlogContentProps) {
  const blocks = parseContent(content);
  const headingIndexes = blocks
    .map((block, index) => (block.type === "heading" ? index : -1))
    .filter((index) => index >= 0);

  const afterFirstHeading =
    headingIndexes.length > 0 ? headingIndexes[0] : -1;
  const afterThirdHeading =
    headingIndexes.length >= 3 ? headingIndexes[2] : -1;

  return (
    <div className="blog-article__body">
      {blocks.map((block, index) => (
        <div key={`${block.type}-${index}`}>
          {block.type === "heading" ? (
            <h2>{block.text}</h2>
          ) : (
            <p>{block.text}</p>
          )}

          {index === afterFirstHeading && (
            <div className="blog-ad blog-ad--center">
              <AdSlot
                label="Banner 160x300"
                id="160x300_1"
                width={160}
                height={300}
                color="#f0b0b0"
              />
            </div>
          )}

          {index === afterThirdHeading && (
            <div className="blog-ad blog-ad--center">
              <AdSlot
                label="Banner 300x250"
                id="300x250_1"
                width={300}
                height={250}
                color="#f5d89a"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
