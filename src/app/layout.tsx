"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import ChatModal from "./chat/chatmodal";
import ExploreModal from "./(explore)/exploremodal";
import { useRouter } from "next/navigation";
import { navLinks } from "@/utils/constants";
import ChatDropDown from "./chat/chatdropdown";
import SideNavBar from "@/components/SideNavBar";
import AppHeader from "@/components/AppHeader";
import PageWrapper from "@/components/PageWrapper";

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

  return (
    <html lang="en">
      <body className="bg-white h-screen w-screen hide-scrollbar">
        <Provider store={store}>
          <div className="h-full w-full flex flex-row">
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
            <div className="flex flex-col w-full">
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
