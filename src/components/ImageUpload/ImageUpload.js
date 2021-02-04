import React from "react";
class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `your cloudName`,
        uploadPreset: `your uploadPreset`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info.url);
          // Return url to server when it is running correctly
        }
      }
    );
    widget.open();
  };
  render() {
    return (
      <div>
        <button onClick={this.showWidget}> Upload Image </button>
      </div>
    );
  }
}
export default ImageUpload;
