import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';


const GeneralSettings: React.FC = () => {
  return (
    <div className=' w-full'>
    <div className='text-xl py-4 font-semibold'>General Settings</div>
    <p className='text-sm text-gray-500'>Some description here </p>
    <div className="grid w-full  items-center gap-1 py-4">
      <Label htmlFor="name">Company Name</Label>
      <Input type="name" id="name" placeholder="Basecamp" />
    </div>
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 py-3">Upload the logo</label>
        <div className="flex items-center mt-1">
          <img src="https://via.placeholder.com/150" alt="Basecamp logo" className="h-10 w-10 rounded-full"/>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">Basecamplogo.png</div>
            <button className="text-gray-600 hover:text-gray-900 text-sm">Remove</button> | <button className="text-gray-600 hover:text-gray-900 text-sm">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;

