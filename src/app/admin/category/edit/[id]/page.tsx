"use client";
import React, { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react';
import dynamic from 'next/dynamic';
import { useRouter, usePathname } from 'next/navigation';
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Save, ImageIcon, Globe2, Type, FileInput, MapPin, Download, FileText, Loader2, Plus, Trash2 } from 'lucide-react';
import {
  fetchCategoryById, fetchAllGstRates, updateCategory, Category, ServiceSegment, Location, ExcludeImage, Attribute, ServiceDetail, IncludeItem
} from '@/lib/api'; // Import interfaces and API functions
import * as XLSX from 'xlsx';
import { useToast } from "@/hooks/use-toast";

// Importing React-Quill dynamically
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

// Custom toolbar configuration for React-Quill
const quillModules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'size': [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
};

const CategoryEdit: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Extract the ID from the URL path
  const categoryId = pathname?.split('/').pop();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [categoryImage, setCategoryImage] = useState<File | null>(null);
  const [optionalHeading, setOptionalHeading] = useState<string>('');

  const [locations, setLocations] = useState<Location[]>([]);
  const [locationInput, setLocationInput] = useState<string>('');
  const [locationType, setLocationType] = useState<string>('specific');
  const [locationMethod, setLocationMethod] = useState<string>('google');
  const [description, setDescription] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(true);
  const [categoryName, setCategoryName] = useState<string>('');
  const [serviceTime, setServiceTime] = useState<string>('');
  const [sgst, setSgst] = useState<number | null>(null);
  const [cgst, setCgst] = useState<number | null>(null);
  const [igst, setIgst] = useState<number | null>(null);
  const [sacCode, setSacCode] = useState<string>('');
  const [hstRates, setHstRates] = useState<any[]>([]);
  const [attributes, setAttributes] = useState<Attribute[]>([]);
  const [serviceSegments, setServiceSegments] = useState<ServiceSegment[]>([]);
  const [showExcludeSection, setShowExcludeSection] = useState<boolean>(false);
  const [excludeHeading, setExcludeHeading] = useState<string>("");
  const [excludeDescription, setExcludeDescription] = useState<string>("");
  const [excludeItems, setExcludeItems] = useState<string[]>([]);
  const [excludeImages, setExcludeImages] = useState<File[]>([]);
  const [includeItems, setIncludeItems] = useState<IncludeItem[]>([]);
  const [showIncludeSection, setShowIncludeSection] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    if (categoryId) {
      fetchCategoryDetails(categoryId);
    }
  }, [categoryId]);


  useEffect(() => {
    const fetchTaxRates = async () => {
      try {
        const rates = await fetchAllGstRates();
        setHstRates(rates);
      } catch (error) {
        toast({
          variant: "error",
          title: "Error",
          description: "Failed to load tax rates.",
        });
      }
    };

    fetchTaxRates();
  }, []);
  const fetchCategoryDetails = async (id: string) => {
    try {
      const categoryData: Category = await fetchCategoryById(id);

      // Set all fields from API response
      setCategoryName(categoryData.name || '');
      setOptionalHeading(categoryData.optional_heading || '');
      setIsActive(categoryData.active || true);
      setLocations(categoryData.locations || []);
      setAttributes(categoryData.attributes || []);
      setServiceSegments(categoryData.serviceSegments || []);
      setServiceTime(categoryData.service_time || '');
      setSgst(categoryData.sgst_tax || null);
      setCgst(categoryData.cgst_tax || null);
      setIgst(categoryData.igst_tax ?? null); // Set IGST tax field
      console.log("categoryData.igst_tax", categoryData.igst_tax)
      setSacCode(categoryData.sac_code || ''); // Set SAC code field
      setExcludeHeading(categoryData.exclude_heading || '');
      setExcludeDescription(categoryData.exclude_description || '');
      // Handle Exclude Items
      if (categoryData.excludeItems) {
        const excludeItems = categoryData.excludeItems.map((item) => item.item);
        setExcludeItems(excludeItems || []);
      } else {
        setExcludeItems([]);
      }
      setShowExcludeSection((categoryData.excludeItems?.length || 0) > 0)


      // Handle Exclude Images
      if (categoryData.excludedImages) {
        const excludeImages = categoryData.excludedImages.map((image) => ({
          image: image.image_path,
        }));
        setExcludeImages(
          excludeImages ? excludeImages.map((item) => item.image) : []
        );
      } else {
        setExcludeImages([]);
      }
      console.log(categoryData.excludedImages, "categoryData.excludeImages");
      // Handle Include Items
      setIncludeItems(categoryData.includeItems || []);
      setShowIncludeSection((categoryData.includeItems?.length || 0) > 0)
      // Handle image preview
      if (typeof categoryData.image === 'string' && categoryData.image) {
        setImagePreview(`${categoryData.image}`);
      } else {
        setImagePreview(null);
      }

      setLocationMethod(categoryData.location_method || 'excel');
      setLocationType(categoryData.location_type || 'specific');
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to fetch category: ${error}`,
        variant: "destructive",
      });
    }
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCategoryImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Remove an entire attribute
  const removeAttribute = (index: number) => {
    setAttributes((prev) => prev.filter((_, i) => i !== index));
  };

  const addAttribute = () => {
    setAttributes((prev) => [
      ...prev,
      {
        name: "",
        type: "list",
        options: [{ id: Date.now(), value: "" }], // Initialize options with a valid object
      },
    ]);
  };


  const updateAttribute = (index: number, field: string, value: string) => {
    const updatedAttributes = [...attributes];
    updatedAttributes[index] = { ...updatedAttributes[index], [field]: value };
    setAttributes(updatedAttributes);
  };

  const addServiceSegment = () => {
    setServiceSegments((prev) => [...prev, { segment_name: "" }]);
  };

  // Add an option to a specific attribute
  const addOption = (attrIndex: number) => {
    const updatedAttributes = [...attributes];
    updatedAttributes[attrIndex].options.push({
      id: Date.now(), // Assign a unique ID
      value: "", // Initialize an empty value
    });
    setAttributes(updatedAttributes);
  };


  // Update an option for a specific attribute
  const updateOption = (attrIndex: number, optIndex: number, value: string) => {
    const updatedAttributes = [...attributes];
    updatedAttributes[attrIndex].options[optIndex] = {
      ...updatedAttributes[attrIndex].options[optIndex], // Retain the existing `id`
      value, // Update only the value
    };
    setAttributes(updatedAttributes);
  };


  // Remove an option from a specific attribute
  const removeOption = (attrIndex: number, optIndex: number) => {
    const updatedAttributes = [...attributes];
    updatedAttributes[attrIndex].options = updatedAttributes[attrIndex].options.filter(
      (_, i) => i !== optIndex
    );
    setAttributes(updatedAttributes);
  };


  const updateServiceSegment = (index: number, value: string) => {
    setServiceSegments((prev) => {
      const updatedSegments = [...prev];
      updatedSegments[index] = { ...updatedSegments[index], segment_name: value };
      return updatedSegments;
    });
  };

  const removeServiceSegment = (index: number) => {
    setServiceSegments((prev) => prev.filter((_, i) => i !== index));
  };

  const addIncludeItem = () => {
    setIncludeItems((prev) => [...prev, { title: "", description: "" }]);
  };

  // Add a new exclude item
  const addExcludeItem = () => {
    setExcludeItems((prev) => [...prev, ""]);
  };

  // Update an exclude item
  const updateExcludeItem = (index: number, value: string) => {
    const updatedItems = [...excludeItems];
    updatedItems[index] = value;
    setExcludeItems(updatedItems);
  };

  // Remove an exclude item
  const removeExcludeItem = (index: number) => {
    setExcludeItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleExcludeImageUpload = (files: FileList | null) => {
    console.log("files", files); // Log incoming FileList
    if (files) {
      const uploadedImages = Array.from(files); // Convert FileList to an array of File objects
      setExcludeImages((prev) => [...prev, ...uploadedImages]); // Store raw File objects
    }
  };

  // Remove an image
  const removeImage = (index: number) => {
    setExcludeImages((prev) => prev.filter((_, i) => i !== index));
  };


  // Update an include item
  const updateIncludeItem = (index: number, field: keyof IncludeItem, value: string) => {
    const updatedItems = [...includeItems];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setIncludeItems(updatedItems);
  };

  // Remove an include item
  const removeIncludeItem = (index: number) => {
    setIncludeItems((prev) => prev.filter((_, i) => i !== index));
  };


  const handleLocationAdd = (e: FormEvent) => {
    e.preventDefault();
    if (locationInput) {
      const locationData: Location = {
        country: 'Unknown',
        state: 'Unknown',
        city: locationInput,
        postal_code: null,
        latitude: null,
        longitude: null,
        source_type: 'manual',
      };
      setLocations((prev) => [...prev, locationData]);
      setLocationInput('');
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const data = evt.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const locationData = parsedData.slice(1).map((row: any) => ({
          country: row[0] || 'Unknown',
          state: row[1] || 'Unknown',
          city: row[2] || 'Unknown',
          postal_code: row[3] || null,
          latitude: row[4] || null,
          longitude: row[5] || null,
          source_type: 'sheet',
        }));
        setLocations((prev) => [...prev, ...locationData]);
      };
      reader.readAsBinaryString(file);
    }
  };

  const downloadSampleExcel = () => {
    const sampleData = `Country,State,City,Postal Code,Latitude,Longitude\n"USA","California","Los Angeles","90001",34.052235,-118.243683`;
    const blob = new Blob([sampleData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sample_Locations.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formattedExcludeItems = excludeItems.map((item) => ({
      item, // Wrap each item in an object with the `item` field
    }));

    // Prepare exclude images
    const formattedExcludeImages: ExcludeImage[] = excludeImages.map((file) => ({
      image_path: file, // Wrap each file in an object with the `image` property
    }));
    const categoryData: Category = {
      name: categoryName,
      image: categoryImage,
      optional_heading: optionalHeading,
      locations,
      exclude_heading: excludeHeading,
      exclude_description: excludeDescription,
      location_type: locationType,
      service_time: serviceTime,
      active: isActive,
      attributes: attributes,
      serviceSegments: serviceSegments,
      location_method: locationMethod,
      igst_tax: igst,
      sgst_tax: sgst,
      cgst_tax: cgst,
      sac_code: sacCode,
      excludeItems: formattedExcludeItems, // Add exclude items
      includeItems: includeItems,
      excludedImages: formattedExcludeImages,
    };

    try {
      const catdata = await updateCategory(categoryId as string, categoryData);
      toast({
        variant: 'success',
        title: 'Success.',
        description: 'Category updated successfully',
      });
      router.push('/admin/category'); // Redirect after successful update
    } catch (error) {
      toast({
        variant: 'error',
        title: 'Error.',
        description: `${error}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-12xl mx-auto space-y-6">
        <div className="text-left space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Edit Category</h1>
          <p className="text-gray-500">Update category details</p>
        </div>

        <Card className="border-none shadow-xl bg-white/80 backdrop-blur">
          <CardHeader className="border-b border-gray-100 pb-6">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-1 bg-blue-600 rounded-full" />
              <div>
                <CardTitle className="text-xl text-gray-800">Edit Category</CardTitle>
                <CardDescription className="text-gray-500">
                  Update the details below to modify the category
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <Type className="w-4 h-4 text-blue-500" />
                  <span>Category Name</span>
                </label>
                <Input
                  placeholder="Enter category name"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="h-11"
                  required
                />
              </div>

              {/* OPTIONAL Field */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <Type className="w-4 h-4 text-blue-500" />
                  <span>Optional heading</span>
                </label>
                <Input
                  placeholder="Eg:- No of AC. service"
                  value={optionalHeading}
                  onChange={(e) => setOptionalHeading(e.target.value)}
                  className="h-11"
                  required
                />
              </div>


              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <Type className="w-4 h-4 text-blue-500" />
                  <span>Service time</span>
                </label>
                <Input
                  placeholder="Eg:- 30 mint"
                  value={serviceTime}
                  onChange={(e) => setServiceTime(e.target.value)}
                  className="h-11"
                  required
                />
              </div>



              {/* Category Image Field */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <ImageIcon className="w-4 h-4 text-blue-500" />
                  <span>Category Image</span>
                </label>
                <Input type="file" accept="image/*" onChange={handleImageUpload} className="h-11" />
                {imagePreview && (
                  <div className="mt-2">
                    <img src={imagePreview} alt="Category Preview" className="h-32 w-32 object-cover rounded-md" />
                  </div>
                )}
              </div>

              {/* GST Dropdowns */}
              <div className="grid grid-cols-3 gap-4">
                {/* IGST Dropdown */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <span>IGST (%)</span>
                  </label>
                  <Select
                    value={igst !== null ? igst.toString() : ""}
                    onValueChange={(value) => setIgst(parseInt(value))}
                  >
                    <SelectTrigger className="bg-white border-gray-200">
                      <SelectValue placeholder="Select IGST" />
                    </SelectTrigger>
                    <SelectContent>
                      {hstRates.map((rate) => (
                        <SelectItem key={`igst-${rate.id}`} value={rate.IGST.toString()}>
                          {rate.IGST}%
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* SGST Dropdown */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <span>SGST (%)</span>
                  </label>
                  <Select
                    value={sgst?.toString() || ""}
                    onValueChange={(value) => setSgst(parseInt(value))}
                  >
                    <SelectTrigger className="bg-white border-gray-200">
                      <SelectValue placeholder="Select SGST" />
                    </SelectTrigger>
                    <SelectContent>
                      {hstRates.map((rate) => (
                        <SelectItem key={`sgst-${rate.id}`} value={rate.SGST.toString()}>
                          {rate.SGST}%
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* CGST Dropdown */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <span>CGST (%)</span>
                  </label>
                  <Select
                    value={cgst?.toString() || ""}
                    onValueChange={(value) => setCgst(parseInt(value))}
                  >
                    <SelectTrigger className="bg-white border-gray-200">
                      <SelectValue placeholder="Select CGST" />
                    </SelectTrigger>
                    <SelectContent>
                      {hstRates.map((rate) => (
                        <SelectItem key={`cgst-${rate.id}`} value={rate.CGST.toString()}>
                          {rate.CGST}%
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* SAC Code Field */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <span>SAC Code</span>
                </label>
                <Input
                  type="text"
                  placeholder="Enter SAC Code"
                  value={sacCode}
                  onChange={(e) => setSacCode(e.target.value)}
                  className="h-11"
                />
              </div>

              {/* Active/Inactive Switch */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <span>Category Status</span>
                </label>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">Inactive</span>
                  <Switch checked={isActive} onCheckedChange={setIsActive} className="data-[state=checked]:bg-blue-500" />
                  <span className="text-sm text-gray-600">Active</span>
                </div>
              </div>

              {/* Attributes Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Attributes</h3>
                {attributes.map((attribute, attrIndex) => (
                  <div key={attrIndex} className="space-y-2 border p-4 rounded-md bg-gray-50">
                    {/* Attribute Name */}
                    <Input
                      placeholder="Attribute Name"
                      value={attribute.name}
                      onChange={(e) => updateAttribute(attrIndex, "name", e.target.value)}
                      className="h-10"
                    />

                    {/* Attribute Type */}
                    <Select
                      value={attribute.type}
                      onValueChange={(value) => updateAttribute(attrIndex, "type", value)}
                    >
                      <SelectTrigger className="bg-white border-gray-200">
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="list">List</SelectItem>
                        <SelectItem value="dropdown">Dropdown</SelectItem>
                        <SelectItem value="search">Search</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Options Management */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Options</h4>
                      {attribute.options.map((option, optIndex) => (
                        <div key={optIndex} className="flex items-center space-x-2">
                          <Input
                            placeholder={`Option ${optIndex + 1}`}
                            value={option.value || ''} // Safely access the `value` property
                            onChange={(e) => updateOption(attrIndex, optIndex, e.target.value)}
                            className="h-10 flex-1"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            className="p-2 text-red-500"
                            onClick={() => removeOption(attrIndex, optIndex)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-2 flex items-center"
                        onClick={() => addOption(attrIndex)}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Option
                      </Button>
                    </div>


                    {/* Remove Attribute */}
                    <Button
                      type="button"
                      variant="ghost"
                      className="mt-4 flex items-center text-red-500"
                      onClick={() => removeAttribute(attrIndex)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove Attribute
                    </Button>
                  </div>
                ))}

                <Button type="button" variant="outline" onClick={addAttribute}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Attribute
                </Button>
              </div>


              {/* Service Segments */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Service Segments</h3>
                {serviceSegments.map((segment, index) => (
                  <div key={index} className="space-y-2">
                    <Input
                      placeholder="Segment Name"
                      value={segment.segment_name}
                      onChange={(e) => updateServiceSegment(index, e.target.value)}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      className="mt-4 flex items-center text-red-500"
                      onClick={() => removeServiceSegment(index)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove Segment
                    </Button>
                  </div>
                ))}
                <Button type="button" onClick={addServiceSegment}>Add Service Segment</Button>
              </div>


              <div className="space-y-4">

                <Button type="button" onClick={() => setShowExcludeSection(!showExcludeSection)} className="mb-4">
                  {showExcludeSection ? "Hide Exclude Section" : "Show Exclude Section"}
                </Button>

                {showExcludeSection && (
                  <div className="space-y-6 border p-4 rounded-md bg-gray-50">
                    {/* Exclude Heading */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Exclude Heading</label>
                      <Input
                        placeholder="Enter heading"
                        value={excludeHeading}
                        onChange={(e) => setExcludeHeading(e.target.value)}
                      />
                    </div>

                    {/* Exclude Description */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Exclude Description</label>
                      <Input
                        placeholder="Enter description"
                        value={excludeDescription}
                        onChange={(e) => setExcludeDescription(e.target.value)}
                      />
                    </div>

                    {/* Multiple Image Upload */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Upload Images</label>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => handleExcludeImageUpload(e.target.files)}
                      />
                      <div className="flex flex-wrap gap-4 mt-4">
                        {excludeImages.map((image, index) => (
                          <div key={index} className="relative">
                            <img
                              src={image instanceof File ? URL.createObjectURL(image) : image}
                              alt={`Exclude Image ${index + 1}`}
                              className="w-24 h-24 object-cover rounded-md"
                            />
                            <button
                              type="button"
                              className="absolute top-1 right-1 bg-white rounded-full p-1 text-red-500"
                              onClick={() => removeImage(index)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Exclude Items */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Exclude Items</h3>
                      {excludeItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 bg-gray-100 p-2 rounded-md"
                        >
                          <Input
                            placeholder={`Item ${index + 1}`}
                            value={item}
                            onChange={(e) => updateExcludeItem(index, e.target.value)}
                            className="h-10 flex-1"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            className="p-2 text-red-500"
                            onClick={() => removeExcludeItem(index)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}

                      {/* Add Exclude Item Button */}
                      <Button
                        type="button"
                        variant="outline"
                        className="flex items-center"
                        onClick={addExcludeItem}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Exclude Item
                      </Button>
                    </div>
                  </div>
                )}
              </div>



              <div className="space-y-4">

                <Button type="button" onClick={() => setShowIncludeSection((prev) => !prev)} className="mb-4">
                  {showIncludeSection ? "Hide Include Section" : "Show Include Section"}
                </Button>

                {/* Include Section */}
                {showIncludeSection && (
                  <div className="space-y-4 border p-4 rounded-md bg-gray-50">
                    <h3 className="text-lg font-semibold">Include Items</h3>

                    {includeItems.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <Input
                          placeholder="Title"
                          value={item.title}
                          onChange={(e) => updateIncludeItem(index, "title", e.target.value)}
                          className="h-10"
                        />
                        <Input
                          placeholder="Description"
                          value={item.description}
                          onChange={(e) => updateIncludeItem(index, "description", e.target.value)}
                          className="h-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          className="p-2 text-red-500"
                          onClick={() => removeIncludeItem(index)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}

                    <Button type="button" onClick={addIncludeItem} variant="outline" className="mt-2 flex items-center">
                      <Plus className="w-4 h-4 mr-2" />
                      Add More
                    </Button>
                  </div>

                )}
              </div>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <Globe2 className="w-4 h-4 text-blue-500" />
                  <span>Location Type</span>
                </label>
                <Select value={locationType} onValueChange={(value) => setLocationType(value)}>
                  <SelectTrigger className="bg-white border-gray-200">
                    <SelectValue placeholder="Select location type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="penindia">Penindia</SelectItem>
                    <SelectItem value="specific">Specific</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {locationType === 'specific' && (
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>Location Method</span>
                  </label>
                  <Select value={locationMethod} onValueChange={(value) => setLocationMethod(value)}>
                    <SelectTrigger className="bg-white border-gray-200">
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Places</SelectItem>
                      <SelectItem value="excel">Excel Import</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {locationType === 'specific' && locationMethod === 'google' && (
                <div className="space-y-4">
                  {/* Google Places Autocomplete */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>Google Places Search</span>
                    </label>
                    <div className="flex items-center space-x-3">
                      <Input
                        id="location-input"
                        value={locationInput}
                        onChange={(e) => setLocationInput(e.target.value)}
                        placeholder="Search for a location"
                        className="h-11"
                      />
                      <Button type="button" onClick={handleLocationAdd}>Add</Button>
                    </div>
                  </div>

                  {/* Display added locations */}
                  <div className="space-y-1">
                    {locations.map((location, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
                        <span className="text-sm text-gray-700">{`${location.city}, ${location.state}, ${location.country}`}</span>
                        <Button type="button" variant="ghost" onClick={() => setLocations(locations.filter((_, i) => i !== index))}>
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}


              {locationType === 'specific' && locationMethod === 'excel' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <FileInput className="w-4 h-4 text-blue-500" />
                      <span>Import from Excel</span>
                    </label>
                    <Input type="file" accept=".xls, .xlsx, .csv" onChange={handleFileUpload} className="h-11" />
                  </div>

                  {/* Download Sample Excel */}
                  <Button type="button" variant="outline" onClick={downloadSampleExcel}>
                    <Download className="w-4 h-4 mr-2" />
                    Download Sample Excel
                  </Button>
                </div>
              )}

              <Button className="w-100 flex-1 h-11 bg-primary" disabled={isSubmitting} type="submit">
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Updating...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Save className="w-4 h-4" />
                    <span>Update Category</span>
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CategoryEdit;
