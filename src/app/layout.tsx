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
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<any>();
  const [showMenu, setShowMenu] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLImageElement | null>(null);
  
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjEwOTE3NzEsIm5iZiI6MTcyMTA5MTc3MSwianRpIjoiNzQyYTExYjgtMmJmMi00NDQzLTkwZjItZjQwOWMxMGJjNWExIiwiZXhwIjoxNzIxMTc4MTcxLCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.DmNH0jxyix9N61bDiSjIUiXmleNiT_AUNZE-Erh4g7Q";

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}experts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const handleClick = (event:any) => {
    event.stopPropagation();
    setShowModal((prev) => !prev);
  };

  const handleClickEvent = (event: any) => {
    event.stopPropagation();
    setShowDropDown(!showDropDown);
  };

  const handleClickFolder = () => {
    setShowMenu((prev) => !prev);
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
        <div className="flex flex-row w-screen">
          <div className="flex flex-col p-5 gap-5 h-full">
            <div className=" flex flex-row gap-2 max-h-max">
              <Image src={logo} alt="logo" />
              <Image src={vectorline} alt="vector" width={3} />
              {showMenu ? <Image src={companylogo} alt="companylogo" /> : null}
            </div>
            <div className="flex flex-row gap-3">
              <Image src={HomeIcon} alt="Homeicon" />
              <Link href="/">{showMenu ? <h5>Home</h5> : null}</Link>
            </div>
            <div className="flex flex-row gap-3">
              <Image src={chatIcon} alt="Chaticon" />
              {showMenu ? (
                <h5 onClick={(event)=>handleClick(event)} style={{ cursor: "pointer" }}>
                  Chats
                </h5>
              ) : null}
            </div>
            <div className="flex flex-row gap-3">
              <Image src={TaskIcon} alt="Taskicon" />
              {showMenu ? <h5>Tasks</h5> : null}
            </div>
            <div className="flex flex-row gap-3">
              <Image src={ExploreIcon} alt="ExploreIcon" />
              {showMenu ? <h5>Explore</h5> : null}
            </div>
            <div className="flex flex-row gap-3">
              <Image src={FileIcon} alt="FilevaultIcon" />
              {showMenu ? <h5>FileVault</h5> : null}
            </div>
            <div className="flex flex-row gap-3">
              <Image src={settingIcon} alt="SettingIcon" />
              {showMenu ? <h5>Settings</h5> : null}
            </div>
          </div>
          <div className="relative">
            {showModal ? (
              <div className="absolute top-0 left-0 mt-1 bg-white shadow-md rounded-lg p-5 z-10 w-[350px] ">
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <div
                    className="rounded-full border"
                    style={{
                      borderColor: "var(--button-secondary-stroke, #758399)",
                    }}
                  >
                    <span className="py-1 px-3 text-sm">
                      Manage AI Experts
                    </span>
                  </div>
                  <div>
                    <h5 className="text-xs font-normal leading-tight custom-font-family custom-letter-spacing text-custom-color">
                      Select AI Expert
                    </h5>
                  </div>
                  {data?.map((item: any) => (
                    <div className="flex justify-between items-center">
                      <div className="flex flex-row w-max px-2 py-1 items-center gap-2 self-stretch">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_URL + item.avatar}`}
                          alt={`${item.expert_name}`}
                          className="rounded-full"
                          width={15}
                          height={15}
                        />
                        <Link href={`/chat/${item.id}`}>
                          <h5 onClick={(event)=>handleClick(event)}>{item.expert_name}</h5>
                        </Link>
                      </div>
                      <div className=" text-text-secondary overflow-hidden text-right truncate font-custom text-sm font-normal leading-tight tracking-tight-custom text-custom-secondary">
                        {item.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
              <Provider store={store}>{children}</Provider>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
