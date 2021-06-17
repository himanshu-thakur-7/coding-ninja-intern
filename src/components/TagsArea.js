import React, { useContext, useState, useEffect } from "react";
import { FilterContext } from "./context/Filters";
import Tag from "./subComp/Tag";
const API = "https://api.codingninjas.com/api/v3/event_tags";

const TagsArea = () => {
  const [tags, updateTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        if (response.status >= 300) throw new Error(response.statusText);

        const data = await response.json();

        updateTags(data.data.tags);
      } catch (e) {
        console.log(e.Error);
      }
    };
    fetchData();
  }, []);

  const [Filters, updateFilters] = useContext(FilterContext);
  const toggleSelectTags = (tagName, isSelected) => {
    const TagsList = Filters.tagsList;
    if (isSelected) TagsList.push(tagName);
    else {
      const index = TagsList.indexOf(tagName);
      if (index > -1) {
        TagsList.splice(index, 1);
      }
    }
    updateFilters((prevFilters) => ({
      ...prevFilters,
      tagsList: TagsList,
    }));
    console.log(TagsList);
    console.log(Filters);
  };
  return (
    <div style={{ backgroundColor: "rgb(0,155,150)", padding: "10px 20px" }}>
      <ul>
        {tags.map((tag, index) => (
          <Tag key={index} name={tag} isSelected={toggleSelectTags}></Tag>
        ))}
      </ul>
    </div>
  );
};

export default TagsArea;
