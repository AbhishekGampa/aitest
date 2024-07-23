import Image from "next/image";
import Lottie from "lottie-react";
import loadingAnimationData from "../../../public/lottie/loadinganimation.json";
import chatLoadingAnimationData from "../../../public/lottie/chatloadinganimation.json";

function ChatHistory({
  message,
  expertData,
  messagesEndRef,
  socketResponse,
  socketMessage,
}: {
  message: any;
  expertData: any;
  messagesEndRef: any;
  socketResponse: boolean;
  socketMessage: string[];
}) {
  console.log("socketResponse: ", socketResponse);
  console.log("socketMessage: ", socketMessage);
  console.log("messagesEndRef: ", messagesEndRef?.current?.value);
  console.log("ChatHistory message:", message);

  return (
    <>
      {message.length > 0 ? (
        <>
          <div className="flex flex-col overflow-scroll gap-3 pr-10 pl-7 pb-32 mt-7">
            {message?.map((item: any, i: number) => (
              <div key={i} className="flex flex-col gap-9">
                {item?.role === "user" ? (
                  <div className="flex justify-end">
                    <div className="w-max">
                      <div
                        key={item.id}
                        className="flex-grow overflow-auto hide-scrollbar flex rounded-radius-100 bg-gray-100 w-max p-3"
                        style={{ justifyContent: "end" }}
                      >
                        <div>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {item?.role === "expert" ? (
                  <div className="flex flex-col">
                    <div>
                      <div className="flex flex-row gap-3">
                        <div className="flex gap-3 items-center">
                          <Image
                            src={`${
                              process.env.NEXT_PUBLIC_BASE_URL +
                              expertData?.avatar
                            }`}
                            alt={`${expertData?.expert_name}`}
                            className="rounded-full"
                            width={15}
                            height={15}
                          />
                          <div className="text-xs font-normal leading-tight custom-font-family custom-letter-spacing text-custom-color">
                            {expertData?.expert_name}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 messages">
                        <div className="pl-7">
                          <p className="message whitespace-pre-wrap">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {i === message.length - 1 && socketResponse ? (
                  <div className="flex flex-col">
                    <div>
                      <div className="flex flex-row gap-3">
                        <div className="flex gap-3 items-center">
                          <Image
                            src={`${
                              process.env.NEXT_PUBLIC_BASE_URL +
                              expertData?.avatar
                            }`}
                            alt={`${expertData?.expert_name}`}
                            className="rounded-full"
                            width={15}
                            height={15}
                          />
                          <div className="text-xs font-normal leading-tight custom-font-family custom-letter-spacing text-custom-color">
                            {expertData?.expert_name}
                          </div>
                        </div>
                      </div>
                      <div className="pl-4">
                        <div style={{ width: "55px", height: "1px" }}>
                          <Lottie
                            animationData={chatLoadingAnimationData}
                            loop={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}

            {/* for rendering realtime bot response */}
            {socketMessage.length > 0 ? (
              <div className="flex flex-col gap-2 messages">
                <div className="pl-7">
                  <p className="message whitespace-pre-wrap">
                    {socketMessage.map((message) => (
                      <span key={message}>{message}</span>
                    ))}
                  </p>
                </div>
              </div>
            ) : null}
            <div ref={messagesEndRef} />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center h-full">
            <Lottie animationData={loadingAnimationData} loop={true} />
          </div>
        </>
      )}
    </>
  );
}

export default ChatHistory;
