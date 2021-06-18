import React, { useContext, useState, useEffect } from "react";
import { FilterContext } from "./context/Filters";
import Tag from "./subComp/Tag";
const API = "https://api.codingninjas.com/api/v3/event_tags";

const TagsArea = () => {
  const [tags, updateTags] = useState([]);
  const [firstEleventags, fillFirstEleven] = useState([]);
  const [showFull, update] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        if (response.status >= 300) throw new Error(response.statusText);

        const data = await response.json();
        const arr = data.data.tags;
        console.log(arr);
        updateTags(arr);
        fillFirstEleven(arr.slice(0, 11));
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
  const showRemainingTags = () => {
    update(true);
  };
  return (
    <div className='hidden md:block' style={{ padding: "10px 20px" }}>
      <h3>TAGS</h3>
      <div>
        {!showFull ? (
          <div>
            {firstEleventags.map((tag, index) => (
              <Tag key={index} name={tag} isSelected={toggleSelectTags}></Tag>
            ))}
          </div>
        ) : (
          <div>
            {tags.map((tag, index) => (
              <Tag key={index} name={tag} isSelected={toggleSelectTags}></Tag>
            ))}
          </div>
        )}
      </div>
      <div>
        {!showFull ? (
          <div
            className='cursor-pointer {showFull}:hidden'
            style={{ color: "rgb(250,115,40)" }}
            onClick={showRemainingTags}
          >
            Show 10 more tags
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default TagsArea;
