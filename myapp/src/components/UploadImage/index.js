import { useRef } from "react";
import { FaFileUpload } from "react-icons/fa";

import "./index.css";

const UploadImage = (props) => {
  const { isImage, updateIsImage } = props;
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
    updateIsImage(selectedFile);
  };
  return (
    <div className="upload-main-container">
      <p className="para">Upload Image</p>
      <FaFileUpload className="upload-icon" />
      <button type="button" className="button" onClick={handleButtonClick}>
        Choose from Device
      </button>
      <input
        type="file"
        accept="image/*"
        id="getFileFromDevice"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      {isImage && <p className="para">Upload Image</p>}
    </div>
  );
};

export default UploadImage;
