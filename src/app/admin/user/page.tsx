"use client";

import React, { useState, useEffect } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  PaginationState,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { ChevronLeft, ChevronRight, Edit, Trash2, Plus } from "lucide-react";
import { fetchAllUsers, deleteUser } from "@/lib/api"; // Replace with actual API functions
import Link from "next/link";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

const UserList = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 5 });
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const { toast } = useToast();

  // Fetch users from the backend with pagination
  const fetchUsersData = async (page = 1, size = 5) => {
    try {
      const { data, meta } = await fetchAllUsers(page, size);
      setUsers(data);
      setTotalPages(meta.totalPages);
      setTotalItems(meta.totalItems);
      setPagination((prev) => ({ ...prev, pageIndex: page - 1 }));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsersData(pagination.pageIndex + 1, pagination.pageSize);
  }, [pagination.pageIndex, pagination.pageSize]);

  const handleUserDelete = async (user: any) => {
    try {
      await deleteUser(user.id);
      toast({
        title: "Success",
        description: `User "${user.first_name} ${user.last_name}" deleted successfully`,
        variant: "success",
      });
      fetchUsersData(pagination.pageIndex + 1, pagination.pageSize);
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to delete user: ${error}`,
        variant: "destructive",
      });
    }
  };

  const userColumns: ColumnDef<any>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "first_name", header: "First Name" },
    { accessorKey: "last_name", header: "Last Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "mobile", header: "Mobile" },
    {
      accessorKey: "is_active",
      header: "Status",
      cell: (info) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            info.getValue() ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
          }`}
        >
          {info.getValue() ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Link href={`/admin/user/edit/${row.original.id}`} passHref>
              <Edit className="w-4 h-4 text-blue-600" />
            </Link>
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Trash2 className="w-4 h-4 text-red-600" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <h2 className="text-xl font-bold">Confirm Delete</h2>
                <p>Are you sure you want to delete user: {row.original.first_name} {row.original.last_name}?</p>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <Button variant="secondary" onClick={() => handleUserDelete(row.original)}>
                  Yes, Delete
                </Button>
                <Button variant="outline">Cancel</Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      ),
    },
  ];

  const userTable = useReactTable({
    data: users,
    columns: userColumns,
    state: { pagination },
    pageCount: totalPages,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-12xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">User List</h1>
          <Button asChild variant="default" className="flex items-center space-x-2">
            <Link href="/admin/user/add">
              <Plus className="w-4 h-4 mr-1" />
              <span>Add User</span>
            </Link>
          </Button>
        </div>

        <Card className="border-none shadow-xl bg-white/80 backdrop-blur">
          <CardHeader className="border-b border-gray-100 pb-4">
            <CardTitle className="text-xl text-gray-800">Users</CardTitle>
          </CardHeader>

          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                {userTable.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id} className="text-left">
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>

              <TableBody>
                {userTable.getRowModel().rows.length ? (
                  userTable.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={userColumns.length} className="h-24 text-center">
                      No users found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>

          <div className="flex justify-between items-center p-4">
            <Button
              variant="outline"
              onClick={() => userTable.previousPage()}
              disabled={!userTable.getCanPreviousPage()}
              className="flex items-center"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <span className="text-gray-600">
              Page {pagination.pageIndex + 1} of {totalPages}
            </span>

            <Button
              variant="outline"
              onClick={() => userTable.nextPage()}
              disabled={!userTable.getCanNextPage()}
              className="flex items-center"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserList;