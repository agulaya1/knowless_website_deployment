import * as BsIcons from "react-icons/bs";
import ghost_ from "../images/cover-art/ghost_.jfif";
import flutter from "../images/cover-art/flutter bandcamp.png";
import push from "../images/cover-art/push.jpeg";
import reminiscent from "../images/cover-art/reminiscent.jpg";
import seasons from "../images/cover-art/seasons.png";
import space from "../images/cover-art/space.jpeg";
import thoughts from "../images/cover-art/thoughts.jpeg";
import tidal from "../images/cover-art/tidal w-breadman.JPG";
import pink_hoodie from "../images/cover-art/pink_hoodie.png";
import fluorescent from "../images/cover-art/fluorescent.jpg";

import ghostAudio from "../music/ghost_.wav";
import flutterAudio from "../music/flutter.wav";
import fluorescentAudio from "../music/fluorescent.wav";
import seasonsAudio from "../music/seasons.wav";
import spaceAudio from "../music/space.wav";
import thoughtsAudio from "../music/thoughts.wav";
import pink_hoodieAudio from "../music/pink hoodie.wav";

export const MusicData = [
  {
    title: "thoughts",
    icon: <BsIcons.BsFillPlayCircleFill/>,
    cName: "track-number",
    cover: thoughts,
    audio: thoughtsAudio,
    id: 'thoughtsId'
  },
  {
    title: "ghost_",
    icon: <BsIcons.BsFillPlayCircleFill/>,
    cName: "track-number",
    cover: ghost_,
    audio: ghostAudio,
    id: 'ghostId'
  },
  {
    title: "seasons",
    icon: <BsIcons.BsFillPlayCircleFill/>,
    cName: "track-number",
    cover: seasons,
    audio: seasonsAudio,
    id: 'seasonsId'
  },
  {
    title: "fluorescent⭒✰",
    icon: <BsIcons.BsFillPlayCircleFill/>,
    cName: "track-number",
    cover: fluorescent,
    audio: fluorescentAudio,
    id: 'fluorescentId'
  },
  {
    title: "space ⁎⁺˳✧༚",
    icon: <BsIcons.BsFillPlayCircleFill/>,
    cName: "track-number",
    cover: space,
    audio: spaceAudio,
    id: 'spaceId'
  },
  {
    title: "flutter^^",
    icon: <BsIcons.BsFillPlayCircleFill/>,
    cName: "track-number",
    cover: flutter,
    audio: flutterAudio,
    id: 'flutterId'
  },
  {
    title: "push",
    icon: <BsIcons.BsFillPlayCircleFill/>,
    cName: "track-number",
    cover: push,
    audio: thoughtsAudio,
    id: 'pushId'
  },
  {
    title: "pink hoodie!",
    icon: <BsIcons.BsFillPlayCircleFill/>,
    cName: "track-number",
    cover: pink_hoodie,
    audio: pink_hoodieAudio,
    id: 'pink_hoodieId'
  },
]