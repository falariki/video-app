import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
//importing Youtube api
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("Toronto");
  }, []);

  const onTermSubmit = async (term) => {
    const responce = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(responce.data.items);
    setSelectedVideo(responce.data.items[0]);
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
