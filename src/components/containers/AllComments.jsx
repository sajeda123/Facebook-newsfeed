import React from "react";
import "./allCommentLists.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrash);

function AllComments (props) {
  const items = props.items;
  const itemLists = items.map(( item ) => {
    return (
      <div className = "list" key = {item.key}>
        <p>
          {" "}
          { item.text }
          <span>
            <FontAwesomeIcon
              icon = "trash"
              className = "faicon"
              onClick = {() => props.deleteComment ( item.key ) }
            />
          </span>
        </p>
      </div>
    );
  });
  return <p>{ itemLists }</p>;
}

export default AllComments;
