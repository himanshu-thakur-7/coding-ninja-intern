import React, { Component } from "react";

class Tag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
    };
  }
  toggleSelection = (e) => {
    const { isSelected } = this.state;
    let setVal = true;
    if (isSelected) {
      setVal = false;
    }
    this.setState({ isSelected: setVal });

    this.props.isSelected(this.props.name, setVal);
  };
  render() {
    return (
      <li
        className=' bg-yellow-400  mt-2 mb-2 p-4 cursor-pointer'
        onClick={this.toggleSelection}
        style={{
          backgroundColor: this.state.isSelected
            ? "rgb(255,255,255)"
            : "yellow",
        }}
      >
        {this.props.name}
      </li>
    );
  }
}
export default Tag;
