import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [format, setFormat] = useState("mp4");

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search or paste YouTube URL"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="mp4">MP4</option>
          <option value="mp3">MP3</option>
        </select>
        <button>Search</button>
      </div>
    </div>
  );
}
