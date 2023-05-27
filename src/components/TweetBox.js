"use client";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import {
  EmojiIcon,
  GIFIcon,
  ImageIcon,
  PollIcon,
  ScheduleIcon,
} from "@/icons/Icon";
import db from "../firebase";
const TweetBox = () => {
  const [content, setContent] = useState("");
  console.log(content);

  const sendTweet = async () => {
    try {
        // Collection created
      const docRef = await addDoc(collection(db, "feed"), {
        displayName: " Miraç Karayel",
        userName: "@MiracKarayel",
        content,
        avatar:
          "https://pbs.twimg.com/profile_images/1465223256013774848/a6c2Boi4_400x400.jpg",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="flex flex-col flex-1 mt-2 px-2 w-max">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's Happening"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div className="flex items-center justify-between">
        <div className="flex -ml-3 ">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ImageIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <GIFIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <PollIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>
        </div>
        <button
          className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
