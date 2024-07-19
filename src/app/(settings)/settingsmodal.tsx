import Image from "next/image";
import Link from "next/link";
import closeButton from "../../Images/closeButton.svg";
import { settingsModal } from "../(explore)/mockdata";


function SettingsModal({
  setShowModalsettings,
  onModalChangesettings,
}: {
  setShowModalsettings: (show: boolean) => void;
  onModalChangesettings: (changed: boolean) => void;
}) {
  const handleClick = (event: any) => {
    event.stopPropagation();
    setShowModalsettings(false);
    onModalChangesettings(false);
  };

  return (
    <>
      <div className="absolute top-1 left-0 right-0 mt-1 bg-white shadow-md rounded-lg p-5 z-10 w-[350px] h-screen overflow-scroll hide-scrollbar">
        <div className="flex flex-col items-start gap-3 self-stretch">
          <div className="flex flex-row justify-between w-full items-center">
            <div
              className="rounded-full border flex flex-row"
              style={{ borderColor: "var(--button-secondary-stroke, #758399)" }}
            ></div>
            <div>
              <Image
                src={closeButton}
                width={30}
                height={30}
                alt="closeButton"
                className="cursor-pointer"
                onClick={handleClick}
              />
            </div>
          </div>
          <div>
            <h5 className="text-xs font-normal leading-tight custom-font-family custom-letter-spacing text-custom-color">
              Select category
            </h5>
          </div>
          {settingsModal.map((category, index) => (
            <Link key={index} href={category.route} legacyBehavior>
              <a
                className="flex items-center gap-3 py-2 w-full rounded-lg cursor-pointer hover:bg-gray-100"
                onClick={handleClick}
              >
                <div className="text-2xl bg-gray-100 w-10 h-10 flex justify-center items-center rounded-full hover:bg-white">
                  {typeof category.icon === "string" ? (
                    category.icon
                  ) : (
                    <Image src={category.icon} alt={category.title} width={24} height={24} />
                  )}
                </div>
                <div className="flex flex-col">
                  <h6 className="text-sm font-medium">{category.title}</h6>
                  <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default SettingsModal;
