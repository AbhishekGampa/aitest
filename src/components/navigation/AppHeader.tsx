import Image from "next/image";
import React, { useState } from "react";
import FolderIcon from "@/Images/FolderIcon.svg";
import UserIcon from "@/Images/userIcon.svg";
import ArrowDownIcon from "@/Images/ArrowDownIcon.svg";
import SearchIcon from "@/Images/SearchIcon.svg";
import BellIcon from "@/Images/NotificationIcon.svg";
import ChatDropDown from "@/components/chat/chatdropdown";
import userImage from "@/Images/userInfoIcon.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/store/menu";
import SearchModal from "./SearchModal";

type AppHeaderProps = {
  handleClickFolder: () => void;
  handleClickArrow: (event: any) => void;
  setShowDropDown: (value: boolean) => void;
  showDropDown: boolean;
};
const AppHeader = ({
  handleClickFolder,
  handleClickArrow,
  setShowDropDown,
  showDropDown,
}: AppHeaderProps) => {
  // const dispatch = useDispatch();
  const handleClick = () => {
    handleClickFolder();
    // dispatch(toggleMenu());
  };
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const handleClickSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div className="px-10 py-5 max-md:px-5">
      <div className="flex flex-row gap-5 justify-between">
        <Image
          src={FolderIcon}
          alt="FolderIcon"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
        <div className="flex flex-row gap-2 items-center relative">
          <Image src={UserIcon} alt="UserIcon" width={20} height={20} />
          <div className="max-md:text-[9px]">
            <h5>AI expert</h5>
            {showDropDown ? (
              <ChatDropDown setShowDropDown={setShowDropDown} />
            ) : null}
          </div>
          <Image
            src={ArrowDownIcon}
            alt="ArrowDownIcon"
            style={{ cursor: "pointer" }}
            onClick={(event) => handleClickArrow(event)}
            width={10}
            height={10}
          />
        </div>
        <div className="flex flex-row gap-6 ">
          <Image
            src={SearchIcon}
            alt="SearchIcon"
            className="max-md:w-5 cursor-pointer"
            onClick={handleClickSearch}
          />
          {showSearch ? <SearchModal setShowSearch={setShowSearch} /> : null}
          <Image src={BellIcon} alt="BellIcon" className="max-md:w-5" />
          <Image
            src={userImage}
            alt="UserImage"
            className="rounded-full max-md:w-5"
          />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
