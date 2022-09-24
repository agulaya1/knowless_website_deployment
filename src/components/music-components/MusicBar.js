import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import { MusicData } from "../components/MusicData";

// LEARN HOW TO MERGE
const MusicBar = () => {
  const [hoverIndex, setHoverIndex] = useState(false);

  const handleHover = (index) => () => {
    setHoverIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  return (
    <div>
      {MusicData.map((item, index) => {
        return (
          <ul
            key={index}
            className="track-item"
            onMouseEnter={handleHover(index)}
            onMouseLeave={handleHover(index)}
          >
            <div className={item.cName}>
              {hoverIndex[index] ? (
                <span className="track-number play-icon">{item.icon}</span>
              ) : (
                <span className="track-number">{item.number}</span>
              )}
              {item.title}
            </div>
          </ul>
        );
      })}
    </div>
  );
};

export default MusicBar;
