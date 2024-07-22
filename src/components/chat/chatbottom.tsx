import addIcon from "@/Images/addIcon.svg";
import sendIcon from "@/Images/sendIcon.svg";
import Image from "next/image";
import vectorIcon from "@/Images/Vector.svg";
import { Input } from "../ui/input";

function ChatBottom({textref, handleSendMessage}:{textref:any, handleSendMessage:any}){
return(
    <div className="flex relative mb-2 items-center">
    <Input
      type="text"
      className="rounded-lg relative h-12 pl-14 focus:outline-none focus:border-none focus:ring-0"
      placeholder="Ask or search for anything. Use @ to mention AI expert or / to run a task"
      style={{ backgroundColor: "#f9f9fa" }}
      ref={textref}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          handleSendMessage();
        }
      }}
    />

    <Image
      src={addIcon}
      alt="addIcon"
      height={40}
      width={40}
      className="absolute"
    />
    <Image
      src={vectorIcon}
      alt="vectorIcon"
      height={2}
      width={2}
      className="absolute left-10"
    />
    <Image
      src={sendIcon}
      alt="sendIcon"
      height={40}
      width={40}
      className="absolute right-2 cursor-pointer"
      onClick={handleSendMessage}
    />
  </div>
)
}

export default ChatBottom;