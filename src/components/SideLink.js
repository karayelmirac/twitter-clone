import React from "react";

const SideLink = ({ Icon, name, active, onMenuItemClick }) => {
    const isActive = active === name
  return (
    <li className="group" onClick={() => {onMenuItemClick(name)}}>
      <a
        href={name.toLowerCase()}
        className="block cursor-pointer text-xl mb-2 pointer-events-none"
      >
        <div className="inline-block">
          <div
            className={`flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-4 pr-8 py-3
            ${isActive ? 'text-primary-base':''}
            `}
          >
            <span><Icon/></span>
            <span className="font-bold ml-4">{name}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SideLink;
