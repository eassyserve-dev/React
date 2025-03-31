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
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  ChevronLeft,
  ChevronRight,
  Edit,
  Trash2,
  Plus,
  Download, Copy,
} from "lucide-react";
import { fetchAllProviders, deleteProvider, exportProvider } from "@/lib/api";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

const ProviderList = () => {
  const [providers, setProviders] = useState<any[]>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 50,
  });
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [isExporting, setIsExporting] = useState(false);
  const { toast } = useToast();

  // Fetch providers from the backend with pagination
  const fetchProvidersData = async (page = 1, size = 50, status = "all") => {
    try {
      const { data, meta } = await fetchAllProviders(page, size, filterStatus);
      setProviders(data);
      setTotalPages(meta.totalPages);
      setTotalItems(meta.totalItems);
      setPagination((prev) => ({ ...prev, pageIndex: page - 1 }));
    } catch (error) {
      console.error("Error fetching providers:", error);
    }
  };

  useEffect(() => {
    fetchProvidersData(pagination.pageIndex + 1, pagination.pageSize, filterStatus);
  }, [pagination.pageIndex, pagination.pageSize, filterStatus]);

  const handleProviderDelete = async (provider: any) => {
    try {
      await deleteProvider(provider.id);
      toast({
        title: "Success",
        description: `Provider "${provider.first_name} ${provider.last_name}" deleted successfully`,
        variant: "success",
      });
      fetchProvidersData(pagination.pageIndex + 1, pagination.pageSize, filterStatus);
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to delete provider: ${error}`,
        variant: "destructive",
      });
    }
  };

    const handleExport = async () => {
      try {
        setIsExporting(true);
        await exportProvider();
       
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to export rate cards',
          variant: 'destructive',
        });
      } finally {
        setIsExporting(false);
      }
    };
  
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilterStatus(e.target.value);
    };
  
      const handlePrint = () => {
        const printableContent = providers
          .map((item) => `<tr><td>${item.id}</td><td>${item.first_name}</td><td>${item.is_active}</td></tr>`)
          .join("");
        const newWindow = window.open("", "_blank");
        newWindow?.document.write(`
          <html>
            <head>
              <title>Print Categories</title>
              <style>
                table { width: 100%; border-collapse: collapse; }
                td, th { border: 1px solid black; padding: 8px; text-align: left; }
              </style>
            </head>
            <body>
              <h1>Categories</h1>
              <table>
                <thead><tr><th>ID</th><th>Name</th><th>Status</th></tr></thead>
                <tbody>${printableContent}</tbody>
              </table>
            </body>
          </html>
        `);
        newWindow?.print();
      };
    
      const handleCopy = () => {
        const formattedData = providers.map((item) => `${item.id}, ${item.first_name}, ${item.is_active}`).join("\n");
        navigator.clipboard.writeText(formattedData);
        toast({ title: "Copied to Clipboard", description: "Category data copied." });
      };
    
      const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPagination((prev) => ({ ...prev, pageSize: Number(e.target.value) }));
      };
    


  const providerColumns: ColumnDef<any>[] = [
    {
      accessorKey: "sno", // Placeholder key for S.No
      header: "S.No",
      cell: (info) => info.row.index + 1, // Calculate the serial number dynamically
    },
    { accessorKey: "first_name", header: "First Name" },
    { accessorKey: "last_name", header: "Last Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phone", header: "Phone" },
    {
      accessorKey: "is_active",
      header: "Status",
      cell: ({ row }) => {
        const statusValue = row.original.active;

        let statusLabel = "";
        let statusClass = "";

        switch (statusValue) {
          case 0:
            statusLabel = "Active";
            statusClass = "bg-green-200 text-green-800";
            break;
          case 1:
            statusLabel = "Inactive";
            statusClass = "bg-yellow-200 text-yellow-800";
            break;
          case 2:
            statusLabel = "Deleted";
            statusClass = "bg-red-200 text-red-800";
            break;
          default:
            statusLabel = "Unknown";
            statusClass = "bg-gray-200 text-gray-800";
            break;
        }

        return <span className={`badge px-2 py-1 rounded ${statusClass}`}>{statusLabel}</span>;
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Link href={`/admin/provider/edit/${row.original.id}`} passHref>
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
                <p>Are you sure you want to delete provider: {row.original.first_name} {row.original.last_name}?</p>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <Button variant="secondary" onClick={() => handleProviderDelete(row.original)}>
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

  const providerTable = useReactTable({
    data: providers,
    columns: providerColumns,
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
          <h1 className="text-3xl font-bold text-gray-900">Provider List</h1>
          <div className="flex space-x-2">
            <select value={filterStatus} onChange={handleStatusChange} className="border p-2 rounded">
                       <option value="">All</option>
                       <option value="0">Active</option>
                       <option value="1">Deactivated</option>
                       <option value="2">Deleted</option>
                     </select>
                     <select value={pagination.pageSize} onChange={handlePageSizeChange} className="border p-2 rounded">
                       <option value={50}>50</option>
                       <option value={100}>100</option>
                       <option value={150}>150</option>
                     </select>
                     <Button onClick={handleExport}><Download className="w-4 h-4 mr-2" />Export</Button>
                     <Button onClick={handleCopy}><Copy className="w-4 h-4 mr-2" />Copy</Button>
                     <Button asChild variant="default" className="flex items-center space-x-2">
            <Link href="/admin/provider/add">
              <Plus className="w-4 h-4 mr-1" />
              <span>Add Provider</span>
            </Link>
          </Button>
          </div>
         
        </div>

        <Card className="border-none shadow-xl bg-white/80 backdrop-blur">
          <CardHeader className="border-b border-gray-100 pb-4">
            <CardTitle className="text-xl text-gray-800">Providers</CardTitle>
          </CardHeader>

          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                {providerTable.getHeaderGroups().map((headerGroup) => (
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
                {providerTable.getRowModel().rows.length ? (
                  providerTable.getRowModel().rows.map((row) => (
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
                    <TableCell colSpan={providerColumns.length} className="h-24 text-center">
                      No providers found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>

          <div className="flex justify-between items-center p-4">
            <Button
              variant="outline"
              onClick={() => providerTable.previousPage()}
              disabled={!providerTable.getCanPreviousPage()}
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
              onClick={() => providerTable.nextPage()}
              disabled={!providerTable.getCanNextPage()}
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

export default ProviderList;
