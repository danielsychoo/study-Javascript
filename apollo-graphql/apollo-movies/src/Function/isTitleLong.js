const isTitleLong = (title) => {
  if (title.length > 13) {
    let tempTitle = title.slice(0, 13);
    let shortCutTitle = `${tempTitle} ...`;
    return shortCutTitle;
  } else {
    return title;
  }
};

export default isTitleLong;
