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

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showModalexplore, setShowModalexplore] = useState(false);
  const [data, setData] = useState<any>();
  const [showMenu, setShowMenu] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLImageElement | null>(null);

  const handleClick = (event:any) => {
    event.stopPropagation();
    setShowModal((prev) => !prev);
   
  };
  const handleClickexplore = (event:any) => {
    event.stopPropagation();
    setShowModalexplore((prev) => !prev);
   
  };
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
        setShowModal(false);
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

  const handleModalChange = (isOpen:boolean) => {
    setShowModalexplore(isOpen);
  };
  const handleModalexploreChange = (isOpen:boolean) => {
    setShowModalexplore(isOpen);
  };

  return (
    <html lang="en">
      <body className="bg-white ">
        <Provider store={store}>
          <div className="flex flex-row w-screen">
            <div
              className={`flex flex-col p-5 gap-5 h-screen ${
                showMenu ? "w-[250px]" : "w-[70px]"
              }`}
              style={{ backgroundColor: "#F9F9FA" }}
            >
              <div className=" flex flex-row gap-3">
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
             <ChatModal setShowModal={setShowModal} onModalChange={handleModalChange}  />
            ) : null}
                 {showModalexplore ? (
             <ExploreModal setShowModalexplore={setShowModalexplore} 
             onModalChangeexplore={handleModalexploreChange}  />
            ) : null}
          </div>
          <div className="flex flex-col w-full">
            <div className="px-10 py-5 ">
              <div className="flex flex-row gap-5 justify-between">
                <Image
                  src={FolderIcon}
                  alt="FolderIcon"
                  onClick={handleClickFolder}
                  style={{ cursor: "pointer" }}
                />
                <div className="flex flex-row gap-2 items-center relative">
                  <Image src={UserIcon} alt="UserIcon"  />
                  <div>
                    <h5 >AI expert</h5>
                    {showDropDown ? (
                      <div
                        ref={modalRef}
                        className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-lg p-5 w-max"
                      >
                        <div className="flex flex-col items-start gap-1 self-stretch">
                          {data &&
                            data.map((item: any) => (
                              <div className="flex flex-row px-2 py-1 items-center gap-2 self-stretch">
                                <Image
                                  src={`${process.env.NEXT_PUBLIC_BASE_URL + item.avatar}`}
                                  alt={`${item.expert_name}`}
                                  className="rounded-full"
                                  width={15}
                                  height={15}
                                />
                                <Link href={`/chat/${item.id}`}>
                                  <h5  onClick={(event) => handleClickEvent(event)}>
                                    {item.expert_name}
                                  </h5>
                                </Link>
                              </div>
                            ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <Image
                    src={ArrowDownIcon}
                    alt="ArrowDownIcon"
                    style={{ cursor: "pointer" }}
                    onClick={(event) => handleClickEvent(event)}
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

            <div className="flex-1 w-full h-full">
              {children}
            </div>
          </div>
        </div>
              </Provider>
      </body>
    </html>
  );
}
