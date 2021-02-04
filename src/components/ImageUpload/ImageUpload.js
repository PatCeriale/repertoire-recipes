import React from "react";
import { Button } from "react-bootstrap";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
        uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info.url);
          // Return url to server when it is running correctly, setState?
        }
      }
    );
    widget.open();
  };
  render() {
    return (
      <div className="ImageUpload">
        <Button onClick={this.showWidget}>
          <i className="far fa-images"></i> Upload Image{" "}
        </Button>
      </div>
    );
  }
}
export default ImageUpload;
