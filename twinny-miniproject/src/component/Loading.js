import Loader from "react-loader-spinner";
import "../scss/Loading.scss";

const Loading = () => {
  return (
    <div id="loading-wrapper">
      <Loader
        type="Oval"
        color="#5f9ea0"
        height={70}
        width={70}
        timeout={60000}
      />
    </div>
  );
};

export default Loading;
