import "../styles/About.css";
import React, { useEffect, useState } from "react";
import { InspirationData } from "../data/InspirationData.js";
import { IrisgroveData } from "../data/IrisgroveData.js";
import irisgrovePic from "../images/profile-pics/irisgrove-profile-pic.jpg";
// import IconFormat from "../components/IconFormat";

const About = () => {
  // const [artistIndex, setArtistIndex] = useState(false);
  const [inspirationKey, setInspirationKey] = useState(null);
  const [irisgroveKey, setIrisgroveKey] = useState(null);

  useEffect(() => {
    document.title = "knowless // about";
  });

  const InspirationEntry = ({ isActive, index, item }) => {
    let artistContainer = document.getElementById("inspirations-container");

    // WORK IN PROGRESS (change back to 100px when ready)
    if (isActive) {
      artistContainer.style.paddingBottom = "10px";
    }

    return (
      <ul
        id={"artist-item" + index}
        className="inspiration-list-item"
        onClick={() => {
          setInspirationKey(index);
        }}
        style={{
          backgroundImage: isActive
            ? "linear-gradient(45deg, rgba(241, 243,179, 0.799) 0%, rgba(184, 190, 219, 0.966) 50%, rgb(195, 225, 211) 100%)"
            : "linear-gradient(45deg, rgba(241, 243,179, 0) 0%, rgba(184, 190, 219, 0) 50%, rgba(195, 225, 211, 0) 100%)",
        }}
      >
        <div className="user-profile">
          <img className="user-picture" src={item.picture} alt="user-pic" />
          <p>{item.name}</p>
        </div>
      </ul>
    );
  };

  const IrisgroveEntry = ({ isActive, index, item }) => {
    let artistContainer = document.getElementById("irisgrove-container");

    // *WORK IN PROGRESS (change back to 100px to move container size down)
    if (isActive) {
      artistContainer.style.paddingBottom = "10px";
    }

    return (
      <ul
        id={"artist-item" + index}
        className="inspiration-list-item"
        onClick={() => {
          setIrisgroveKey(index);
        }}
        style={{
          backgroundImage: isActive
            ? "linear-gradient(45deg, rgba(241, 243,179, 0.799) 0%, rgba(184, 190, 219, 0.966) 50%, rgb(195, 225, 211) 100%)"
            : "linear-gradient(45deg, rgba(241, 243,179, 0) 0%, rgba(184, 190, 219, 0) 50%, rgba(195, 225, 211, 0) 100%)",
        }}
      >
        <div className="user-profile">
          <img className="user-picture" src={item.picture} alt="user-pic" />
          <p>{item.name}</p>
        </div>
      </ul>
    );
  };

  return (
    <div className="about-container">
      {/* about me container */}
      <section className="about-me-info">
        <h3>about me</h3>
        <div className="description">
          <p>
            hey what's up! thanks for visiting my site. since 2019 in my
            bedroom, i've gone from producing short lo-fi/hip-hop beats to
            producing the experimental bounce stuff i make now. along the way, i
            joined many online communities, made friends, and collaborated with
            other artists.{" "}
          </p>
          <br></br>
          <p>
            i hope you like my website! i coded it using HTML/CSS and React.js
            <br></br>
            <span style={{ fontStyle: "italic" }}>
              *website is still very much a work in progress
            </span>
          </p>
        </div>
      </section>
      {/* inspirations info */}
      <section id="inspirations-container" className="inspirations-container">
        <h3>my inspirations</h3>
        <div className="inspirations-desc">
          {React.Children.toArray(
            InspirationData.map((item, index) => {
              return (
                <InspirationEntry
                  isActive={inspirationKey === index}
                  index={index}
                  item={item}
                />
              );
            })
          )}
          <div className="inspiration-more">+ many more...</div>
        </div>
      </section>
      <section id="irisgrove-container" className="irisgrove-container">
        <div className="irisgrove-desc">
          <div style={{ paddingRight: "20px" }}>
            <h3>irisgrove collective</h3>
            <p>a collective i'm a part of //</p>
            <p>friends/huge inspirations</p>
          </div>
          <div>
            <img
              className="user-picture"
              src={irisgrovePic}
              alt="irisgrove-pic"
            />
          </div>
        </div>
        <div className="inspirations-desc">
          {React.Children.toArray(
            IrisgroveData.map((item, index) => {
              return (
                <IrisgroveEntry
                  isActive={irisgroveKey === index}
                  index={index}
                  item={item}
                />
              );
            })
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
