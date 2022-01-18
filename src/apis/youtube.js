import axios from "axios";

const KEY = "AIzaSyCn3NTbN9r1KFetpPTvH9gpH4nmhF99oF4";

//preconfigured access to axios

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
