import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title}
        className="
    w-[140px]
    sm:w-[160px]
    md:w-[200px]
    lg:w-[220px]
    rounded-lg
    cursor-pointer
    transition-transform
    duration-200
    ease-in-out
    hover:scale-105
    hover:border-[3px]
    border-gray-400
  "
      />
    </>
  );
};

export default MovieCard;
