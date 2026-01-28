export default function VideoCard({ video }) {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt="" />
      <div className="info">
        <h3>{video.title}</h3>
        <p>{video.channel}</p>
        <p className="meta">
          {video.views} • {video.duration}
        </p>
      </div>
    </div>
  );
}
