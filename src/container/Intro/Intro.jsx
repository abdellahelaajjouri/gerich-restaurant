import React, { useRef, useState } from "react";
import { meal } from "../../constants";
import "./Intro.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const Intro = () => {
  const videoRef = useRef(null);
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="app__intro">
      <video src={meal} ref={videoRef} type="video/mp4" loop muted />
      <div className="app__intro-overlay flex__center">
        <div
          className="app__intro-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              videoRef.current.pause();
            } else {
              videoRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
