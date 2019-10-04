import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class SearchResults extends PureComponent {
    static propTypes = {
        photo: PropTypes.object
    };

    imageSrc = () => {
        return `https://farm${this.props.photo.farm}.static.flickr.com/${this.props.photo.server}/${this.props.photo.id}_${this.props.photo.secret}.jpg`
    }

    render() {
        return (
            <div className="flickr-image">
                <img src={this.imageSrc()} alt=""/>
            </div>
        );
    }
}
