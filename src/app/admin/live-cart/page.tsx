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
import { ChevronLeft, ChevronRight, Edit, Trash2 } from "lucide-react";
import { fetchCarts, deleteCart } from "@/lib/api"; // Update with correct Cart API functions
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

const CartList = () => {
  const [carts, setCarts] = useState<any[]>([]);
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 5 });
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const { toast } = useToast();

  // Fetch cart data from the backend with pagination
  const fetchCartData = async (page = 1, size = 5) => {
    try {
      const { data, meta } = await fetchCarts(page, size); // Fetch paginated cart list
      setCarts(data);
      setTotalPages(meta.totalPages);
      setTotalItems(meta.totalItems);
      setPagination((prev) => ({ ...prev, pageIndex: page - 1 }));
    } catch (error) {
      console.error("Error fetching carts:", error);
    }
  };

  useEffect(() => {
    fetchCartData(pagination.pageIndex + 1, pagination.pageSize);
  }, [pagination.pageIndex, pagination.pageSize]);

  const handleCartDelete = async (cart: any) => {
    try {
      await deleteCart(cart.id);
      toast({
        title: "Success",
        description: `Cart ID "${cart.id}" deleted successfully.`,
        variant: "success",
      });
      fetchCartData(pagination.pageIndex + 1, pagination.pageSize); // Refresh the list
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to delete cart: ${error}`,
        variant: "destructive",
      });
    }
  };
  const cartColumns: ColumnDef<any>[] = [
    { accessorKey: "id", header: "ID" },
    {
      accessorKey: "user.first_name",
      header: "User Name",
      cell: ({ row }) => {
        const user = row.original.user;
        return user
          ? `${user.first_name || ""} ${user.last_name || ""}`.trim()
          : "N/A";
      },
    },
    {
      accessorKey: "provider.first_name",
      header: "Provider Name",
      cell: ({ row }) => {
        const provider = row.original.provider;
        return provider
          ? `${provider.first_name || ""} ${provider.last_name || ""}`.trim()
          : "N/A";
      },
    },
    { accessorKey: "type", header: "Type" },
    { accessorKey: "service_type", header: "Service Type" },
    {
      accessorKey: "quantity",
      header: "Quantity",
      cell: ({ row }) => row.original.quantity || "N/A",
    },
    {
      accessorKey: "total_price",
      header: "Total Price",
      cell: ({ row }) =>
        row.original.total_price !== undefined
          ? `$${row.original.total_price}`
          : "N/A",
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Link href={`/admin/carts/edit/${row.original.id}`} passHref>
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
                <p>Are you sure you want to delete cart ID: {row.original.id}?</p>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <Button variant="secondary" onClick={() => handleCartDelete(row.original)}>
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

  const cartTable = useReactTable({
    data: carts,
    columns: cartColumns,
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
          <h1 className="text-3xl font-bold text-gray-900">Cart List</h1>
        </div>

        <Card className="border-none shadow-xl bg-white/80 backdrop-blur">
          <CardHeader className="border-b border-gray-100 pb-4">
            <CardTitle className="text-xl text-gray-800">Carts</CardTitle>
          </CardHeader>

          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                {cartTable.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id} className="text-left">
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>

              <TableBody>
                {cartTable.getRowModel().rows.length ? (
                  cartTable.getRowModel().rows.map((row) => (
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
                    <TableCell colSpan={cartColumns.length} className="h-24 text-center">
                      No carts found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>

          <div className="flex justify-between items-center p-4">
            <Button
              variant="outline"
              onClick={() => cartTable.previousPage()}
              disabled={!cartTable.getCanPreviousPage()}
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
              onClick={() => cartTable.nextPage()}
              disabled={!cartTable.getCanNextPage()}
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

export default CartList;