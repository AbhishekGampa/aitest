const ChatSkeletonLoader = () => {
  return (
    <div
      className="animate-pulse fixed top-1 mt-1 bg-white shadow-md rounded-lg p-5 z-10 w-[350px] h-screen overflow-scroll hide-scrollbar"
      style={{ height: "calc(100vh - 1.2rem)" }}
    >
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="flex flex-row justify-between w-full">
          <div className="h-6 bg-gray-300 rounded-lg w-[20%]"></div>
          <div className="w-5 rounded-xl bg-gray-300"></div>
        </div>
        <div className="contents">
          <div className="h-6 bg-gray-300 rounded-lg w-[40%]"></div>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-row w-[300px] py-1 items-center gap-2 self-stretch hover:backdrop-blur-md hover:bg-gray-200 rounded-lg "
            style={{ padding: "12px" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-11 h-10 bg-gray-300 rounded-full"></div>
            </div>
            <div className="w-full h-10 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSkeletonLoader;
