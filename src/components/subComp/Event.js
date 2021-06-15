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
    console.log(icon);
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
        return <AcademicCapIcon className='ht-6 pr-3' style={{ height: "20px" }} />;
      case "web":
        return <GlobeAltIcon className='ht-6 pr-3' style={{ height: "20px" }} />;

      default:
        break;
    }
  }
  render() {
    return (
      <div className='sm:pl-4 pr-4 flex '>
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
