import React, { Component } from "react";

class Tag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
    };
  }
  render() {
    return <li className=' bg-yellow-400  mt-2 mb-2 p-4'>{this.props.name}</li>;
  }
}
export default Tag;
