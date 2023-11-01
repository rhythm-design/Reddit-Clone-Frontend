import React, { Component } from 'react';
import api from '../api';

class ImageDisplay extends Component {
  constructor() {
    super();
    this.state = {
      imageData: null,
    };
  }

  componentDidMount() {
    const { id, format } = this.props;

    // Make an Axios GET request to your API endpoint with the dynamic id
    api.get(`/post/image/${id}`, { responseType: 'arraybuffer' })
      .then((response) => {
        const base64Image = btoa(
          new Uint8Array(response.data)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );

        this.setState({ imageData: base64Image });
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }

  render() {
    const { imageData } = this.state;
    const { format } = this.props;

    return (
      <div>
        {imageData && (
          <img
            src={`data:image/${format};base64,${imageData}`} // Use the specified format
            alt="API Image"
          />
        )}
      </div>
    );
  }
}

export default ImageDisplay;
