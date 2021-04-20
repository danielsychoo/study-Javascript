const countPageLength = (num) => {
  const boardPageLength = Math.ceil(num / 10);
  let boardPages = [];
  for (let i = 1; i <= boardPageLength; i++) {
    boardPages.push(i);
  }

  return boardPages;
};

export default countPageLength;
