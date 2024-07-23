import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  description: string;
  appId: string;
  secretKey: string;
  rating: number;
  reviewsCount: number;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  title,
  image,
  description,
  appId,
  secretKey,
  rating,
  reviewsCount,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl mx-auto p-8 rounded-lg shadow-lg">
        <DialogHeader className="flex items-center space-x-2">
          <div>
            <img
              src={image}
              alt={title}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full mt-2"
            />
          </div>
          <div>
            <div className="text-[25px] font-light -mb-2">About</div>
            <DialogTitle className="text-2xl font-semibold">
              {title}
            </DialogTitle>
          </div>
        </DialogHeader>
        <DialogDescription className="text-gray-500 w-[26vw] text-xs">
          {description}
        </DialogDescription>
        <div className="text-gray-600 ">Description</div>
        <div className="text-sm flex space-x-8 text-gray-900 ">
          <p>need to internet access</p>
          <p>description</p>
        </div>
        <div className="flex space-x-4 w-full ">
          <div className=" items-center justify-between">
            <span className="font-medium">App ID</span>
            <Input value={appId} readOnly className="flex-1 w-[20vw]" />
          </div>
          <div className="items-center justify-between">
            <span className="font-medium">Secret Key</span>
            <Input value={secretKey} readOnly className="flex-1 w-[20vw]" />
          </div>
        </div>
        <div className="h-[1px] bg-gray-200"></div>
        <h3 className="font-medium  text-lg">{title}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-blue-500 font-semibold">&#9733; {rating}</span>
          <span className="text-gray-500">({reviewsCount} reviews)</span>
        </div>
        <div className="flex mt-4 space-x-4 text-sm">
          <button className="px-4  border border-gray-300 rounded-full text-gray-700">
            Leave a review
          </button>
          <button className="px-4  border border-gray-300 rounded-full text-gray-700">
            All reviews
          </button>
        </div>

        <DialogFooter className="mt-8 flex justify-between">
          <button className="px-4  bg-gray-100 rounded-full text-sm">As AI Expert</button>
          <Button onClick={onClose} className="button-primary px-4 py-2 rounded-md">Connect</Button>
        </DialogFooter>
        <Button
          variant="ghost"
          className="absolute top-4 right-4"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ModalComponent;
