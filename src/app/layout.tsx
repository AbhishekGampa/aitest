"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import logo from "../Images/logo.svg";
import vectorline from "../Images/Vector.svg";
import companylogo from "../Images/companylogo.svg";
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
import ChatDropDown from "./chat/chatdropdown";
import { navLinks } from "@/utils/constants";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<any>();
  const [showMenu, setShowMenu] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLImageElement | null>(null);

  const handleNavbarClick = (event: any, screen: string) => {
    event.stopPropagation();
    switch (screen) {
      case "Home":
        router.push("/")
        break;
      case "Chats":
        setShowModal((prev) => !prev);
        break;
      default:
        break;
    }
  };

  const handleClickEvent = (event: any) => {
    event.stopPropagation();
    setShowDropDown(!showDropDown);
    setShowModal(false);
  };

  const handleClickFolder = () => {
    setShowMenu((prev) => !prev);
  };

  const handleModalChange = (isOpen: boolean) => {
    setShowModal(isOpen);
  };

  const handleClickOutside = (event: any) => {
    if (
      (modalRef.current && !modalRef.current.contains(event.target)) ||
      (buttonRef.current && !buttonRef.current.contains(event.target))
    ) {
      setShowModal(false);
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <html lang="en">
      <body className="bg-white ">
        <Provider store={store}>
          <div className="flex flex-row w-screen">
            <div className="flex flex-col p-5 gap-5 h-full">
              <div className=" flex flex-row gap-3">
                <Image src={logo} alt="logo" />
                <Image src={vectorline} alt="vector" width={3} />
                {showMenu ? (
                  <Image src={companylogo} alt="companylogo" />
                ) : null}
              </div>
              {navLinks.map((nav:any) => (
                <div
                  className="flex flex-row gap-3 cursor-pointer"
                  onClick={(e) => handleNavbarClick(e, nav.text)}
                >
                  <Image src={nav.icon} alt={nav.alt} />
                  {showMenu ? <h5>{nav.text}</h5> : null}
                </div>
              ))}
            </div>
            <div className="relative hide-scrollbar">
              {showModal ? (
                <ChatModal
                  setShowModal={setShowModal}
                  onModalChange={handleModalChange}
                />
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
                    <Image
                      src={UserIcon}
                      alt="UserIcon"
                      height={18}
                      width={18}
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
                      height={8}
                      width={8}
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

              <div className="flex-1 w-full h-full">{children}</div>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
