import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class SearchInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static propTypes = {
    onSearch: PropTypes.func
  };
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(){
    this.props.onSearch(this.state.value);
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input value={this.state.value} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>go</button>
        </div>
      </div>
    );
  }
}
