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
    console.log(icon);
    switch (icon) {
      case "future":
        return <FastForwardIcon style={{ height: "20px" }} />;

      case "past":
        return <RewindIcon className='ht-6 pr-3' style={{ height: "20px" }} />;

      case "fav":
        return (
          <HeartIcon
            className='ht-6 pr-3'
            style={{ height: "200px", color: "rgb(140,23,23)" }}
          />
        );
    }
  }
  render() {
    return (
      <div className='flex items'>
        <p>{this.props.name}</p>
        <div> {this.renderIcon(this.props.name)}</div>
      </div>
    );
  }
}
export default SubCat;

// {
//   this.props.name;
// }
