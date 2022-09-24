import ghostAudio from "../../music/ghost_.wav";
import flutterAudio from "../../music/flutter.wav";
import fluorescentAudio from "../../music/fluorescent.wav";
import seasonsAudio from "../../music/seasons.wav";
import spaceAudio from "../../music/space.wav";
import thoughtsAudio from "../../music/thoughts.wav";
import pink_hoodieAudio from "../../music/pink hoodie.wav";
import pushAudio from "../../music/push.wav";

const audios = {
  ghost_: new Audio(ghostAudio),
  "flutter^^": new Audio(flutterAudio),
  "fluorescent⭒✰": new Audio(fluorescentAudio),
  seasons: new Audio(seasonsAudio),
  "space ⁎⁺˳✧༚": new Audio(spaceAudio),
  thoughts: new Audio(thoughtsAudio),
  "pink hoodie!": new Audio(pink_hoodieAudio),
  push: new Audio(pushAudio),
};

let currentlyPlaying = null;

const play = (name) => {
  if (currentlyPlaying) {
    audios[currentlyPlaying].pause();
  }
  audios[name].play();
  currentlyPlaying = name;
};

const pause = (name) => {
  currentlyPlaying = null;
  audios[name].pause();
};

export default {
  pause,
  play,
};
