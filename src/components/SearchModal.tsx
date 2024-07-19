import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import SearchIcon from "@/Images/SearchIcon.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import ArrowDown from "@/Images/ArrowDownIcon.svg";

const SearchModal = ({
  setShowSearch,
}: {
  setShowSearch: (show: boolean) => void;
}) => {
  const mockData = {
    data: [
      {
        name: "cyber security",
      },
      {
        name: "security",
      },
      {
        name: "Figma",
      },
    ],
  };

  return (
    <Dialog open={true} onOpenChange={setShowSearch}>
      <DialogContent>
        <DialogHeader>
          <div className="flex flex-col gap-6">
            <DialogTitle>Search</DialogTitle>
            <Input className="relative pl-8" placeholder="Search" />
            <Image
              src={SearchIcon}
              alt="SearchIcon"
              width={35}
              height={35}
              className="absolute top-[4.4rem]"
            />
            <div className="flex flex-row  items-center">
              <div className="flex flex-row gap-3 w-max">
                <Button className="relative border-1 border-button-secondary-stroke rounded-radius-100 bg-white border-gray-100 hover:bg-white text-black">
                  All Sources
                </Button>
                <Image
                  src={ArrowDown}
                  alt=""
                  className="relative right-[1.5rem]"
                />
              </div>
              <Button className="relative border-1 border-button-secondary-stroke rounded-radius-100 bg-white border-gray-100 hover:bg-white text-black ">
                All Experts Chats
              </Button>
              <Image
                src={ArrowDown}
                alt=""
                className="relative right-[0.8rem]"
              />
            </div>
            {mockData ? (
                <div className="flex flex-col gap-2">
                    {mockData.data.map((item: any) => (
                    <div className="flex flex-row">
                        <Image src={SearchIcon} alt="" />
                        <h6>{item.name}</h6>
                    </div>
                    ))}
                </div>
            ) : null}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
