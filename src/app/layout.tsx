"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Provider } from "react-redux";
import { store } from "@/store";
import ChatModal from "../components/chat/chatmodal";
import ExploreModal from "./(explore)/exploremodal";
import { useRouter } from "next/navigation";
import { navLinks } from "@/utils/constants";
import ChatDropDown from "../components/chat/chatdropdown";
import SideNavBar from "@/components/navigation/SideNavBar";
import AppHeader from "@/components/navigation/AppHeader";
import PageWrapper from "@/components/navigation/PageWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showsettingsmodal, setShowsettingsmodal] = useState(false);
  console.log(showsettingsmodal);
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
        router.push("/tasks");
        setShowModal(false);
        break;
      case "Explore":
        setShowModalexplore((prev) => !prev);
      case "FileVault":
        setShowModal(false);
        break;
      case "Settings":
        setShowsettingsmodal((prev) => !prev);
        break;
      default:
        break;
    }
  };

  const handleClickArrow = (event: any) => {
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
  const handleModalsettingsChange = (isOpen: boolean) => {
    setShowsettingsmodal(isOpen);
  };

  return (
    <html lang="en">
      <body className="bg-white h-screen w-screen hide-scrollbar">
        <Provider store={store}>
          <div className="h-full w-full flex flex-row">
            <div className="h-full">
              <SideNavBar
                showMenu={showMenu}
                handleNavbarClick={handleNavbarClick}
              />
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
            </div>
            <div className="flex flex-col flex-1 overflow-x-hidden">
              <AppHeader
                handleClickArrow={handleClickArrow}
                handleClickFolder={handleClickFolder}
                setShowDropDown={setShowDropDown}
                showDropDown={showDropDown}
              />
              <PageWrapper>{children}</PageWrapper>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
