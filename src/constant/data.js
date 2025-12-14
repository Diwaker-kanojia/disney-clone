import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";

import disney from "./../assets/Images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";

import starwarV from "./../assets/Videos/star-wars.mp4";
import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGeographicV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";

export const menu = [
  {
    name: "HOME",
    icon: HiHome,
  },
  {
    name: "SEARCH",
    icon: HiMagnifyingGlass,
  },
  {
    name: "WATCH LIST",
    icon: HiPlus,
  },
  {
    name: "ORIGINALS",
    icon: HiStar,
  },
  {
    name: "MOVIES",
    icon: HiPlayCircle,
  },
  {
    name: "SERIES",
    icon: HiTv,
  },
];

export const productionHouseList = [
  {
    id: 1,
    image: disney,
    video: disneyV,
  },
  {
    id: 2,
    image: pixar,
    video: pixarV,
  },
  {
    id: 3,
    image: marvel,
    video: marvelV,
  },
  {
    id: 4,
    image: starwar,
    video: starwarV,
  },
  {
    id: 5,
    image: nationalG,
    video: nationalGeographicV,
  },
];

export const generesList = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
