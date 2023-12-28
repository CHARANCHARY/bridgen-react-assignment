import "./index.css";

const ImageStyling = (props) => {
  const { details, getUniq } = props;
  const { uniq, img } = details;

  const updateUniq = () => {
    getUniq(uniq);
  };
  return (
    <button className="style-btn" onClick={updateUniq}>
      <img src={img} alt="styling" className="btn-img" />
    </button>
  );
};

export default ImageStyling;
