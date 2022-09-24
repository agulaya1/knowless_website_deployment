import { useState } from "react";
import { MusicData } from "../components/MusicData";

// LEARN HOW TO MERGE
const MusicCover = () => {

  return (
    <>
      {MusicData.map((item, index) => {
        return (
          <div
            key={index}
            className="track-item"
            onMouseEnter={handleHover(index)}
            onMouseLeave={handleHover(index)}
          >
            {hoverIndex[index] ? (
              <img
                className="track-picture"
                src={item.cover}
                alt={`${item.title}-cover`}
                key={index}
              />
            ) : (
              <div></div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default MusicCover;
