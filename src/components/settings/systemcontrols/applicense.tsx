"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  useGetConfigQuery,
  useUpdateConfigMutation,
} from "../../../store/api/config";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import globe from "../../../Images/Globe.svg";
import file from "../../../Images/File_Document.svg";
import user from "../../../Images/user.svg";
import { Button } from "@/components/ui/button";
import { BiEditAlt, BiCheck } from "react-icons/bi";

const ZySecAppAndSettings = () => {
  const { data: configDetails, isLoading, isError } = useGetConfigQuery({});
  const [updateConfig, { isLoading: isUpdating }] = useUpdateConfigMutation();

  const [isEditing, setIsEditing] = useState(false);
  const [appId, setAppId] = useState("");
  const [secret, setSecret] = useState("");
  const [internetEnabled, setInternetEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [enrichmentsEnabled, setEnrichmentsEnabled] = useState(true);

  useEffect(() => {
    if (configDetails) {
      setInternetEnabled(configDetails.enable_internet);
      setNotificationsEnabled(configDetails.enable_cyber_news);
      setEnrichmentsEnabled(configDetails.enable_fetch_content);
      setAppId(configDetails.private_open_ai_key);
      setSecret(configDetails.private_secret_key);
    }
  }, [configDetails]);

  const handleEdit = () => setIsEditing(!isEditing);
  const handleSave = async () => {
    setIsEditing(false);
    const payload = {
      enable_internet: internetEnabled,
      enable_cyber_news: notificationsEnabled,
      enable_fetch_content: enrichmentsEnabled,
      private_open_ai_key: appId,
      private_secret_key: secret,
    };
    await updateConfig(payload);
  };

  const handleInternetChange = () => {
    const newInternetState = !internetEnabled;
    setInternetEnabled(newInternetState);
    if (newInternetState) {
      toast("Internet enabled");
    } else {
      toast("Internet disabled");
    }
  };

  const handleNotificationsChange = () => {
    if (internetEnabled) {
      setNotificationsEnabled(!notificationsEnabled);
      toast(
        !notificationsEnabled ? "Cyber News enabled" : "Cyber News disabled"
      );
    }
  };

  const handleEnrichmentsChange = () => {
    if (internetEnabled) {
      setEnrichmentsEnabled(!enrichmentsEnabled);
      toast(
        !enrichmentsEnabled ? "Fetch Content enabled" : "Fetch Content disabled"
      );
    }
  };

  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm">
          <div>License Status</div>
          <div className="text-gray-600">License expired 25 Jul 2025</div>
        </div>
        <div className="border border-gray-500 px-2 rounded-full text-sm">
          active
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-xl font-bold">ZySec App ID & Secret</div>
        <Button onClick={isEditing ? handleSave : handleEdit} variant="outline">
          {isEditing ? (
            <>
              <BiCheck style={{ fontSize: "1.5rem" }} />
              Save
            </>
          ) : (
            <>
              <BiEditAlt style={{ fontSize: "1.5rem" }} />
              Edit
            </>
          )}
        </Button>
      </div>
      <div className=" px-2">
        <Label>App ID</Label>
        <Input
          className="mb-2"
          value={appId}
          onChange={(e) => setAppId(e.target.value)}
          disabled={!isEditing}
        />
        <Label>Secret</Label>
        <Input
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          disabled={!isEditing}
          type="password"
        />
        <div className="text-gray-500 text-xs py-4">
          To create a new App ID & Secret, visit{" "}
          <Link href="https://www.zysec.dev/accounts/register" target="_blank">
            https://www.zysec.dev/accounts/register
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center space-x-2">
            <div className="flex items-center">
              <Image
                src={globe}
                alt="Globe"
                width={24}
                height={24}
                className="mr-3"
              />
              <div className="text-sm w-[36vw]">
                <div>Internet</div>
                <div className="font-sans text-muted-foreground ">
                  Controls the system's internet connectivity. Disabling will
                  also disable notifications and fetch content features.
                </div>
              </div>
            </div>
            <Switch
              checked={internetEnabled}
              onCheckedChange={handleInternetChange}
              className="bg-green-500"
            />
          </div>
        </div>

        <div>
          <div>
            <div className="flex justify-between items-center space-x-2">
              <div className="flex items-center">
                <Image
                  src={file}
                  alt="File Document"
                  width={24}
                  height={24}
                  className="mr-3"
                />
                <div className="text-sm w-[36vw]">
                  <div>Cyber News</div>
                  <div className="font-sans text-muted-foreground ">
                    Manages receiving of cyber security news and updates.
                  </div>
                </div>
              </div>
              <Switch
                checked={notificationsEnabled}
                onCheckedChange={handleNotificationsChange}
                disabled={!internetEnabled}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center space-x-2">
            <div className="flex items-center">
              <Image
                src={user}
                alt="User"
                width={24}
                height={24}
                className="mr-3"
              />
              <div className="text-sm w-[36vw]">
                <div>Fetch Content</div>
                <div className="font-sans text-muted-foreground ">
                  Fetches content from external sources, requiring internet
                  connectivity.
                </div>
              </div>
            </div>
            <Switch
              checked={enrichmentsEnabled}
              onCheckedChange={handleEnrichmentsChange}
              disabled={!internetEnabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZySecAppAndSettings;
