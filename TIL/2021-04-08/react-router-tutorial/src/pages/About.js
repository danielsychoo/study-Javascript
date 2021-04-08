import React from "react";
import queryString from "query-string";

const About = ({ location, match }) => {
  console.log(location);
  console.log(match);

  const query = queryString.parse(location.search);
  console.log(query);

  const detail = query.detail === "true"; // 해당 조건이

  return (
    <div>
      <h2>About {match.params.name}</h2>
      {detail && "detail: aaaaaa"}
    </div>
  );
};

export default About;
