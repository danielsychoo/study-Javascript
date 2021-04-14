const handleGenres = (genresArray) => {
  let lastGenre = genresArray.slice(-1);
  const genresExceptLastGenre = genresArray.slice(0, genresArray.length - 1);
  const handleTempGenres = genresExceptLastGenre.map((genre) => `${genre},`);
  const refinedGenres = handleTempGenres.concat(lastGenre);

  return refinedGenres;
};

export default handleGenres;
