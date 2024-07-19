
"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetConfigQuery, useUpdateConfigMutation } from "@/rtkquery/config";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";


const Mode = () => {
  const { data: configDetails, isLoading, isError } = useGetConfigQuery({});
  const [updateConfig, { isLoading: isUpdating }] = useUpdateConfigMutation();
  const dispatch = useDispatch();

  const [mode, setMode] = useState("private");
  const [baseUrl, setBaseUrl] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [openAisecretKey, setOpenAiSecretKey] = useState("");
  const [errors, setErrors] = useState({ baseUrl: "", secretKey: "", openAisecretKey: "" });
  const [buttonStyle, setButtonStyle] = useState({ backgroundColor: "white", color: "black" });
  const [isSecretVisible, setIsSecretVisible] = useState(false);
  const [isOpenAiSecretVisible, setIsOpenAiSecretVisible] = useState(false);

  useEffect(() => {
    if (configDetails) {
      setMode(configDetails.mode || "private");
      setBaseUrl(configDetails.private_base_url || "");
      setSecretKey(configDetails.private_secret_key || "");
      setOpenAiSecretKey(configDetails.private_open_ai_key || "");
    }
  }, [configDetails]);

  const handleChange = (mode:any) => {
    setMode(mode);
    setButtonStyle({ backgroundColor: "black", color: "white" });
  };

  const handleUpdate = async () => {
    if (mode === "Private" && (baseUrl === "" || secretKey === "")) {
      setErrors({
        baseUrl: baseUrl === "" ? "Base URL is required" : "",
        secretKey: secretKey === "" ? "Secret Key is required" : "",
        openAisecretKey: openAisecretKey === "" ? "Open ai Key is required" : "",
      });
    } else if (mode === "OpenAI" && openAisecretKey === "") {
      setErrors({
        ...errors,
        openAisecretKey: "Open ai Key is required",
      });
    } else {
      const payload = {
        ...(configDetails || {}),
        mode,
        private_base_url: baseUrl,
        private_secret_key: secretKey,
        private_open_ai_key: openAisecretKey,
      };
      await updateConfig(payload);
      setErrors({ baseUrl: "", secretKey: "", openAisecretKey: "" });
      setButtonStyle({ backgroundColor: "white", color: "black" });
    }
  };

  return (
    <div className="space-y-4 w-full text-sm p-2">
      <div className="flex items-center justify-between align-middle">
        <div className="text-xl font-bold">Select Mode</div>
        <Button variant="outline" style={buttonStyle} onClick={handleUpdate}>
          Update
        </Button>
      </div>

      <RadioGroup className="flex flex-col space-y-4" value={mode} onValueChange={handleChange}>
        <div className="flex justify-between flex-col md:flex-row align-middle">
          <div className="w-[36vw]">
            Private Mode
            <div className="font-sans text-muted-foreground ">
              Private Mode is for running on your own GPU instance or in a private cloud deployment with an OpenAI-compatible API.
            </div>
          </div>
          <div>
            <RadioGroupItem value="Private" />
          </div>
        </div>

        {mode === "Private" && (
          <>
            <div>
              <Label>Base URL</Label>
              <Input value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} />
              <div style={{ color: errors.baseUrl ? "red" : "transparent" }}>
                {errors.baseUrl || "placeholder"}
              </div>
            </div>
            <div className="relative">
              <Label>Secret Key</Label>
              <Input
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                type={isSecretVisible ? "text" : "password"}
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setIsSecretVisible(!isSecretVisible)}
              >
                {isSecretVisible ? <EyeIcon className="h-5 w-5 text-gray-500" /> : <EyeOffIcon className="h-5 w-5 text-gray-500" />}
              </div>
              <div style={{ color: errors.secretKey ? "red" : "transparent" }}>
                {errors.secretKey || "placeholder"}
              </div>
            </div>
          </>
        )}

        <div className="flex justify-between flex-col align-middle md:flex-row text-sm">
          <div className="w-[36vw]">
            ZySec Demo Mode
            <div className="font-sans text-muted-foreground">
              ZySec Demo Mode is designed for users who prefer to use ZySec's resources without setup.
            </div>
          </div>
          <div>
            <RadioGroupItem value="zysec-demo" />
          </div>
        </div>

        <div className="flex justify-between space-x-4 flex-col align-middle md:flex-row">
          <div className="w-[36vw]">
            OpenAI Mode
            <div className="font-sans text-muted-foreground">
              OpenAI Mode leverages OpenAI's Large Language Models (LLM) to integrate with OpenAI's AI capabilities.
            </div>
          </div>
          <div>
            <RadioGroupItem value="OpenAI" />
          </div>
        </div>

        {mode === "OpenAI" && (
          <div className="relative">
            <Label>Open Ai Key</Label>
            <Input
              value={openAisecretKey}
              onChange={(e) => setOpenAiSecretKey(e.target.value)}
              type={isOpenAiSecretVisible ? "text" : "password"}
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={() => setIsOpenAiSecretVisible(!isOpenAiSecretVisible)}
            >
              {isOpenAiSecretVisible ? <EyeOffIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
            </div>
            <div style={{ color: errors.openAisecretKey ? "red" : "transparent" }}>
              {errors.openAisecretKey || "placeholder"}
            </div>
          </div>
        )}
      </RadioGroup>
    </div>
  );
};

export default Mode;