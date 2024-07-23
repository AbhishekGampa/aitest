import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import LanguageModelModal from "./languagemodal";


interface CreateAssistantModalProps {
  onClose: () => void;
}

const CreateAssistantModal: React.FC<CreateAssistantModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    languageModel: "",
    systemPrompt: "",
    retrievalCollection: "",
    toolPlugin: "",
    memoryType: "Message window",
    maxMessages: 20,
    maxTokens: 2000,
  });

  const [showLanguageModelModal, setShowLanguageModelModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [avatar, setAvatar] = useState<string | ArrayBuffer | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  const handleLanguageModelSelect = (model: string) => {
    setFormData({
      ...formData,
      languageModel: model,
    });
    setShowLanguageModelModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[82vw] h-[90vh] max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-semibold">Create Assistant</h2>
            <p className="text-xs text-gray-500 pt-1">Edit your personal information</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        <div className="overflow-y-auto flex-grow p-2">
          <form onSubmit={handleSubmit} className="flex">
            <div className="flex flex-col w-1/2 pr-3">
              <h3 className="text-lg font-semibold">Basic Information</h3>
              <div>
                <div className="relative w-12 h-12">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                  />
                  {avatar ? (
                    <img src={avatar as string} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500">&#9998;</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <Textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                ></Textarea>
                <div>
                  <p className="text-xs text-gray-600 p-1">
                    The description should serve as an internal note to clarify the purpose of the assistant; it will not be used as a system prompt.
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  name="languageModel"
                  placeholder="Language model"
                  value={formData.languageModel}
                  onClick={() => setShowLanguageModelModal(true)}
                  readOnly
                />
              </div>
              <div>
                <div className="text-xl font-semibold py-1">System prompt Template</div>
                <p className="text-xs py-1 text-gray-600">
                  The description should serve as an internal note to clarify the purpose of the assistant; it will not be used as a system prompt.
                </p>
                <div className="mb-4">
                  <Input
                    name="systemPrompt"
                    placeholder="Enter system prompt"
                    value={formData.systemPrompt}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2 text-sm pl-2">+ Add</div>
              </div>
              <div>
                <div className="text-xl font-semibold py-1">Memory</div>
                <p className="text-xs py-1 text-gray-600">
                  The context memory allows the assistant to remember past conversations, thereby enabling stateful invocations.
                </p>
                <div className="mb-4">
                  <select
                    name="memoryType"
                    className="w-full mt-1 px-3 py-2 border rounded-2xl"
                    value={formData.memoryType}
                    onChange={handleChange}
                  >
                    <option value="Message window">Message window</option>
                    <option value="Other type">Other type</option>
                  </select>
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <Input
                      type="number"
                      name="maxMessages"
                      placeholder="Max Messages"
                      value={formData.maxMessages}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-1/2">
                    <Input
                      type="number"
                      name="maxTokens"
                      placeholder="Max Tokens"
                      value={formData.maxTokens}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2 pl-2 p-2">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Retrieval</h3>
                <p className="text-xs text-gray-500 py-1">
                  Incorporate retrieval sources into your assistant to facilitate effective retrieval-augmented generation.
                </p>
                <Input
                  type="text"
                  name="retrievalCollection"
                  placeholder="select collection"
                  value={formData.retrievalCollection}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Tools</h3>
                <p className="text-xs text-gray-500 py-1">
                  Integrate tools into your assistant to extend its capabilities to address different user needs.
                </p>
                <Input
                  type="text"
                  name="toolPlugin"
                  placeholder="Enter plugin"
                  value={formData.toolPlugin}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="flex px-10 mt-4 justify-between">
          <Button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 text-black rounded-3xl hover:bg-gray-300 mr-2"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="px-4 py-2 bg-blue-700 text-white rounded-3xl hover:bg-blue-500"
          >
            Save
          </Button>
        </div>
      </div>

      {showLanguageModelModal && (
        <LanguageModelModal
          onClose={() => setShowLanguageModelModal(false)}
          onSelect={handleLanguageModelSelect}
        />
      )}
    </div>
  );
};

export default CreateAssistantModal;
