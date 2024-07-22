"use client"
import React from "react";
import { useState } from "react";
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@radix-ui/react-checkbox";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { useGetUsersQuery } from "@/store/api/users";
import { User } from "@/components/explore/mockdata";
import mail from '../../../Images/Mail.svg';
import lock from '../../../Images/Lock.svg';
import userenable from '../../../Images/User_Card_ID.svg';
import userdisable from '../../../Images/User_Close.svg';
import Image from "next/image";

type EditUserModalProps = {
  open: boolean;
  handleClose: () => void;
  userId: number;
  editUserData: {
    email: string;
    full_name: string;
  };
  setEditUserData: React.Dispatch<React.SetStateAction<{ email: string; full_name: string }>>;
};

const UserManagement = () => {
  const [user, setUser] = useState(false);
  const { data: retrieveUsers = [], isLoading, error } = useGetUsersQuery({});
  const [filter, setFilter] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users</div>;

  const filteredUsers = retrieveUsers.filter((user:any) =>
    user.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="flex justify-center w-[70vw] ">
      <div className="flex flex-col w-full h-full ">
        <div className="self-center w-full ">
          <UserTable data={filteredUsers} setFilter={setFilter} />
        </div>
      </div>

    </div>
  );
};

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="capitalize">{row.index + 1}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "full_name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("full_name")}</div>
    ),
  },
  {
    accessorKey: "roles",
    header: "Role",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("roles")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;
      const [editUser, setEditUser] = useState(false);
      const [editUserData, setEditUserData] = useState({
        email: "",
        full_name: "",
      });
      const [dropdownOpen, setDropdownOpen] = useState(false);
      const handleDeleteUser = async () => {
        try {
          console.log(`Deleting user with id: ${user.id}`);
        } catch (error) {
          throw error;
        }
      };
      return (
        <>
          <DropdownMenu
            open={dropdownOpen}
            onOpenChange={(x) => setDropdownOpen(x)}
          >
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white shadow-lg rounded-lg w-[22vw]">
        
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(user.email)}
              >
                <Image src={mail} alt="Copy Email" className="mr-2 h-4 w-4" />
                Copy Email
              </DropdownMenuItem>
       
              <DropdownMenuItem>
                <Image src={lock} alt="Reset Password" className="mr-2 h-4 w-4" />
                Reset Password
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setDropdownOpen(false);
                  setEditUser(true);
                  setEditUserData({
                    email: user.email,
                    full_name: user.full_name,
                  });
                }}
              >
                <Image src={userenable} alt="Edit User" className="mr-2 h-4 w-4" />
                Edit User
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDeleteUser}>
                <Image src={userdisable} alt="Disable User" className="mr-2 h-4 w-4" />
                Disable User
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {editUser && (
            <EditUserModal
              open={editUser}
              handleClose={() => setEditUser(false)}
              userId={user.id}
              editUserData={editUserData}
              setEditUserData={setEditUserData}
            />
          )}
        </>
      );
    },
  },
];

export function UserTable({ data, setFilter }: { data: User[], setFilter: (value: string) => void }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full p-1 ">
      <div className="flex space-x-[38vw] items-center py-4">
        <DropdownMenu>
          <DropdownMenuContent>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Input
          placeholder="Filter emails..."
          onChange={(event) => setFilter(event.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="rounded-md border bg-gray-50">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const EditUserModal: React.FC<EditUserModalProps> = ({ open, handleClose, userId, editUserData, setEditUserData }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[30vw] p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <div>
          <label className="block mb-2">Email</label>
          <Input
            value={editUserData.email}
            onChange={(e) =>
              setEditUserData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="mb-4"
          />
        </div>
        <div>
          <label className="block mb-2">Full Name</label>
          <Input
            value={editUserData.full_name}
            onChange={(e) =>
              setEditUserData((prev) => ({ ...prev, full_name: e.target.value }))
            }
            className="mb-4"
          />
        </div>
        <div className="flex justify-end">
          <Button variant="outline" onClick={handleClose} className="mr-2">
            Cancel
          </Button>
          <Button  onClick={() => console.log("Save user", userId)}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
