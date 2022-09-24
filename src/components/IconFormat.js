import { ReactComponent as InstagramLogo } from "../icons/instagram-logo.svg";
import { ReactComponent as SoundcloudLogo } from "../icons/soundcloud-logo.svg";
import { ReactComponent as TwitterLogo } from "../icons/twitter-logo.svg";

import "../styles/IconFormat.css";

const IconFormat = () => {
  return (
    <>
      <a
        rel="noreferrer"
        href="https://www.instagram.com/prodknowless/"
        target="_blank"
      >
        <InstagramLogo className="link-icons instagram" />
      </a>

      {/* Gradient attempt */}
      {/* <svg src={InstagramLogo}>
            <defs>
              <linearGradient id="insta-gradient">
                <stop offset="0%" stop-color="lightblue"/>
                <stop offset="100%" stop-color="#ef5b2b" />
              </linearGradient>
            </defs>
          </svg> */}

      <a
        rel="noreferrer"
        href="https://soundcloud.com/knowwless"
        target="_blank"
      >
        <SoundcloudLogo className="link-icons soundcloud" />
      </a>
      <a
        rel="noreferrer"
        href="https://twitter.com/knowless___"
        target="_blank"
      >
        <TwitterLogo className="link-icons twitter" />
      </a>
    </>
  );
};

export default IconFormat;
