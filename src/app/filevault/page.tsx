"use client";
import UploadCloudIcon from "@/Images/uploadIcon.svg";
import createProjectIcon from "@/Images/createprojectIcon.svg";
import filterIcon from "@/Images/filterIcon.svg";
import Image from "next/image";
import arrowDownIcon from "@/Images/ArrowDownIcon.svg";
import searchIcon from "@/Images/SearchIcon.svg";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Ensure you have imported necessary styles
import "ag-grid-community/styles/ag-theme-alpine.css"; // or any other theme you're using
import "../../app/globals.css";
import { useGetFileVaultDataQuery } from "@/store/api/filevaul";

interface Headers {
  Name: string;
  Status: string;
  "Created By": string;
  "Created At": string;
  Size: string;
  Category: string;
}

interface ColDef {
  field: string;
  flex?: number;
}

const FileVault = () => {
  const { data } = useGetFileVaultDataQuery({});
  console.log("data: ", data);

  const rowData = data?.map((item: any) => ({
    Name: item.filename,
    Status: item.embedded_status[0]?.status ? "Active" : "Inactive", // Assuming 'true' means 'Active'
    "Created By": item.uploaded_by.full_name,
    "Created At": item.uploaded_first_time,
    Size: `${item.file_size} bytes`, // Assuming size is in bytes
    Category: item.categories.length > 0 ? item.categories[0].name : "N/A", // Assuming to take the first category's name if available
  }));

  const initialColDefs: ColDef[] = [
    { field: "Name" },
    { field: "Status" },
    { field: "Created By" },
    { field: "Created At" },
    { field: "Size" },
    { field: "Category" },
  ];

  const adjustedColDefs = initialColDefs.map((colDef) => {
    if (initialColDefs.length === 2) {
      return { ...colDef, flex: 1 };
    }
    return colDef;
  });

  const defaultColDef = {
    flex: 1, // Allow columns to flex
    minWidth: 100, // Set a reasonable minWidth
  };

  const rowSelection = "multiple";

  return (
    <div className="h-full flex flex-col  w-full overflow-clip">
      <div className="pl-7  pr-4 flex gap-3 flex-col">
        <div className="flex flex-row justify-between">
          <div className="text-[var(--text-secondary,#455166)] font-[var(--Font-Family-Display-style---Web,Inter)] text-3xl max-md:text-[15px] leading-[110%] tracking-tight">
            <h1>Home for your files</h1>
            <h1 className="font-bold text-black">FileVault</h1>
          </div>
          <div className="flex items-center flex-row gap-4 ">
            <div className="flex flex-row gap-1 border-[1px] p-[4px] px-[var(--Spacing-2XS,12px)] border-[var(--button-secondary-stroke,#758399)] rounded-[var(--radius-100,1000px)] max-md:text-sm">
              <Image src={UploadCloudIcon} alt="" className="max-md:w-3" />
              <span className="text-sm max-md:text-sm max-md:text-[10px]">
                Upload File
              </span>
            </div>
            <div className="flex flex-row gap-1 border-[1px] p-[4px] px-[var(--Spacing-2XS,12px)] border-[var(--button-secondary-stroke,#758399)] rounded-[var(--radius-100,1000px)]">
              <Image src={createProjectIcon} alt="" className="max-md:w-3" />
              <span className="text-sm max-md:text-[10px]">Create project</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="relative">
            <Input
              className="w-[100%] pl-10 relative"
              placeholder="Search names"
            />
            <Image
              src={searchIcon}
              alt="searchIcon"
              className="absolute top-2"
            />
          </div>
          <div className="flex flex-row items-center gap-2 p-[4px] px-[var(--Spacing-2XS,12px)]">
            <Image src={filterIcon} alt="filterIcon" />
            <span className="text-center text-[var(--button-secondary-text,#384252)] font-[var(--Font-Family-Text-style---App,'SF Pro Text')] text-[13px] font-normal leading-[120%] tracking-[var(--Letter-spacing---Text-Subheadline,0px)]">
              Filter
            </span>
            <Image src={arrowDownIcon} alt="arroedown" />
          </div>
        </div>
        <div className="h-full flex flex-col  w-full overflow-clip">
          <div
            className="ag-theme-alpine  ag-root-wrapper"
            style={{ height: 400, width: "100%" }}
          >
            <AgGridReact
              rowData={rowData}
              columnDefs={adjustedColDefs}
              rowSelection={rowSelection}
              defaultColDef={defaultColDef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileVault;
