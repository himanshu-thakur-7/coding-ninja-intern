import React, { Component } from "react";
import Tag from "./subComp/Tag";
const API = "https://api.codingninjas.com/api/v3/event_tags";

class TagsArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      size: 0,
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch(API);
      if (response.status >= 300) throw new Error(response.statusText);

      const data = await response.json();
      this.setState({ tags: data.data.tags, size: data.data.tags.length });

      console.log(this.state.size);
    } catch (e) {
      console.log(e.Error);
    }
  }
  render() {
    const { tags } = this.state;

    return (
      <div style={{ backgroundColor: "rgb(0,155,150)", padding: "10px 20px" }}>
        <ul>
          {tags.map((tag, index) => (
            <Tag key={index} name={tag}></Tag>
          ))}
        </ul>
      </div>
    );
  }
}

export default TagsArea;
