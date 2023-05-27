import React from "react";
import TweetItem from "./TweetItem";

const TweetList = ({ docArr }) => {
  return (
    <div>
      {docArr.map((doc, index) => {
        return <TweetItem {...doc} key={index} />;
      })}
    </div>
  );
};

export default TweetList;
