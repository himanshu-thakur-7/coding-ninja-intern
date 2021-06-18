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
      <div
        className=' mt-2 mb-2 p-4 cursor-pointer'
        onClick={this.toggleSelection}
        style={{
          fontSize: "14px",
          backgroundColor: this.state.isSelected
            ? "rgb(250,115,40)"
            : "rgb(238,238,238)",
          color: this.state.isSelected ? "rgb(255,255,255)" : "rgb(66,66,66)",
        }}
      >
        {this.props.name}
      </div>
    );
  }
}
export default Tag;
