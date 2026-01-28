import trending from "../data/trending";
import VideoCard from "./VideoCard";

export default function Trending() {
  return (
    <div className="trending-container">
      {trending.map((video, i) => (
        <VideoCard key={i} video={video} />
      ))}
    </div>
  );
}
