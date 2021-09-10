import React from "react";
import "./post.css";
import Action from "../action";
import UserInfo from "./userinfo";

export default function Post() {
  return (
    <div className = "container mx-auto">
      <div className = "post-wrapper">
          <UserInfo />
          <Action />
      </div>
    </div>
  );
}
