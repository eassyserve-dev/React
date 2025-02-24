"use client";

import React, { useState, useEffect, FormEvent } from "react";
import dynamic from "next/dynamic";

import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Save, Loader2, Globe2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  createPromocode,
  fetchAllCategories,
  fetchAllSubCategories,
  fetchAllRatecard,
  fetchAllpackages,
  fetchAllProvidersWithoupagination,
  Promocode,
} from "@/lib/api";

// Import React-Quill dynamically for client-side rendering
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

// Quill modules configuration
const quillModules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image", "video"],
    ["clean"],
  ],
};
const AddPromocodeForm: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [discountType, setDiscountType] = useState<"flat" | "percentage">("flat");
  const [discountValue, setDiscountValue] = useState<number | null>(null);
  const [minOrderValue, setMinOrderValue] = useState<number | null>(null);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [status, setStatus] = useState<"active" | "inactive" | "expired">("active");
  const [selectionType, setSelectionType] = useState<string>("");
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [providerId, setProviderId] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [options, setOptions] = useState<{ id: string; name: string }[]>([]);
  const [providers, setProviders] = useState<{ id: string; first_name: string }[]>([]);
  const [isGlobal, setIsGlobal] = useState<boolean>(false);
  const [displayToCustomer, setDisplayToCustomer] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [isActive, setIsActive] = useState<boolean>(true);
  const [isFree, setIsFree] = useState<boolean>(false); // New state for is_free
  const [rateCardId, setRateCardId] = useState<string | null>(null); // New state for selected rate card ID
  const [rateCardOptions, setRateCardOptions] = useState<{ id: string; name: string }[]>([]); // Options for rate cards
  

  useEffect(() => {
    const loadOptions = async () => {
      try {
        let data: { id: string; name: string }[] = [];
        switch (selectionType) {
          case "Category":
            const categories = await fetchAllCategories();
            data = categories.map((category) => ({
              id: category.id || '',
              name: category.name || "Unnamed Category",
            }));
            break;
          case "Subcategory":
            const subcategories = await fetchAllSubCategories();
            data = subcategories.map((subcategory) => ({
              id: subcategory.id || '',
              name: subcategory.name || "Unnamed Subcategory",
            }));
            break;
          case "Ratecard":
            const ratecards = await fetchAllRatecard();
            data = ratecards.map((ratecard) => ({
              id: ratecard.id || '',
              name: ratecard.name || "Unnamed Ratecard",
            }));
            break;
          case "Package":
            const packages = await fetchAllpackages();
            data = packages.map((pkg) => ({
              id: pkg.id || '',
              name: pkg.name || "Unnamed Package",
            }));
            break;
          default:
            setOptions([]);
            return;
        }
        setOptions(data);
        setSelectedItemId(null);
      } catch (error) {
        toast({ variant: "error", title: "Error", description: `Failed to load ${selectionType} options.` });
      }
    };

    if (selectionType) loadOptions();
  }, [selectionType, toast]);

  useEffect(() => {
    const loadProviders = async () => {
      try {
        const providersData = await fetchAllProvidersWithoupagination();
        setProviders(providersData.map((provider: any) => ({ id: provider.id, first_name: provider.first_name || "Unnamed Provider" })));
      } catch (error) {
        toast({ variant: "error", title: "Error", description: "Failed to load providers." });
      }
    };

    loadProviders();
  }, [toast]);


  useEffect(() => {
    const loadRateCards = async () => {
      try {
        const rateCards = await fetchAllRatecard(); // New API for fetching rate cards
        const options = rateCards.map((rateCard) => ({
          id: rateCard.id || '',
          name: rateCard.name || "Unnamed Ratecard",
        }));
        setRateCardOptions(options);
      } catch (error) {
        toast({
          variant: "error",
          title: "Error",
          description: "Failed to load rate cards for free promocode.",
        });
      }
    };
  
    if (isFree) loadRateCards(); // Fetch only if isFree is true
  }, [isFree, toast]);
  
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!code || !discountValue || !startDate || !endDate || !selectionType || !selectedItemId || !providerId || !image) {
      toast({
        variant: "error",
        title: "Validation Error",
        description: "Please fill in all required fields.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const promocodeData: Promocode = {
        code,
        description,
        discount_type: discountType,
        discount_value: discountValue,
        min_order_value: minOrderValue,
        start_date: startDate,
        end_date: endDate,
        status,
        is_active: isActive,
        selection_type: selectionType,
        selection_id: selectedItemId,
        is_global: isGlobal,
        display_to_customer: displayToCustomer,
        provider_id: providerId,
        is_free: isFree, // New field
        rate_card_id: isFree ? rateCardId : null,
        image, // Attach the image
      };

      await createPromocode(promocodeData);

      toast({
        variant: "success",
        title: "Success",
        description: "Promocode created successfully.",
      });

      // Reset form
      // setCode("");
      // setDescription("");
      // setDiscountType("flat");
      // setDiscountValue(null);
      // setMinOrderValue(null);
      // setStartDate("");
      // setEndDate("");
      // setStatus("active");
      // setIsActive(true);
      // setSelectionType("");
      // setSelectedItemId(null);
      // setOptions([]);
      // setProviderId(null);
      // setImage(null);
      // setIsGlobal(false);
      // setDisplayToCustomer(true);
    } catch (error) {
      toast({
        variant: "error",
        title: "Error",
        description: ` ${error}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-12xl mx-auto space-y-6">
        <Card className="border-none shadow-xl bg-white/80 backdrop-blur">
          <form onSubmit={onSubmit} className="space-y-6">
            <CardHeader>
              <CardTitle>Create New Promocode</CardTitle>
              <CardDescription>Fill in the details below to create a new promocode</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Code</label>
                <Input
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter promocode"
                  required
                />
              </div>




              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <Globe2 className="w-4 h-4 text-blue-500" />
                  <span>Select Provider</span>
                </label>
                <Select
                  value={providerId ?? ''}
                  onValueChange={(value) => setProviderId(value)}
                >
                  <SelectTrigger className="bg-white border-gray-200">
                    <SelectValue placeholder="Select a provider" />
                  </SelectTrigger>
                  <SelectContent>
                    {providers.map((provider) =>
                      provider?.id && provider?.first_name ? (
                        <SelectItem key={provider.id} value={provider.id.toString()}>
                          {provider.first_name}
                        </SelectItem>
                      ) : null
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Image</label>
                <Input type="file" accept="image/*" onChange={handleImageChange} required />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Active</label>
                <Switch checked={isActive} onCheckedChange={setIsActive} />
              </div>

              <div className="space-y-2" style={{ height: "270px" }}>
                <label className="text-sm font-medium text-gray-700">Description</label>
                <ReactQuill
                  value={description}
                  onChange={setDescription}
                  theme="snow"
                  modules={quillModules}
                  style={{ height: "200px" }}
                />
               
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Discount Type</label>
                <Select value={discountType} onValueChange={(value) => setDiscountType(value as "flat" | "percentage")}>
                  <SelectTrigger className="bg-white border-gray-200">
                    <SelectValue placeholder="Select Discount Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flat">Flat</SelectItem>
                    <SelectItem value="percentage">Percentage</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
  <label className="text-sm font-medium text-gray-700">Discount Value</label>
  <Input
    type="number"
    value={discountValue ?? ""}
    onChange={(e) => {
      const value = Number(e.target.value);
      setDiscountValue(value > 0 ? value : null); // Set to null (blank) for negative or zero values
    }}
    placeholder="Enter discount value"
    required
  />
</div>

<div>
  <label className="text-sm font-medium text-gray-700">Min Order Value</label>
  <Input
    type="number"
    value={minOrderValue ?? ""}
    onChange={(e) => {
      const value = Number(e.target.value);
      setMinOrderValue(value > 0 ? value : null); // Set to null (blank) for negative or zero values
    }}
    placeholder="Enter min order value (optional)"
  />
</div>



              <div>
                <label className="text-sm font-medium text-gray-700">Start Date & Time</label>
                <Input
                  type="datetime-local"
                  value={startDate}
                  min={new Date().toISOString().slice(0, 16)} // Prevent past date-time
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">End Date & Time</label>
                <Input
                  type="datetime-local"
                  value={endDate}
                  min={startDate || new Date().toISOString().slice(0, 16)} // Prevent dates before start date-time
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>


              <div>
                <label className="text-sm font-medium text-gray-700">Selection Type</label>
                <Select value={selectionType} onValueChange={(value) => setSelectionType(value)}>
                  <SelectTrigger className="bg-white border-gray-200">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Category">Category</SelectItem>
                    <SelectItem value="Subcategory">Subcategory</SelectItem>
                    <SelectItem value="Ratecard">Ratecard</SelectItem>
                    <SelectItem value="Package">Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {selectionType && (
                <div>
                  <label className="text-sm font-medium text-gray-700">Select {selectionType}</label>
                  <Select value={String(selectedItemId)} onValueChange={(value) => setSelectedItemId(value)}>
                    <SelectTrigger className="bg-white border-gray-200">
                      <SelectValue placeholder={`Select ${selectionType}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem key={option.id} value={String(option.id)}>
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-gray-700">Global Promocode</label>
                <Switch checked={isGlobal} onCheckedChange={setIsGlobal} />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Display to Customer</label>
                <Switch checked={displayToCustomer} onCheckedChange={setDisplayToCustomer} />
              </div>

              <div>
  <label className="text-sm font-medium text-gray-700">Is Free</label>
  <Switch checked={isFree} onCheckedChange={setIsFree} />
</div>

{isFree && (
  <div>
    <label className="text-sm font-medium text-gray-700">Select Ratecard</label>
    <Select value={String(rateCardId)} onValueChange={(value) => setRateCardId(value)}>
      <SelectTrigger className="bg-white border-gray-200">
        <SelectValue placeholder="Select Ratecard" />
      </SelectTrigger>
      <SelectContent>
        {rateCardOptions.map((option) => (
          <SelectItem key={option.id} value={String(option.id)}>
            {option.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
)}


              <div>
                <label className="text-sm font-medium text-gray-700">Active/Inactive</label>
                <Switch
                  checked={status === "active"}
                  onCheckedChange={(checked) => setStatus(checked ? "active" : "inactive")}
                />
              </div>
            </CardContent>

            <CardFooter>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                Save Promocode
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddPromocodeForm;
