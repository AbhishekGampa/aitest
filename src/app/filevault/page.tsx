"use client";
import UploadCloudIcon from "@/Images/uploadIcon.svg";
import createProjectIcon from "@/Images/createprojectIcon.svg";
import filterIcon from "@/Images/filterIcon.svg";
import Image from "next/image";
import arrowDownIcon from "@/Images/ArrowDownIcon.svg";
import searchIcon from "@/Images/SearchIcon.svg";
import { Input } from "@/components/ui/input";
import React, {  useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-alpine.css"; 
import "../../app/globals.css";
import { useGetFileVaultDataQuery } from "@/store/api/filevaul";
import chatIcon from "@/Images/chatIcon.svg";

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
  width?: number;
  minWidth?: number;
  headerName?: string;
  cellRendererFramework?: any;
  headerCheckboxSelection?: boolean;
  checkboxSelection?: boolean;
  cellStyle?: any;
  cellRenderer?: any;
}

const FileVault = () => {
  const { data } = useGetFileVaultDataQuery({});
  const [showFilterDropDown, setShowFilterDropDown] = useState(false);
  console.log("data: ", data);
  const gridOne = useRef<AgGridReact>(null);
  const rowData = data?.map((item: any) => ({
    Name: item.filename,
    Status:
      item.embedded_status[0]?.status === null
        ? "Waiting"
        : item.embedded_status[0]?.status
        ? "Done"
        : "Error",
    "Created By": item.uploaded_by.full_name,
    "Created At": item.uploaded_first_time,
    Size: `${item.file_size} bytes`, // Assuming size is in bytes
    Category: item.categories.length > 0 ? item.categories[0].name : "N/A", // Assuming to take the first category's name if available
    Actions: "...",
  }));

  const StatusCellRenderer = (params: any) => {
    console.log("params: ", params);
    return (
      <>
        {params.data.Status === "Done" ? (
          <div className=" flex justify-between items-center">
            <p
              className="my-1 flex items-center gap-3 px-2"
              style={{
                borderRadius: "1rem",
                border: "1px solid #E5E7EB",
                height: "30px",
              }}
            >
              <div>
                <span className="w-3 h-3 inline-block rounded-full bg-green-500"></span>
              </div>
              <div>{params.value}</div>
            </p>
          </div>
        ) : null}
         {params.data.Status === "Error" ? (
          <div className=" flex justify-between items-center">
            <p
              className="my-1 flex items-center gap-3 px-2"
              style={{
                borderRadius: "1rem",
                border: "1px solid #E5E7EB",
                height: "30px",
              }}
            >
              <div>
                <span className="w-3 h-3 inline-block rounded-full bg-red-500"></span>
              </div>
              <div>{params.value}</div>
            </p>
          </div>
        ) : null} 
        {params.data.Status === "Waiting" ? (
          <div className=" flex justify-between items-center">
            <p
              className="my-1 flex items-center gap-3 px-2"
              style={{
                borderRadius: "1rem",
                border: "1px solid #E5E7EB",
                height: "30px",
              }}
            >
              <div>
                <span className="w-3 h-3 inline-block rounded-full bg-yellow-500"></span>
              </div>
              <div>{params.value}</div>
            </p>
          </div>
        ) : null}                                      
      </>
    );
  };

  const initialColDefs: ColDef[] = [
    {
      field: "Name",
      headerCheckboxSelection: true,
      checkboxSelection: true,
      minWidth: 300,
    },
    {
      field: "Status",
      cellRenderer: (params: Object) => {
        return StatusCellRenderer(params);
      },
    },
    { field: "Created By" },
    { field: "Created At" },
    { field: "Size" },
    { field: "Category" },
    { field: "Actions", headerName: "" },
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

  const handleClickDropDown = () =>{
    console.log("clicked");
    setShowFilterDropDown(!showFilterDropDown);
  }

  return (
    <div className="h-full flex flex-col  w-full overflow-clip ">
      <div className="pl-7  pr-4 flex gap-3 flex-col max-md:pl-2">
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
          <div className="relative flex flex-row items-center gap-2 p-[4px] px-[var(--Spacing-2XS,12px)]">
            <Image src={filterIcon} alt="filterIcon" />
            <span className="text-center text-[var(--button-secondary-text,#384252)] font-[var(--Font-Family-Text-style---App,'SF Pro Text')] text-[13px] font-normal leading-[120%] tracking-[var(--Letter-spacing---Text-Subheadline,0px)]">
              Filter
            </span>
            <Image src={arrowDownIcon} alt="arroedown" className="cursor-pointer" onClick={handleClickDropDown} width={8}/>
          </div>
          {showFilterDropDown && 
          <div className="absolute w-max h-max rounded-lg bg-white z-10 pr-2 right-4 top-[31%]">
            <div className="flex flex-col gap-2 p-4">
              <div >
                <h6>Chat with file</h6>
              </div>
              <div>
                <h6>Chat with file</h6>
              </div>
              <div>
                <h6>Chat with file</h6>
              </div>
              <div>
                <h6>Chat with file</h6>
              </div>
            </div>
          </div>
          }
        </div>
        <div className="h-full flex flex-col  w-full overflow-clip">
          <div
            className="ag-theme-alpine ag-root-wrapper justify-center "
            style={{ height: 400, width: "100%" }}
          >
            <AgGridReact
              rowData={rowData}
              columnDefs={adjustedColDefs}
              defaultColDef={defaultColDef}
              suppressRowClickSelection={true}
              rowSelection={"multiple"}
              alignedGrids={[gridOne]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileVault;
