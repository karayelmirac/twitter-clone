import Divider from "@/components/Divider";
import TweetBox from "@/components/TweetBox";
import { PopulerIcon } from "@/icons/Icon";
import React  from "react";
import db from "../firebase";
import {doc, collection, getDocs ,getDocsFromServer} from "firebase/firestore";
import TweetList from "@/components/TweetList";
const Content =  () => {




  return (
    <main className=" flex-1 flex flex-col border-l border-r border-gray-extraLight">
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
        <span className="font-bold text-xl text-gray-900 s">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex space-x-4 px-4 py-3 ">
        <img
          className="w-11 h-11 rounded-full"
          src="https://pbs.twimg.com/profile_images/1465223256013774848/a6c2Boi4_400x400.jpg"
          alt="profile"
        />
        <TweetBox />
      </div>
      <Divider />

      <TweetList/>
    </main>
  );
};

export default Content;
