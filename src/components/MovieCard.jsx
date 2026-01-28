const MovieCard = ({ movie }) => {
  function onFavoriteButton() {
    alert("clicked");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt="Can't found" />
        <div className="movie-overlay">
          <button
            className="favorite-button"
            onClick={onFavoriteButton}
          ></button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};
export default MovieCard;
