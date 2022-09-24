import "../styles/Home.css";
import "../styles/MusicBox.css";
// import TypeAnimation from "react-type-animation";
import Flowers1 from "../images/flowers_1.jpg";
import React, { useState } from "react";
import { MusicData } from "../data/MusicData.js";
import Music from "../components/music-components/Music.js";
import { useEffect } from "react";
import changeColor from "../components/color/AppColor.js";
import { ReactComponent as SoundcloudLogo } from "../icons/soundcloud-logo.svg";
import YoutubeEmbed from "../components/videos/YoutubeEmbed";
import sunbeam from "../images/beat-battle-art/sunbeam.jpeg";
import {Helmet} from 'react-helmet';

const Home = () => {
  // used for hover effects on track-item
  const [hoverIndex, setHoverIndex] = useState(false);

  useEffect(() => {
    document.title = "knowless // home";
  });

  // change hover state
  const handleHover = (index) => () => {
    setHoverIndex((state) => ({
      [index]: !state[index],
    }));
    // console.log(hoverIndex);
  };

  // used for toggling on playing song
  const [toggleIndex, setToggleIndex] = useState(false);

  // change toggle state
  const toggleHover = (index, id) => () => {
    setToggleIndex((state) => ({
      [index]: !state[index],
    }));

    // call changeColor from AppColor
    changeColor(toggleIndex, id, index);

    // const rememberState = !toggleIndex[index];
    // let trackItem = document.getElementById("track-item-id" + index);

    // if (rememberState === true || toggleIndex === false) {
    //   trackItem.style.backgroundColor = "white";
    // } else {
    //   trackItem.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    // }
  };

  return (
    <div className="home">
      <Helmet>
        <title>knowless</title>
        <meta
          id="meta-description"
          property="og:description"
          content="official website for knowless"
        />
        <meta id="og-image" property="og:image" content={kl_logo} />
      </Helmet>
      <section className="home-box">
        <div className="left-intro">
          {/* typing animation (PLUGIN NOT WORKING)*/}
          <div className="intro-text">
            <h1>hi, i'm knowless!</h1>
            <p>
              i'm a{" "}
              <span style={{ fontWeight: "bold", paddingLeft: 0 }}>
                {" producer 🎹"}
              </span>
              {/* <TypeAnimation
                className="typical"
                wrapper="b"
                repeat={Infinity}
                sequence={[
                  "producer 🎹",
                  3000,
                  "future developer 💻",
                  3000,
                  "college student 🎓",
                  3000,
                  "gamer 🕹️",
                  3000,
                ]}
              /> */}
            </p>
          </div>
        </div>
        <div className="right-intro">
          <img src={Flowers1} alt="flowers" />
          <div className="intro-text">
            <h1>hi i'm knowless!</h1>
            <p>
              i'm a
              <span style={{ fontWeight: "bold", paddingLeft: 0 }}>
                {" producer 🎹"}
              </span>
              {/* <TypeAnimation
                className="typical"
                repeat={Infinity}
                wrapper="b"
                sequence={[
                  "producer 🎹",
                  3000,
                  "future developer 💻",
                  3000,
                  "college student 🎓",
                  3000,
                  "gamer 🕹️",
                  3000,
                ]}
              /> */}
            </p>
          </div>
        </div>
      </section>
      {/* container for all music items */}
      <section className="sounds-container">
        <h1 className="sounds-title">sounds</h1>
        <div className="music-box-container">
          <div className="track-list">
            {/* track list items w/ animations */}
            <div className="track-list-grid">
              {React.Children.toArray(
                MusicData.map((item, index) => {
                  return (
                    <ul
                      className="track-item"
                      id={"track-item-id" + index}
                      onMouseEnter={handleHover(index)}
                      onMouseLeave={handleHover(index)}
                    >
                      <div>
                        {/* {hoverIndex[index] ? (
                          <></>
                        ) : (
                          <span className="track-number">{item.number}</span>
                        )} */}
                        <Music
                          toggleHover={toggleHover(index, item.id)}
                          icon={item.icon}
                          name={item.title}
                          id={item.id}
                          index={index}
                          toggleIndex={toggleIndex[index]}
                        />
                        {item.title}
                      </div>
                    </ul>
                  );
                })
              )}
            </div>
          </div>
          {/* track picture/info */}
          <div className="track-info">
            <div className="track-picture-container">
              {React.Children.toArray(
                MusicData.map((item, index) => {
                  return (
                    <>
                      {hoverIndex[index] ? (
                        <img
                          id={item.id}
                          className="track-picture"
                          src={item.cover}
                          alt={`${item.title}-cover`}
                        />
                      ) : toggleIndex[index] ? (
                        <img
                          id={item.id}
                          className="track-picture"
                          src={item.cover}
                          alt={`${item.title}-cover`}
                        />
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="beat-battle-container">
        <h1>beat battles</h1>
        <h3>Kenny Beats Battles</h3>
        <div className="battle-item">
          <div className="battle-item-box" style={{ width: "50%" }}>
            <div className="battle-item-info">
              <div className="battle-item-description">
                <p>kb maybe [1st place]</p>
                <p style={{ fontStyle: "italic" }}>1 January 2022</p>
                <div className="battle-item-links">
                  <a
                    href="https://soundcloud.com/knowwless/kb-maybe"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SoundcloudLogo className="soundcloud soundcloud-icon" />
                  </a>
                  <a
                    href="https://youtu.be/xFucQTi6lfA"
                    target="_blank"
                    rel="noreferrer"
                    className="battle-breakdown-link"
                  >
                    breakdown
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "50%", minHeight: "100%" }}>
            <YoutubeEmbed embedId="xFucQTi6lfA" />
          </div>
        </div>
        <div className="battle-item">
          <div className="battle-item-box" style={{ width: "50%" }}>
            <div className="battle-item-info">
              <div className="battle-item-description">
                <p>kb 5/17 [2nd place]</p>
                <p style={{ fontStyle: "italic" }}>15 May 2021</p>
                <div className="battle-item-links">
                  <a
                    href="https://soundcloud.com/knowwless/kb-517"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SoundcloudLogo className="soundcloud soundcloud-icon" />
                  </a>
                  <a
                    href="https://youtu.be/rmIrgHe5fSU"
                    target="_blank"
                    rel="noreferrer"
                    className="battle-breakdown-link"
                  >
                    breakdown
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "50%", minHeight: "100%" }}>
            <YoutubeEmbed embedId="rmIrgHe5fSU" />
          </div>
        </div>
        <h3>Sunnflips [Datsunn]</h3>
        <div className="battle-item">
          <div className="battle-item-box" style={{ width: "50%" }}>
            <div className="battle-item-info">
              <div className="battle-item-description">
                <p>sunbeam (sunnflips week 51)</p>
                <p style={{ fontStyle: "italic" }}>3 Jan 2022</p>
                <div className="battle-item-links">
                  <a
                    href="https://soundcloud.com/knowwless/sunnflip-week-51"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SoundcloudLogo className="soundcloud soundcloud-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "50%",
              minHeight: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="battle-image-box">
              <img className="battle-image" src={sunbeam} alt="sunbeam" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
