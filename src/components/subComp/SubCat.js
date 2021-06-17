import React, { Component } from "react";
import {
  RewindIcon,
  FastForwardIcon,
  HeartIcon,
} from "@heroicons/react/outline";
class SubCat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
    };
  }
  renderIcon(icon) {
    switch (icon) {
      case "future":
        return <FastForwardIcon className='pl-3' style={{ height: "20px" }} />;

      case "past":
        return <RewindIcon className='pl-3' style={{ height: "20px" }} />;

      case "fav":
        return (
          <HeartIcon
            className='pl-3'
            style={{ height: "20px", color: "rgb(140,23,23)" }}
          />
        );
    }
  }

  toggleSelection = (e) => {
    const { isSelected } = this.state;
    let setVal = true;
    if (isSelected) {
      setVal = false;
    }
    this.setState({ isSelected: setVal });
    // console.log(typeof this.props.isSelected);
    this.props.isSelected(this.props.apiString, setVal);
  };

  render() {
    return (
      <div
        className='flex items-center cursor-pointer'
        onClick={this.toggleSelection}
        style={{
          backgroundColor: this.state.isSelected
            ? "rgb(255,255,255)"
            : "rgb(100,200,6)",
        }}
      >
        <p>{this.props.name}</p>
        <div> {this.renderIcon(this.props.icon)}</div>
      </div>
    );
  }
}
export default SubCat;
