"use client"
import React,{useState} from "react";
import twitterLogo from "../images/twitter.svg";
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
} from "@/icons/Icon";
import SideLink from "@/components/SideLink";
import UserBox from "@/components/UserBox";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

const Sidebar = () => {

  const [active,setActive] = useState("Home")

  const handleMenuItemClick = (name,) => {
    setActive(name)
  }

  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between w-72 px-2 ">
      <div>
        <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full transform transition-colors duration-200 hover:bg-gray-lightest">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/32px-Logo_of_Twitter.svg.png"
            alt="Twitter Logo"
            className="w-5 h-5"
          />
        </div>
        <nav className="mb-4 ">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick} />
            ))}
          </ul>
        </nav>
        <button className="bg-primary-base transform transition-colors duration-200 hover:bg-primary-dark text-white rounded-full py-3 px-8 w-11/12 shadow-lg ">
          Tweet
        </button>
      </div>
      <div>
        <UserBox/>
      </div>
    </div>
  );
};

export default Sidebar;
