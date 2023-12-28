import { Component } from "react";
import Header from "../Header";
import UploadImage from "../UploadImage";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ImageStyling from "../ImageStylingList";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./index.css";

const stylingList = [
  {
    img:
      "https://res.cloudinary.com/du74u7bsh/image/upload/v1700852780/user_image_frame_3_bh4py3.png",
    uniq: 1,
  },
  {
    img:
      "https://res.cloudinary.com/du74u7bsh/image/upload/v1700852780/user_image_frame_1_m5aoiv.png",
    uniq: 2,
  },
  {
    img:
      "https://res.cloudinary.com/du74u7bsh/image/upload/v1700852780/user_image_frame_2_bbklkm.png",
    uniq: 3,
  },
  {
    img:
      "https://res.cloudinary.com/du74u7bsh/image/upload/v1700852780/user_image_frame_4_j8v7qe.png",
    uniq: 4,
  },
];

class Home extends Component {
  state = {
    isImage: false,
    selectedImage: "",
    cropClassName: "original-crop",
    useBtnIsCliked: false,
  };

  updateIsImage = (props) => {
    const { selectedFile } = props;
    this.setState((prevState) => ({
      isImage: !prevState.isImage,
    }));
    this.setState({ selectedImage: selectedFile });
  };

  getUniq = (uniq) => {
    switch (uniq) {
      case 1:
        this.setState({ cropClassName: "circle-crop" });
        break;
      case 2:
        this.setState({ cropClassName: "heart-crop" });
        break;
      case 3:
        this.setState({ cropClassName: "square-crop" });
        break;
      case 4:
        this.setState({ cropClassName: "rectangle-crop" });
        break;

      default:
        this.setState({ cropClassName: "original-crop" });
        break;
    }
  };

  closeBtn = () => this.setState({ isImage: false });
  originalCrop = () => {
    this.setState({ cropClassName: "original-crop" });
  };

  useThisImage = () => {
    const closeBtn = this.closeBtn;
    this.setState({ useThisImage: true });
    closeBtn();
  };

  render() {
    const { isImage, selectedImage, cropClassName, useThisImage } = this.state;

    console.log(isImage);
    return (
      <div className="home-main-container">
        <Header />

        {useThisImage ? (
          <img
            src={selectedImage}
            className={cropClassName}
            alt="selected one"
          />
        ) : (
          <UploadImage
            isImage={this.isImage}
            updateIsImage={this.updateIsImage}
          />
        )}
        {isImage && (
          <div>
            <Popup modal open={isImage}>
              <div className="pop-section">
                <button
                  className="close-btn"
                  type="button"
                  onClick={this.closeBtn}
                >
                  <IoCloseCircleOutline className="close-icon" />
                </button>
                <h1 className="main-heading">Uploaded Image</h1>
                <img
                  src={selectedImage}
                  alt="selected"
                  className={cropClassName}
                />
                <div className="btn-section">
                  <button
                    type="button"
                    className="original-btn"
                    onClick={this.originalCrop}
                  >
                    Original
                  </button>
                  {stylingList.map((each) => (
                    <ImageStyling
                      key={each.uniq}
                      details={each}
                      getUniq={this.getUniq}
                    />
                  ))}
                </div>
                <button className="use-this-btn" onClick={this.useThisImage}>
                  Use this image
                </button>
              </div>
            </Popup>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
