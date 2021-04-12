const isTitleLong = (title) => {
  if (title.length >= 15) {
    let tempTitle = title.slice(0, 15);
    let shortCutTitle = `${tempTitle} ...`;
    return shortCutTitle;
  } else {
    return title;
  }
};

export default isTitleLong;
