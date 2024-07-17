import userIcon from "@/Images/userIcon.svg";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import arrowUpRight from "@/Images/arrowUpRight.svg";


function Experts({ data, key }: { data: any; key: any }) {
  const [expertData, setExpertData] = useState<any>();
  useEffect(() => {
    setExpertData(data.metadata);
  }, [data]);
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <>
      <div className="flex flex-col gap-3 h-[495px] w-max overflow-scroll items-start justify-between p-4 shrink-0 rounded-[var(--Radius-Radius---M,24px)] bg-gray-100 hide-scrollbar">
        <div className="flex flex-row items-center justify-between w-full">
          <div
            className="flex flex-row gap-2 items-center border p-2 rounded-2xl"
            style={{ borderColor: "#E0E4EA" }}
          >
            <Image src={userIcon} alt="userIcon" height={15} width={15} />
            <h6 className="text-sm">AI Experts</h6>
          </div>
          <div>
            <Image
              src={arrowUpRight}
              alt="arrowUpRight"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="text-[#455166] text-lg font-[Inter]  font-normal leading-[120%] -tracking-[0.8px]">
          <h1 className="mb-2">Start conversation with your</h1>
          <h1 className="text-black">AI Experts</h1>
        </div>
        <div className="flex flex-col w-full">
          {expertData?.map((item: any) => (
            <div className="flex flex-row gap-4 p-3 hover:backdrop-blur-md hover:bg-gray-200 rounded-lg w-full group">
              <Image
                src={`${base_url + item.avatar}`}
                alt={item.expert_name}
                width={20}
                height={20}
                className="rounded-full transform group-hover:scale-110 transition-transform duration-200"
              />
              <Link href={`/chat/${item.id}`}>
                <h6 className="transform group-hover:scale-110 transition-transform duration-200">
                  {item.expert_name}
                </h6>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experts;
