"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import logo from "../Images/logo.svg";
import vectorline from "../Images/Vector.svg";
import companylogo from "../Images/companylogo.svg";
import HomeIcon from "../Images/HomeIcon.svg";
import chatIcon from "../Images/chatIcon.svg";
import TaskIcon from "../Images/TaskIcon.svg";
import ExploreIcon from "../Images/ExploreIcon.svg";
import FileIcon from "../Images/FileIcon.svg";
import settingIcon from "../Images/settingIcon.svg";
import Image from "next/image";
import FolderIcon from "../Images/FolderIcon.svg";
import UserIcon from "../Images/userIcon.svg";
import ArrowDownIcon from "../Images/ArrowDownIcon.svg";
import SearchIcon from "../Images/SearchIcon.svg";
import BellIcon from "../Images/NotificationIcon.svg";
import userImage from "../Images/userInfoIcon.svg";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import ChatModal from "./chat/chatmodal";
import ExploreModal from "./(explore)/exploremodal";
import { useRouter } from "next/navigation";
import { navLinks } from "@/utils/constants";
import ChatDropDown from "./chat/chatdropdown";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showModalexplore, setShowModalexplore] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleNavbarClick = (event: any, screen: string) => {
    console.log("clickkking");
    event.stopPropagation();
    switch (screen) {
      case "Home":
        setShowModal(false);
        router.push("/");
        break;
      case "Chats":
        setShowModal((prev) => !prev);
        break;
      case "Tasks":
        setShowModal(false);
      case "Explore":
        setShowModalexplore((prev) => !prev);
      case "FileVault":
        setShowModal(false);
      case "Setting":
        setShowModal(false);
      default:
        break;
    }
  };

  const handleClickEvent = (event: any) => {
    event.stopPropagation();
    setShowDropDown(!showDropDown);
  };

  const handleClickFolder = () => {
    setShowMenu((prev) => !prev);
  };

  const handleModalChange = (isOpen: boolean) => {
    setShowModalexplore(isOpen);
  };
  const handleModalexploreChange = (isOpen: boolean) => {
    setShowModalexplore(isOpen);
  };

  return (
    <html lang="en">
      <body className="bg-white hide-scrollbar">
        <Provider store={store}>
          <div className="flex flex-row w-full h-screen">
            <div
              className="flex flex-col p-5 gap-5 w-max"
              style={{ backgroundColor: "#F9F9FA" }}
            >
              <div className=" flex flex-row gap-3 w-max">
                <Image src={logo} alt="logo" />
                {showMenu ? (
                  <Image src={vectorline} alt="vector" width={3} />
                ) : null}
                {showMenu ? (
                  <Image src={companylogo} alt="companylogo" />
                ) : null}
              </div>
              {navLinks.map((nav: any) => (
                <div
                  key={nav.text}
                  className="flex flex-row gap-3 cursor-pointer"
                  onClick={(e) => handleNavbarClick(e, nav.text)}
                >
                  <Image src={nav.icon} alt={nav.alt} />
                  {showMenu ? <h5>{nav.text}</h5> : null}
                </div>
              ))}
            </div>
            <div className="relative">
              {showModal ? (
                <ChatModal
                  setShowModal={setShowModal}
                  onModalChange={handleModalChange}
                />
              ) : null}
              {showModalexplore ? (
                <ExploreModal
                  setShowModalexplore={setShowModalexplore}
                  onModalChangeexplore={handleModalexploreChange}
                />
              ) : null}
            </div>
            <div className="flex flex-col w-full overflow-hidden">
              <div className="px-10 py-5 ">
                <div className="flex flex-row gap-5 justify-between">
                  <Image
                    src={FolderIcon}
                    alt="FolderIcon"
                    onClick={handleClickFolder}
                    style={{ cursor: "pointer" }}
                  />
                  <div className="flex flex-row gap-2 items-center relative">
                    <Image
                      src={UserIcon}
                      alt="UserIcon"
                      width={20}
                      height={20}
                    />
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
                    <Image
                      src={userImage}
                      alt="UserImage"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full overflow-hidden">{children}</div>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
