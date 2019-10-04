import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import FlickrImage from "./FlickrImage";

export default class SearchResults extends PureComponent {
  static propTypes = {
    images: PropTypes.array
  };

  render() {
    return (
      <div className="search-image-results">
        {this.props.images.map(photo => (
            <FlickrImage key={photo.id} photo={photo}/>
        ))}
      </div>
    );
  }
}
