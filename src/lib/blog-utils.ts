export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function categoryClass(category: string): string {
  const map: Record<string, string> = {
    "Mental Health": "tag--mental-health",
    Anxiety: "tag--anxiety",
    Relationships: "tag--relationships",
    Mindfulness: "tag--mindfulness",
    "Self Growth": "tag--self-growth",
  };
  return map[category] || "tag--mental-health";
}
