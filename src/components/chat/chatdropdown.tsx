import { useGetExpertsQuery } from "@/store/api/chat"
import Image from "next/image"
import Link from "next/link"

function ChatDropDown({setShowDropDown}:{setShowDropDown:(show: boolean) => void}){
    const handleClickEvent = (event: any) => {
        event.stopPropagation();
        setShowDropDown(false)
      };

    const {data} = useGetExpertsQuery({}) 
return(
    <div
    className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-lg p-5 w-max"
  >
    <div className="flex flex-col items-start gap-1 self-stretch ">
      {data &&
        data.map((item: any) => (
          <div key={item.id} className="flex flex-row px-2 py-1 items-center gap-2 self-stretch hover:backdrop-blur-md hover:bg-gray-200 rounded-lg">
            <Image
              src={`${
                process.env.NEXT_PUBLIC_BASE_URL +
                item.avatar
              }`}
              alt={`${item.expert_name}`}
              className="rounded-full"
              width={15}
              height={15}
            />
            <Link href={`/chat/${item.id}`}>
              <h5
                onClick={(event) =>
                  handleClickEvent(event)
                }
              >
                {item.expert_name}
              </h5>
            </Link>
          </div>
        ))}
    </div>
  </div>
)
}

export default ChatDropDown