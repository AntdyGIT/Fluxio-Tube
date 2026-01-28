const categories = [
  "F1",
  "Music",
  "4K Scenery",
  "Cars",
  "Gaming",
  "LoFi",
  "Podcasts",
  "Space",
  "Technology",
];

export default function CategoryBar() {
  return (
    <div className="category-bar">
      {categories.map((c, i) => (
        <button key={i}>{c}</button>
      ))}
    </div>
  );
}
