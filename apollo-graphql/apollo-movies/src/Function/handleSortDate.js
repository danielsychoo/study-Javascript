const handleSortDate = (comments) => {
  comments.sort((a, b) => {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
    return 0;
  });

  return comments;
};

export default handleSortDate;
