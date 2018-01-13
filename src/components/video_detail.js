import React from 'react';
//video player
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log(video);
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          allowFullScreen="allowFullScreen"
          className="embed-responsive-item"
          frameBorder="0"
          src={url}
        />
      </div>
      <div className="details">
        <div>
          <strong>{video.snippet.title}</strong>
        </div>
        <div>Channel Name: {video.snippet.channelTitle}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
