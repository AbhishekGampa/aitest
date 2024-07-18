import Image from "next/image";
import React from "react";
import FolderIcon from "../Images/FolderIcon.svg";
import UserIcon from "../Images/userIcon.svg";
import ArrowDownIcon from "../Images/ArrowDownIcon.svg";
import SearchIcon from "../Images/SearchIcon.svg";
import BellIcon from "../Images/NotificationIcon.svg";
import ChatDropDown from "@/app/chat/chatdropdown";
import userImage from "../Images/userInfoIcon.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/features/ui/slice";

type AppHeaderProps = {
  handleClickFolder: () => void;
  handleClickEvent: (event: any) => void;
  setShowDropDown: (value: boolean) => void;
  showDropDown: boolean;
};
const AppHeader = ({
  handleClickFolder,
  handleClickEvent,
  setShowDropDown,
  showDropDown,
}: AppHeaderProps) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    handleClickFolder();
    dispatch(toggleMenu());
  };
  return (
    <div className="px-10 py-5 ">
      <div className="flex flex-row gap-5 justify-between">
        <Image
          src={FolderIcon}
          alt="FolderIcon"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
        <div className="flex flex-row gap-2 items-center relative">
          <Image src={UserIcon} alt="UserIcon" width={20} height={20} />
          <div>
            <h5>AI expert</h5>
            {showDropDown ? (
              <ChatDropDown setShowDropDown={setShowDropDown} />
            ) : null}
          </div>
          <Image
            src={ArrowDownIcon}
            alt="ArrowDownIcon"
            style={{ cursor: "pointer" }}
            onClick={(event) => handleClickEvent(event)}
            width={10}
            height={10}
          />
        </div>
        <div className="flex flex-row gap-6">
          <Image src={SearchIcon} alt="SearchIcon" />
          <Image src={BellIcon} alt="BellIcon" />
          <Image src={userImage} alt="UserImage" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
