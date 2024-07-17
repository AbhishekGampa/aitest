import React, { useState } from 'react';

interface CreateAssistantModalProps {
  onClose: () => void;
}

const CreateAssistantModal: React.FC<CreateAssistantModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    languageModel: '',
    systemPrompt: '',
    retrievalCollection: '',
    toolPlugin: '',
    memoryType: 'Message window',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[82vw] h-[90vh] overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Create Assistant</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Basic Information</h3>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 px-3 py-2 border rounded"
              placeholder="Enter assistant name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              className="w-full mt-1 px-3 py-2 border rounded"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Language model</label>
            <select
              name="languageModel"
              className="w-full mt-1 px-3 py-2 border rounded"
              value={formData.languageModel}
              onChange={handleChange}
            >
              <option value="">Select language model</option>
              <option value="Model 1">Model 1</option>
              <option value="Model 2">Model 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">System prompt template</label>
            <textarea
              name="systemPrompt"
              className="w-full mt-1 px-3 py-2 border rounded"
              placeholder="Enter system prompt"
              value={formData.systemPrompt}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Retrieval</h3>
            <label className="block text-gray-700">Select collection</label>
            <input
              type="text"
              name="retrievalCollection"
              className="w-full mt-1 px-3 py-2 border rounded"
              placeholder="Enter collection"
              value={formData.retrievalCollection}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Tools</h3>
            <label className="block text-gray-700">Plugin</label>
            <input
              type="text"
              name="toolPlugin"
              className="w-full mt-1 px-3 py-2 border rounded"
              placeholder="Enter plugin"
              value={formData.toolPlugin}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Memory</h3>
            <label className="block text-gray-700">Type</label>
            <select
              name="memoryType"
              className="w-full mt-1 px-3 py-2 border rounded"
              value={formData.memoryType}
              onChange={handleChange}
            >
              <option value="Message window">Message window</option>
              <option value="Session-based">Session-based</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 mr-2"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAssistantModal;
