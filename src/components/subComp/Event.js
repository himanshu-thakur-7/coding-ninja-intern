import React, { Component } from "react";
import {
  CalendarIcon,
  DesktopComputerIcon,
  CodeIcon,
  AcademicCapIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";
class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
    };
  }
  renderIcon(icon) {
    switch (icon) {
      case "calendar":
        return (
          <CalendarIcon className='ht-6 pr-3' style={{ height: "20px" }} />
        );

      case "desktop":
        return (
          <DesktopComputerIcon
            className='ht-6 pr-3'
            style={{ height: "20px" }}
          />
        );
      case "code":
        return <CodeIcon className='ht-6 pr-3' style={{ height: "20px" }} />;
      case "academic":
        return (
          <AcademicCapIcon className='ht-6 pr-3' style={{ height: "20px" }} />
        );
      case "web":
        return (
          <GlobeAltIcon className='ht-6 pr-3' style={{ height: "20px" }} />
        );

      default:
        break;
    }
  }

  toggleSelect = (e) => {
    const { isSelected } = this.state;

    let setVal = true;
    if (isSelected) {
      setVal = false;
    }

    this.setState({ isSelected: setVal });
    console.log(isSelected);
    console.log(this.props.children);
    this.props.isSelected(this.props.apiString, this.props.string, setVal);
  };

  render() {
    return (
      <div
        className='sm:pl-4 pr-4 flex cursor-pointer'
        onClick={this.toggleSelect.bind(this)}
        style={{
          backgroundColor: this.state.isSelected
            ? "rgb(255,255,255)"
            : "rgb(234,200,50)",
        }}
      >
        <div> {this.renderIcon(this.props.icon)} </div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
export default Event;

// {
//   this.props.name;
// }
