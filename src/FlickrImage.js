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
                <h3>{this.props.photo.title}</h3>
                <img src={this.imageSrc()} alt=""/>
            </div>
        );
    }
}
