"use client";
import React, { useState, useEffect, FormEvent } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from '@/components/ui/select';
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/navigation';
import { Save, FileText, Loader2, Type, Globe2 } from 'lucide-react';
import { fetchAllCategories,createBooking, fetchSubCategoriesByCategoryId,fetchAllUsersWithouPagination,fetchUserAddresses, fetchProvidersByFilters, Provider, Package, fetchFilterOptionsByAttributeId, fetchFilterAttributes, AttributeOption, createRateCard, Category, Subcategory, Attribute } from '@/lib/api';


const AddBookingForm: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [selectionType, setSelectionType] = useState<string>('Category');

  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [filterAttributes, setFilterAttributes] = useState<Attribute[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('');    
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<string>('');
  const [selectedFilterAttributesId, setSelectedFilterAttributesId] = useState<string>('');
  const [serviceDate, setServiceDate] = useState<string>('');
  const [serviceTime, setServiceTime] = useState<string>('');
  const [placeToSupply, setPlaceToSupply] = useState<string>('');
  const [placeToDeliver, setPlaceToDeliver] = useState<string>('');
  const [razorpayOrderId, setRazorpayOrderId] = useState<string>('');
  const [invoiceNumber, setInvoiceNumber] = useState<string>('');
  const [advanceReceiptNumber, setAdvanceReceiptNumber] = useState<string>('');
  const [transactionId, setTransactionId] = useState<string>('');
  const [filterOptions, setFilterOptions] = useState<AttributeOption[]>([]);
  const [selectedFilterOptionId, setSelectedFilterOptionId] = useState<string>('');
  const [packages, setPackages] = useState<Package[]>([]);
  const [userId, setUserId] = useState<number | null>(null);
  const [providerId, setProviderId] = useState<number | null>(null);
  const [providers, setProviders] = useState<{ id: number; name: string }[]>([]);
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [addresses, setAddresses] = useState<{ id: number; full_address: string }[]>([]);
  const [deliveryAddressId, setDeliveryAddressId] = useState<number | null>(null);

  const { toast } = useToast();

  // Fetch categories on load
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoryData = await fetchAllCategories();
        setCategories(categoryData);
      } catch (error) {
        toast({
          variant: 'error',
          title: 'Error',
          description: 'Failed to load categories.',
        });
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      const loadSubcategoriesAndFilters = async () => {
        try {
          const subcategoryData = await fetchSubCategoriesByCategoryId(selectedCategoryId);
          setSubcategories(subcategoryData);
          try {
            const filterAttributeData = await fetchFilterAttributes(selectedCategoryId, null);
            setFilterAttributes(filterAttributeData);
          } catch (error) {
            setFilterAttributes([]);
          }
        } catch (error) {
          setSubcategories([]);
        }
      };
      loadSubcategoriesAndFilters();
    } else {
      setSubcategories([]);
      setFilterAttributes([]);
    }
  }, [selectedCategoryId]);



    // Fetch filter attributes when a subcategory is selected
    useEffect(() => {
      if (selectedSubcategoryId) {
        const loadFilterAttributes = async () => {
          try {
            const filterAttributeData = await fetchFilterAttributes(selectedCategoryId, selectedSubcategoryId);
            setFilterAttributes(filterAttributeData);
          } catch (error) {
            setFilterAttributes([]);
          }
        };
        loadFilterAttributes();
      }
    }, [selectedSubcategoryId, selectedCategoryId]);
  
  
  useEffect(() => {
    if (selectedFilterAttributesId) {
      const loadFilterOptions = async () => {
        try {
          const options = await fetchFilterOptionsByAttributeId(selectedFilterAttributesId);
          setFilterOptions(options);
        } catch (error) {
          setFilterOptions([]);
        }
      };
      loadFilterOptions();
    } else {
      setFilterOptions([]);
    }
  }, [selectedFilterAttributesId]);


  useEffect(() => {
    // Fetch providers and users on component mount
    const loadInitialData = async () => {
      try {
        const userData = await fetchAllUsersWithouPagination();


      
        setUsers(
          userData.map((user: any) => ({
            id: user.id,
            name: `${user.first_name} ${user.last_name}`,
          }))
        );
      } catch (error) {
        toast({ variant: "error", title: "Error", description: "Failed to load initial data." });
      }
    };

    loadInitialData();
  }, [toast]);


  useEffect(() => {
    const loadInitialDataProvider = async () => {
      try {
        const providerData = await fetchProvidersByFilters(
          selectedCategoryId || '',
          selectedSubcategoryId || '',
          selectedFilterAttributesId || '',
          selectedFilterOptionId || ''
        );
        setProviders(
          providerData.map((provider: any) => ({
            id: provider.id,
            name: `${provider.name}`,
          }))
        );
      } catch (error) {
        toast({ variant: "error", title: "Error", description: "Failed to load initial data." });
      }
    };
  
    loadInitialDataProvider();
  }, [selectedCategoryId, selectedSubcategoryId, selectedFilterAttributesId, selectedFilterOptionId]);
  
 

  useEffect(() => {
    // Fetch addresses when a user is selected
    if (userId) {
      const loadAddresses = async () => {
        try {
          const addressData = await fetchUserAddresses(userId);
          setAddresses(addressData); // addressData is already mapped in fetchUserAddresses
        } catch (error: any) {
          toast({
            variant: "error",
            title: "Error",
            description: error.message || "Failed to load user addresses.",
          });
        }
      };
      loadAddresses();
    } else {
      setAddresses([]); // Clear addresses if no user is selected
    }
  }, [userId, toast]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const bookingData: any = {
      service_date: serviceDate,
      service_time: serviceTime,
      place_to_supply: placeToSupply,
      place_to_deliver: placeToDeliver,
      razorpay_order_id: razorpayOrderId,
      invoice_number: invoiceNumber,
      advance_receipt_number: advanceReceiptNumber,
      transaction_id: transactionId,
      user_id: userId, // Include selected user
      provider_id: providerId, // Include selected provider
      delivery_address_id: deliveryAddressId, // Include selected delivery address
    };
  
    // Add category or package-specific data based on selectionType
    if (selectionType === "Category") {
      bookingData.category_id = parseInt(selectedCategoryId) || null;
      bookingData.subcategory_id = selectedSubcategoryId ? parseInt(selectedSubcategoryId) : null;
      bookingData.filter_attribute_id = selectedFilterAttributesId ? parseInt(selectedFilterAttributesId) : null;
      bookingData.filter_option_id = selectedFilterOptionId ? parseInt(selectedFilterOptionId) : null;
    } else if (selectionType === "Package") {
      bookingData.package_id = selectedPackageId ? parseInt(selectedPackageId) : null;
    }
  
    try {
      await createBooking(bookingData);

      toast({
        variant: "success",
        title: "Success",
        description: "Booking created successfully.",
      });
      setIsSubmitting(false);
      router.push("/admin/booking"); // Redirect after successful submission
    } catch (error) {
      toast({
        variant: "error",
        title: "Error",
        description: `Failed to create rate card: ${error}`,
      });
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-12xl mx-auto space-y-6">
        <div className="text-left space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Booking Card Management</h1>
          <p className="text-gray-500">Create a new Booking</p>
        </div>

        <Card className="border-none shadow-xl bg-white/80 backdrop-blur">
          <CardHeader className="border-b border-gray-100 pb-6">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-1 bg-blue-600 rounded-full" />
              <div>
              <CardTitle>Create New Booking</CardTitle>
              <CardDescription>Fill in the details below to create a new booking</CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Category Selector */}

              <div className="space-x-2">
                <label className="text-sm font-medium text-gray-700">Selection Type</label>
                <Select value={selectionType} onValueChange={(value) => setSelectionType(value)}>
                  <SelectTrigger className="bg-white border-gray-200">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Category">Category</SelectItem>
                    <SelectItem value="Package">Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>
             


              {selectionType === 'Category' && (
  <div className="space-y-4">
    {/* Category Selector */}
    <div className="space-y-2">
      <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
        <Globe2 className="w-4 h-4 text-blue-500" />
        <span>Select Category</span>
      </label>
      <Select
        value={selectedCategoryId}
        onValueChange={(value) => setSelectedCategoryId(value)}
      >
        <SelectTrigger className="bg-white border-gray-200">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) =>
            category?.id && category?.name ? (
              <SelectItem key={category.id} value={category.id.toString()}>
                {category.name}
              </SelectItem>
            ) : null
          )}
        </SelectContent>
      </Select>
    </div>

    {/* Subcategory Selector */}
    {subcategories.length > 0 && (
      <div className="space-y-2">
        <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
          <Globe2 className="w-4 h-4 text-blue-500" />
          <span>Select Subcategory</span>
        </label>
        <Select
          value={selectedSubcategoryId}
          onValueChange={(value) => setSelectedSubcategoryId(value)}
        >
          <SelectTrigger className="bg-white border-gray-200">
            <SelectValue placeholder="Select a subcategory" />
          </SelectTrigger>
          <SelectContent>
            {subcategories.map((subcategory) =>
              subcategory?.id && subcategory?.name ? (
                <SelectItem key={subcategory.id} value={subcategory.id.toString()}>
                  {subcategory.name}
                </SelectItem>
              ) : null
            )}
          </SelectContent>
        </Select>
      </div>
    )}

    {/* Filter Attributes Selector */}
    {filterAttributes.length > 0 && (
      <div className="space-y-2">
        <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
          <Globe2 className="w-4 h-4 text-blue-500" />
          <span>Select Filter Attributes</span>
        </label>
        <Select
          value={selectedFilterAttributesId}
          onValueChange={(value) => setSelectedFilterAttributesId(value)}
        >
          <SelectTrigger className="bg-white border-gray-200">
            <SelectValue placeholder="Select filter attributes" />
          </SelectTrigger>
          <SelectContent>
            {filterAttributes.map((attribute) =>
              attribute?.id && attribute?.name ? (
                <SelectItem key={attribute.id} value={attribute.id.toString()}>
                  {attribute.name}
                </SelectItem>
              ) : null
            )}
          </SelectContent>
        </Select>
      </div>
    )}

    {/* Filter Options Selector */}
    {filterOptions.length > 0 && (
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Select Filter Option</label>
        <Select
          value={selectedFilterOptionId}
          onValueChange={(value) => setSelectedFilterOptionId(value)}
        >
          <SelectTrigger className="bg-white border-gray-200">
            <SelectValue placeholder="Select a filter option" />
          </SelectTrigger>
          <SelectContent>
            {filterOptions.map((option) => (
              <SelectItem key={option.id} value={option.id!.toString()}>
                {option.value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )}
  </div>
)}

{selectionType === 'Package' && (
  <div className="space-y-4">
    {/* Package Selector */}
    <div className="space-y-2">
      <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
        <Globe2 className="w-4 h-4 text-blue-500" />
        <span>Select Package</span>
      </label>
      <Select
        value={selectedPackageId} // State variable to track selected package
        onValueChange={(value) => setSelectedPackageId(value)} // Update the state when a package is selected
      >
        <SelectTrigger className="bg-white border-gray-200">
          <SelectValue placeholder="Select a package" />
        </SelectTrigger>
        <SelectContent>
          {packages.map((pkg) =>
            pkg?.id && pkg?.name ? (
              <SelectItem key={pkg.id} value={pkg.id.toString()}>
                {pkg.name}
              </SelectItem>
            ) : null
          )}
        </SelectContent>
      </Select>
    </div>
  </div>
)}


<div>
                <label className="text-sm font-medium text-gray-700">Select User</label>
                <Select value={String(userId)} onValueChange={(value) => setUserId(Number(value))}>
                  <SelectTrigger className="bg-white border-gray-200">
                    <SelectValue placeholder="Select User" />
                  </SelectTrigger>
                  <SelectContent>
                    {users.map((user) => (
                      <SelectItem key={user.id} value={String(user.id)}>
                        {user.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>


              <div>
                <label className="text-sm font-medium text-gray-700">Select Provider</label>
                <Select value={String(providerId)} onValueChange={(value) => setProviderId(Number(value))}>
                  <SelectTrigger className="bg-white border-gray-200">
                    <SelectValue placeholder="Select Provider" />
                  </SelectTrigger>
                  <SelectContent>
                    {providers.map((provider) => (
                      <SelectItem key={provider.id} value={String(provider.id)}>
                        {provider.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>


              {userId && (
                <div>
                  <label className="text-sm font-medium text-gray-700">Delivery Address</label>
                  <Select
                    value={String(deliveryAddressId)}
                    onValueChange={(value) => setDeliveryAddressId(Number(value))}
                  >
                    <SelectTrigger className="bg-white border-gray-200">
                      <SelectValue placeholder="Select Address" />
                    </SelectTrigger>
                    <SelectContent>
                      {addresses.map((address) => (
                        <SelectItem key={address.id} value={String(address.id)}>
                          {address.full_address}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Service Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Service Date</label>
                <Input
                  type="date"
                  value={serviceDate}
                  onChange={(e) => setServiceDate(e.target.value)}
                  required
                />
              </div>

              {/* Service Time */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Service Time</label>
                <Input
                  type="time"
                  value={serviceTime}
                  onChange={(e) => setServiceTime(e.target.value)}
                  required
                />
              </div>

              {/* Place to Supply */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Place to Supply</label>
                <Input
                  type="text"
                  placeholder="Enter supply location"
                  value={placeToSupply}
                  onChange={(e) => setPlaceToSupply(e.target.value)}
                  required
                />
              </div>

              {/* Place to Deliver */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Place to Deliver</label>
                <Input
                  type="text"
                  placeholder="Enter delivery location"
                  value={placeToDeliver}
                  onChange={(e) => setPlaceToDeliver(e.target.value)}
                  required
                />
              </div>

              {/* Razorpay Order ID */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Razorpay Order ID</label>
                <Input
                  type="text"
                  placeholder="Enter Razorpay order ID"
                  value={razorpayOrderId}
                  onChange={(e) => setRazorpayOrderId(e.target.value)}
                  required
                />
              </div>

              {/* Invoice Number */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Invoice Number</label>
                <Input
                  type="text"
                  placeholder="Enter invoice number"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  required
                />
              </div>

              {/* Advance Receipt Number */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Advance Receipt Number</label>
                <Input
                  type="text"
                  placeholder="Enter advance receipt number"
                  value={advanceReceiptNumber}
                  onChange={(e) => setAdvanceReceiptNumber(e.target.value)}
                  required
                />
              </div>

              {/* Transaction ID */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Transaction ID</label>
                <Input
                  type="text"
                  placeholder="Enter transaction ID"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  required
                />
              </div>

              <div className="flex space-x-3 pt-6">
                <Button className="w-100 flex-1 h-11 bg-primary" disabled={isSubmitting} type="submit">
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <span className="loader" />
                      <span>Saving...</span>
                    </div>
                  ) : (
                    <span>Save Rate Card</span>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddBookingForm;
