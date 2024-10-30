"use client";
import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Save, Loader2, ImageIcon, FileText, ChevronDown } from 'lucide-react';
import { fetchAllRatecard, createPackage, Package } from '@/lib/api';
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

// Import React-Quill dynamically
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

// Quill modules
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

const PackageCreateForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [packageImage, setPackageImage] = useState<File | null>(null);
  const [description, setDescription] = useState<string>('');
  const [packageName, setPackageName] = useState<string>('');
  const [packageType, setPackageType] = useState<string>('regular');
  const [createdBy, setCreatedBy] = useState<string>('admin');
  const [providerId, setProviderId] = useState<string | null>(null);
  const [discountType, setDiscountType] = useState<string>('flat');
  const [discountValue, setDiscountValue] = useState<number>(0);
  const [validityPeriod, setValidityPeriod] = useState<number | null>(null);
  const [renewalOptions, setRenewalOptions] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [rateCards, setRateCards] = useState<any[]>([]);
  const [selectedRateCards, setSelectedRateCards] = useState<string[]>([]);
  const [isRateCardDropdownOpen, setIsRateCardDropdownOpen] = useState<boolean>(false);

  const { toast } = useToast();

  // Fetch rate cards on component mount
  useEffect(() => {
    const fetchRateCardData = async () => {
      try {
        const response = await fetchAllRatecard();
        setRateCards(response || []);
      } catch (error) {
        toast({
          variant: 'error',
          title: 'Error',
          description: 'Failed to load rate cards.',
        });
      }
    };
    fetchRateCardData();
  }, []);

  // Handle image upload
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPackageImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!packageName || !discountType || !discountValue) {
      toast({
        variant: 'error',
        title: 'Validation Error',
        description: 'Please fill all the required fields.',
      });
      setIsSubmitting(false);
      return;
    }

    // Construct the Package object
    const packageData: Package = {
      name: packageName,
      description: description || '', // Ensure description is not null
      image: packageImage || null,
      package_type: packageType,
      created_by: createdBy,
      provider_id: providerId,
      discount_type: discountType,
      discount_value: discountValue,
      validity_period: packageType === 'amc' ? validityPeriod : null,
      renewal_options: renewalOptions,
      is_active: isActive,
      rate_card_ids: selectedRateCards,
    };

    try {
      await createPackage(packageData);
      toast({
        variant: 'success',
        title: 'Success',
        description: 'Package created successfully.',
      });
      // Redirect or reset form after success
    } catch (error: any) {
      toast({
        variant: 'error',
        title: 'Error',
        description: error.message || 'Failed to create package.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle rate card selection
  const handleRateCardSelection = (rateCardId: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedRateCards((prev) => [...prev, rateCardId]);
    } else {
      setSelectedRateCards((prev) => prev.filter((id) => id !== rateCardId));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-12xl mx-auto space-y-6">
        <div className="text-left space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Package Management</h1>
          <p className="text-gray-500">Create a new package</p>
        </div>

        <Card className="border-none shadow-xl bg-white/80 backdrop-blur">
          <CardHeader className="border-b border-gray-100 pb-6">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-1 bg-blue-600 rounded-full" />
              <div>
                <CardTitle className="text-xl text-gray-800">New Package</CardTitle>
                <CardDescription className="text-gray-500">
                  Fill in the details below to create a new package
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Package Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Package Name</label>
                <Input
                  placeholder="Enter package name"
                  value={packageName}
                  onChange={(e) => setPackageName(e.target.value)}
                  className="h-11"
                  required
                />
              </div>

               {/* Description Field with React-Quill */}
               <div className="space-y-2" style={{ height: "270px" }}>
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <FileText className="w-4 h-5 text-blue-500" />
                  <span>Description</span>
                </label>
                <ReactQuill
                  value={description}
                  onChange={setDescription}
                  theme="snow"
                  modules={quillModules}
                  style={{ height: "200px" }}
                />
              </div>

              {/* Package Image Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Package Image</label>
                <Input type="file" accept="image/*" onChange={handleImageUpload} className="h-11" />
                {imagePreview && (
                  <div className="mt-2">
                    <img src={imagePreview} alt="Package Preview" className="h-32 w-32 object-cover rounded-md" />
                  </div>
                )}
              </div>

              {/* Package Type Selector */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Package Type</label>
                <Select value={packageType} onValueChange={setPackageType}>
                  <SelectTrigger className="bg-white border-gray-200">
                    <SelectValue placeholder="Select package type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="regular">Regular</SelectItem>
                    <SelectItem value="amc">AMC</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Rate Card Dropdown with Checkbox Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Select Rate Cards</label>
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-2 bg-white border border-gray-200 rounded"
                    onClick={() => setIsRateCardDropdownOpen(!isRateCardDropdownOpen)}
                  >
                    {selectedRateCards.length > 0 ? `Selected (${selectedRateCards.length})` : 'Select rate cards'}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isRateCardDropdownOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-auto">
                      {rateCards.map((rateCard) => (
                        <div key={rateCard.id} className="flex items-center p-2">
                          <Checkbox
                            checked={selectedRateCards.includes(rateCard.id.toString())}
                            onCheckedChange={(checked: any) =>
                              handleRateCardSelection(rateCard.id.toString(), checked)
                            }
                            id={`rateCard-${rateCard.id}`}
                          />
                          <label htmlFor={`rateCard-${rateCard.id}`} className="ml-2">
                            {rateCard.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Discount Fields */}
              <div className="flex space-x-4">
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium text-gray-700">Discount Type</label>
                  <Select value={discountType} onValueChange={setDiscountType}>
                    <SelectTrigger className="bg-white border-gray-200">
                      <SelectValue placeholder="Select discount type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flat">Flat</SelectItem>
                      <SelectItem value="percentage">Percentage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium text-gray-700">Discount Value</label>
                  <Input
                    type="number"
                    value={discountValue.toString()}
                    onChange={(e) => setDiscountValue(parseFloat(e.target.value))}
                    placeholder="Enter discount value"
                    required
                  />
                </div>
              </div>

             

              {/* Validity Period (for AMC only) */}
              {packageType === "amc" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Validity Period (months)</label>
                  <Input
                    type="number"
                    value={validityPeriod?.toString() || ''}
                    onChange={(e) => setValidityPeriod(parseInt(e.target.value))}
                    placeholder="Enter validity period"
                  />
                </div>
              )}

              {/* Renewal Options */}
              <div className="flex items-center space-x-2">
                <Switch checked={renewalOptions} onCheckedChange={setRenewalOptions} />
                <span className="text-sm text-gray-700">Enable Renewal Options</span>
              </div>

              {/* Active Status */}
              <div className="flex items-center space-x-2">
                <Switch checked={isActive} onCheckedChange={setIsActive} />
                <span className="text-sm text-gray-700">Active</span>
              </div>

              <Button className="w-full" disabled={isSubmitting} type="submit">
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Saving...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Save className="w-4 h-4" />
                    <span>Create Package</span>
                  </div>
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="border-t border-gray-100 mt-6" />
        </Card>
      </div>
    </div>
  );
};

export default PackageCreateForm;