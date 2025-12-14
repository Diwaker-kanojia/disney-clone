const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const HrMovieCard = ({ movie }) => {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in">
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="
      w-[180px]
      sm:w-[220px]
      md:w-[260px]
      rounded-lg
      hover:border-[3px]
      border-gray-400
      cursor-pointer
    "
      />

      <h2 className="text-white mt-2 w-[180px] sm:w-[220px] md:w-[260px]">
        {movie.title.length > 30
          ? movie.title.slice(0, 30) + ".."
          : movie.title}
      </h2>
    </section>
  );
};

export default HrMovieCard;
