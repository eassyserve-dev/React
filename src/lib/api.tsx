import axios, { AxiosResponse } from 'axios';

// Set the base URL for your API
const BASE_URL = 'http://localhost:5001/admin';

// Initialize Axios instance with base URL
const apiClient = axios.create({
  baseURL: BASE_URL,
});

// Get the token from localStorage at the time of making a request
const getToken = (): string | null => {
  return typeof window !== 'undefined' ? localStorage.getItem('token') : null;
};

// Define the structure of the Category object


// Define the structure of the Location object
export interface Category {
  id?: string; // Optional for editing
  name: string;
  description: string;
  image: File | null;
  locations: Location[];
  location_type: string;
  location_method: string;
  active: boolean;
  filterattributes?: Attribute[];
  igst_tax?: number | null;   // IGST percentage
  sgst_tax?: number | null;   // SGST percentage
  cgst_tax?: number | null;   // CGST percentage
  sac_code?: string | null;   // SAC code
}

// Define the structure of the Subcategory object
export interface Subcategory {
  id?: string; // Optional for editing
  name: string;
  description: string;
  image: File | null;
  category_id: number; // Associated category ID
  active: boolean;
  filterattributes?: Attribute[];
  igst_tax?: number | null;   // IGST percentage
  sgst_tax?: number | null;   // SGST percentage
  cgst_tax?: number | null;   // Field for IGST percentage
  sac_code?: string | null;  // Field for SAC code
  meta_description?: string | null; // Field for meta description
  meta_keyword?: string | null;     // Field for meta keywords
}


export interface Location {
  country: string;
  state: string;
  city: string;
  postal_code: string | null;
  latitude: number | null;
  longitude: number | null;
  source_type: string;
}

// Define the structure of the Attribute object
export interface Attribute {
  id?: number;
  attribute_name: string;
  attribute_value: string;
  attribute_type: string;
}



// Define the structure of the RateCard object
export interface RateCard {
  id?: string;
  category_id: number;
  subcategory_id: number | null;
  filter_attribute_id: number | null;
  provider_id: number | null; // Change here to allow null values
  name: string;
  description?: string;
  price: number;
  active: boolean;
}

export interface Addon {
  id?: string;
  package_id: number;
  category_id: number;
}

// Define the structure of the Package object
export interface Package {
  id?: string;
  name: string;
  description?: string;
  image?: File | null;
  package_type: string;
  created_by: string;
  provider_id?: string | null;
  discount_type: string;
  discount_value: number;
  final_price?: number;
  validity_period?: number | null;
  no_of_service?: number | null;
  renewal_options: boolean;
  is_active: boolean;
  rate_card_ids?: string[]; // Array of rate card IDs
  addon_category_ids?: string[]; // Array of addon category IDs
  addons?: Addon[]; // Detailed rate card information
  rateCards?: RateCard[]; // Detailed rate card information
}


export interface Page {
  id?: string; // Optional for editing
  title: string;
  slug: string;
  description: string;
  is_active: boolean;
  created_at?: number; // UNIX timestamp
  updated_at?: number; // UNIX timestamp
}


// Define the structure of the Provider object
export interface Provider {
  id?: string;
  first_name: string;
  last_name: string;
  gender?: 'male' | 'female' | 'other';
  email: string;
  phone: string;
  company_name?: string;
  gst_number?: string;
  pan_number?: string;
  active: number;
  rating?: number;
  country?: string;
  state?: string;
  city?: string;
  postal_code?: string;
  latitude?: number;
  longitude?: number;
}


// Define the structure of the Bank object
export interface Bank {
  id?: string; // Optional for editing
  name: string;
  is_active: boolean;
  created_at?: number; // UNIX timestamp
  updated_at?: number; // UNIX timestamp
}

// Define the structure of the Provider Bank Detail object
export interface ProviderBankDetail {
  id?: string;
  provider_id: string;
  bank_id: string;
  account_holder_name: string;
  account_number: string;
  ifsc_code: string;
  account_type: 'savings' | 'current' | 'business';
  status?: 'pending' | 'verified' | 'rejected';
  created_at?: number;
  updated_at?: number;
  deleted_at?: number | null;
  primary?: boolean; // New field for marking primary account
}

// Define the structure of the User object
export interface User {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  signup_method?: 'email' | 'google' | 'facebook' | 'apple';
  social_id?: string;
  app_login_token?: string;
  referral_code?: string;
  vip_subscription_status?: 'active' | 'inactive';
  vip_subscription_start?: number;
  vip_subscription_expiry?: number;
  birthdate?: string;
  anniversary?: string;
  signup_location?: string;
  is_active: boolean;
  created_at?: number;
  updated_at?: number;
  deleted_at?: number | null;
}


export interface VIPPlan {
  id?: string; // Optional for editing
  plan_name: string;
  price: number;
  discount_price?: number; // Optional field for discount
  description: string;
  validity_period: number;
  status: boolean;
  image?: File | null; // Optional for image upload
  platform_fees: boolean; // Boolean for platform fees
  no_of_bookings: number; // Number of bookings included in the plan
}


export interface Banner {
  id?: string; // Optional for editing
  title: string;
  description: string;
  selection_type:string; // Specific selection type options
  selection_id: number | null; // ID of the selected item (category, subcategory, etc.)
  is_active: boolean;
  media_type: "image" | "video"; // Type of media
  display_order?: number; // Optional order of display
  deep_link?: string; // Optional link for deeper navigation
  image?: File | null; // Optional file input for the banner image
}


export interface FAQ {
  id?: string; // Optional for editing
  question: string;
  answer: string;
  status: 'active' | 'inactive'; // Enum for status
  created_at?: number; // UNIX timestamp
  updated_at?: number; // UNIX timestamp
}



export interface Onboarding {
  id?: string; // Optional for editing
  title: string;
  description: string;
  is_active: boolean;
  image?: File | null; // Optional image upload
  created_at?: number; // UNIX timestamp
  updated_at?: number; // UNIX timestamp
}


export interface GstRate {
  id?: string; // Optional for editing
  CGST: number;
  SGST: number;
  IGST: number;
  is_active: boolean;
  created_at?: number; // UNIX timestamp
  updated_at?: number; // UNIX timestamp
  deleted_at?: number | null; // UNIX timestamp for soft-delete
}

export interface Booking {
  id?: string; // Optional for editing
  user_id: number;
  provider_id: number;
  order_number: string;
  booking_date: string;
  quantity: number;
  base_price: number;
  discount_amount?: number;
  cgst?: number;
  sgst?: number;
  igst?: number;
  total_tax?: number;
  taxable_amount?: number;
  total_amount: number;
  status?: "pending" | "confirmed" | "completed" | "cancelled";
  payment_status?: "pending" | "paid" | "failed" | "refunded";
  payment_method?: string;
  transaction_id?: string;
  address_id: number;
  description?: string;
  created_at?: number;
  updated_at?: number;
}



export interface Promocode {
  id?: string; // Optional for editing
  code: string; // Required promocode
  description?: string; // Optional description
  discount_type: "flat" | "percentage"; // Enum for discount type
  discount_value: number; // Required discount value
  min_order_value?: number | null; // Optional field for minimum order value
  start_date: string; // Required start date
  end_date: string; // Required end date
  status: "active" | "inactive" | "expired"; // Enum for promocode status
  selection_type: string; // Specific selection type options (Category, Subcategory, etc.)
  selection_id: number | null; // ID of the selected item (category, subcategory, etc.)
  is_global: boolean; // Indicates if the promocode is global
  display_to_customer: boolean; // Indicates if the promocode is visible to customers
  is_active: boolean; // Indicates if the promocode is active
  provider_id: string; // ID of the associated provider
  image?: File; // Optional image file for the promocode
}

// Define the structure of the API response
interface ApiResponse {
  status: boolean;
  message: string;
  data?: any;
}

// Function to create a new category with attributes
export const createCategory = async (category: Category): Promise<ApiResponse> => {
  const formData = new FormData();

  formData.append('name', category.name);
  formData.append('description', category.description);
  formData.append('active', category.active ? '1' : '0');

  if (category.image) {
    formData.append('image', category.image);
  }
  formData.append('locationType', category.location_type);
  formData.append('locationMethod', category.location_method);
  formData.append('locations', JSON.stringify(category.locations));

  if (category.filterattributes && category.filterattributes.length > 0) {
    formData.append('attributes', JSON.stringify(category.filterattributes));
  }

 
  if (category.sgst_tax !== null && category.sgst_tax !== undefined) {
    formData.append('sgst_tax', category.sgst_tax.toString());
  }
  if (category.cgst_tax !== null && category.cgst_tax !== undefined) {
    formData.append('cgst_tax', category.cgst_tax.toString());
  }
  if (category.igst_tax !== null && category.igst_tax !== undefined) {
    formData.append('igst_tax', category.igst_tax.toString());
  }
  if (category.sac_code) {
    formData.append('sac_code', category.sac_code);
  }

  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post('/category', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to create category.');
  }
};


export const fetchCategories = async (page = 1, size = 10) => {
  try {
    const token = getToken(); // Retrieve the token

    const response: AxiosResponse = await apiClient.get('/category', {
      params: { page, size },
      headers: {
        'admin-auth-token': token || '', // Add the token to the request headers
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch subcategories');
  }
};


// Function to fetch categories with attributes
export const fetchAllCategories = async (): Promise<Category[]> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get('/category/all', {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch categories.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch categories.');
  }
};

// Function to fetch a specific category by ID
export const fetchCategoryById = async (id: string): Promise<Category> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/category/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch category.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch category.');
  }
};

// Function to update an existing category with attributes
export const updateCategory = async (id: string, category: Category): Promise<ApiResponse> => {
  const formData = new FormData();

  formData.append('name', category.name);
  formData.append('description', category.description);
  formData.append('active', category.active ? '1' : '0');

  if (category.image) {
    formData.append('image', category.image);
  }
  formData.append('locationType', category.location_type);
  formData.append('locationMethod', category.location_method);
  formData.append('locations', JSON.stringify(category.locations));

  if (category.filterattributes && category.filterattributes.length > 0) {
    formData.append('attributes', JSON.stringify(category.filterattributes));
  }

  
  if (category.sgst_tax !== null && category.sgst_tax !== undefined) {
    formData.append('sgst_tax', category.sgst_tax.toString());
  }
  if (category.cgst_tax !== null && category.cgst_tax !== undefined) {
    formData.append('cgst_tax', category.cgst_tax.toString());
  }
  if (category.igst_tax !== null && category.igst_tax !== undefined) {
    formData.append('igst_tax', category.igst_tax.toString());
  }
  if (category.sac_code) {
    formData.append('sac_code', category.sac_code);
  }

  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.put(`/category/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update category.');
  }
};




export const deleteCategory = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.delete(`/category/${id}`,  {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update category.');
  }
};



// Function to create a new subcategory with attributes
export const createSubcategory = async (subcategory: Subcategory): Promise<ApiResponse> => {
  const formData = new FormData();

  // Add required fields
  formData.append('name', subcategory.name);
  formData.append('description', subcategory.description);
  formData.append('category_id', subcategory.category_id.toString());
  formData.append('active', subcategory.active ? '1' : '0');

  // Add optional image field
  if (subcategory.image) {
    formData.append('image', subcategory.image);
  }

  // Add filter attributes if present
  if (subcategory.filterattributes && subcategory.filterattributes.length > 0) {
    formData.append('attributes', JSON.stringify(subcategory.filterattributes));
  }

  if (subcategory.sgst_tax !== null && subcategory.sgst_tax !== undefined) {
    formData.append('sgst_tax', subcategory.sgst_tax.toString());
  }
  if (subcategory.cgst_tax !== null && subcategory.cgst_tax !== undefined) {
    formData.append('cgst_tax', subcategory.cgst_tax.toString());
  }
  if (subcategory.igst_tax !== null && subcategory.igst_tax !== undefined) {
    formData.append('igst_tax', subcategory.igst_tax.toString());
  }
  if (subcategory.sac_code) {
    formData.append('sac_code', subcategory.sac_code);
  }

  // Add meta description and meta keywords fields
  if (subcategory.meta_description) {
    formData.append('meta_description', subcategory.meta_description);
  }
  if (subcategory.meta_keyword) {
    formData.append('meta_keyword', subcategory.meta_keyword);
  }

  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post('/sub-category', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to create subcategory.');
  }
};


// Function to fetch categories with attributes
export const fetchAllSubCategories = async (): Promise<Subcategory[]> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get('/sub-category/all', {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch sub  categories.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch categories.');
  }
};

// Adjust the fetchSubcategories API function to support pagination
export const fetchSubcategories = async (page = 1, size = 10) => {
  try {
    const token = getToken(); // Retrieve the token

    const response: AxiosResponse = await apiClient.get('/sub-category', {
      params: { page, size },
      headers: {
        'admin-auth-token': token || '', // Add the token to the request headers
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch subcategories');
  }
};


// Function to fetch categories with attributes
export const fetchSubCategoriesByCategoryId = async (categoryId: number): Promise<Subcategory[]> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/sub-category/category/${categoryId}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    if (response.data.status && response.data.data) {
      return response.data.data; // Return the array of subcategories
    } else {
      throw new Error(response.data.message || 'Failed to fetch subcategories.');
    }
  } catch (error: any) {
    // Handle errors with proper checks
    const errorMessage = error.response?.data?.message || 'Failed to fetch subcategories.';
    throw new Error(errorMessage);
  }
};


// Function to fetch a specific subcategory by ID
export const fetchSubcategoryById = async (id: string): Promise<Subcategory> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/sub-category/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch subcategory.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch subcategory.');
  }
};

/// Function to update an existing subcategory with attributes
export const updateSubcategory = async (id: string, subcategory: Subcategory): Promise<ApiResponse> => {
  const formData = new FormData();

  // Add required fields
  formData.append('name', subcategory.name);
  formData.append('description', subcategory.description);
  formData.append('category_id', subcategory.category_id.toString());
  formData.append('active', subcategory.active ? '1' : '0');

  // Add optional image field
  if (subcategory.image) {
    formData.append('image', subcategory.image);
  }

  // Add filter attributes if present
  if (subcategory.filterattributes && subcategory.filterattributes.length > 0) {
    formData.append('attributes', JSON.stringify(subcategory.filterattributes));
  }

  if (subcategory.sgst_tax !== null && subcategory.sgst_tax !== undefined) {
    formData.append('sgst_tax', subcategory.sgst_tax.toString());
  }
  if (subcategory.cgst_tax !== null && subcategory.cgst_tax !== undefined) {
    formData.append('cgst_tax', subcategory.cgst_tax.toString());
  }
  if (subcategory.igst_tax !== null && subcategory.igst_tax !== undefined) {
    formData.append('igst_tax', subcategory.igst_tax.toString());
  }
  if (subcategory.sac_code) {
    formData.append('sac_code', subcategory.sac_code);
  }

  // Add meta description and meta keywords fields
  if (subcategory.meta_description) {
    formData.append('meta_description', subcategory.meta_description);
  }
  if (subcategory.meta_keyword) {
    formData.append('meta_keyword', subcategory.meta_keyword);
  }

  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.put(`/sub-category/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update subcategory.');
  }
};

// Function to delete a subcategory
export const deleteSubcategory = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.delete(`/sub-category/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete subcategory.');
  }
};



// Function to create a new rate card
export const createRateCard = async (rateCard: RateCard): Promise<ApiResponse> => {
  const formData = new FormData();

  formData.append('name', rateCard.name);
  formData.append('category_id', rateCard.category_id.toString());
  formData.append('price', rateCard.price.toString());
  formData.append('active', rateCard.active ? '1' : '0');

  if (rateCard.provider_id) {
    formData.append('provider_id', rateCard.provider_id?.toString() || ''); // Adjusted for subcategory
  }
  if (rateCard.subcategory_id) {
    formData.append('subcategory_id', rateCard.subcategory_id?.toString() || ''); // Adjusted for subcategory
  }
  if (rateCard.filter_attribute_id) {
    formData.append('filter_attribute_id', rateCard.filter_attribute_id?.toString() || ''); // Adjusted for subcategory
  }
  if (rateCard.description) {
    formData.append('description', rateCard.description);
  }
 
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post('/rate-card', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to create rate card.');
  }
};

// Function to fetch all rate cards with pagination
export const fetchRateCards = async (page = 1, size = 10) => {
  try {
    const token = getToken();
    const response: AxiosResponse = await apiClient.get('/rate-card', {
      params: { page, size },
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch rate cards');
  }
};

export const fetchAllRatecard = async (): Promise<RateCard[]> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get('/rate-card/all', {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch categories.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch categories.');
  }
};

// Function to fetch a specific rate card by ID
export const fetchRateCardById = async (id: string): Promise<RateCard> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/rate-card/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch rate card.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch rate card.');
  }
};

// Function to update an existing rate card
export const updateRateCard = async (id: string, rateCard: RateCard): Promise<ApiResponse> => {
  const formData = new FormData();

  formData.append('name', rateCard.name);
  formData.append('category_id', rateCard.category_id.toString());
  if (rateCard.provider_id) {
    formData.append('provider_id', rateCard.provider_id?.toString() || ''); // Adjusted for subcategory
  }
  formData.append('price', rateCard.price.toString());
  formData.append('active', rateCard.active ? '1' : '0');

  if (rateCard.subcategory_id) {
    formData.append('subcategory_id', rateCard.subcategory_id?.toString() || ''); // Adjusted for subcategory
  }
  if (rateCard.filter_attribute_id) {
    formData.append('filter_attribute_id', rateCard.filter_attribute_id?.toString() || ''); // Adjusted for subcategory
  }
  if (rateCard.description) {
    formData.append('description', rateCard.description);
  }

  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.put(`/rate-card/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update rate card.');
  }
};

// Function to delete a rate card
export const deleteRateCard = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.delete(`/rate-card/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete rate card.');
  }
};

// Function to restore a soft-deleted rate card
export const restoreRateCard = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post(`/rate-card/${id}/restore`, {}, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to restore rate card.');
  }
};



// Fetch filter attributes by category and/or subcategory ID
export const fetchFilterAttributes = async (
  categoryId: number | null,
  subcategoryId: number | null
): Promise<Attribute[]> => {
  try {
    const token = getToken();
    const params: any = {};
    if (categoryId) params.category_id = categoryId;
    if (subcategoryId) params.subcategory_id = subcategoryId;

    const response: AxiosResponse<ApiResponse> = await apiClient.get('/filter/attributes', {
      params,
      headers: {
        'admin-auth-token': token || '',
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch filter attributes.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch filter attributes.');
  }
};


// Function to create a new package with associated rate cards
export const createPackage = async (pkg: Package): Promise<ApiResponse> => {
  const formData = new FormData();

  formData.append('name', pkg.name);
  formData.append('description', pkg.description || '');
  formData.append('package_type', pkg.package_type);
  formData.append('created_by', pkg.created_by);
  if (pkg.provider_id) formData.append('provider_id', pkg.provider_id);
  formData.append('discount_type', pkg.discount_type);
  formData.append('discount_value', pkg.discount_value.toString());
  if (pkg.validity_period) formData.append('validity_period', pkg.validity_period?.toString() || '');
  if (pkg.no_of_service) formData.append('no_of_service', pkg.no_of_service?.toString() || '');
  formData.append('renewal_options', pkg.renewal_options ? '1' : '0');
  formData.append('is_active', pkg.is_active ? '1' : '0');

  // Add image if available
  if (pkg.image) {
    formData.append('image', pkg.image);
  }

  // Append rate card IDs
  if (pkg.rate_card_ids) {
    pkg.rate_card_ids.forEach((rateCardId) => formData.append('rate_card_ids[]', rateCardId));
  }

   // Append addon category IDs
   if (pkg.addon_category_ids) {
    pkg.addon_category_ids.forEach((categoryId) => formData.append('addon_category_ids[]', categoryId));
  }

  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post('/package', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to create package.');
  }
};

// Function to update an existing package with associated rate cards
export const updatePackage = async (id: string, pkg: Package): Promise<ApiResponse> => {
  const formData = new FormData();

  formData.append('name', pkg.name);
  formData.append('description', pkg.description || '');
  formData.append('package_type', pkg.package_type);
  formData.append('created_by', pkg.created_by);
  if (pkg.provider_id) formData.append('provider_id', pkg.provider_id);
  formData.append('discount_type', pkg.discount_type);
  formData.append('discount_value', pkg.discount_value.toString());
  if (pkg.validity_period) formData.append('validity_period', pkg.validity_period?.toString() || '');
  if (pkg.no_of_service) formData.append('no_of_service', pkg.no_of_service?.toString() || '');

  formData.append('renewal_options', pkg.renewal_options ? '1' : '0');
  formData.append('is_active', pkg.is_active ? '1' : '0');

  // Add image if available
  if (pkg.image) {
    formData.append('image', pkg.image);
  }

  // Append rate card IDs
  if (pkg.rate_card_ids) {
    pkg.rate_card_ids.forEach((rateCardId) => formData.append('rate_card_ids[]', rateCardId));
  }

   // Append addon category IDs
   if (pkg.addon_category_ids) {
    pkg.addon_category_ids.forEach((categoryId) => formData.append('addon_category_ids[]', categoryId));
  }

  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.put(`/package/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update package.');
  }
};

// Function to fetch all packages with pagination
export const fetchPackages = async (page = 1, size = 10) => {
  try {
    const token = getToken();
    const response= await apiClient.get('/package', {
      params: { page, size },
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch packages');
  }
};

// Function to fetch a specific package by ID
export const fetchPackageById = async (id: string): Promise<Package> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/package/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch package.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch package.');
  }
};

// Function to delete a package
export const deletePackage = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.delete(`/package/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete package.');
  }
};


export const fetchAllpackages = async (): Promise<Package[]> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get('/package/all', {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch   packages.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch packages.');
  }
};

// Function to create a new page
export const createPage = async (page: Page): Promise<ApiResponse> => {
  try {
    const token = getToken();

    // Prepare raw JSON data
    const rawData = {
      title: page.title,
      slug: page.slug,
      description: page.description,
      is_active: page.is_active,
    };

    // Send request with raw JSON data
    const response: AxiosResponse<ApiResponse> = await apiClient.post('/page', rawData, {
      headers: {
        'Content-Type': 'application/json',
        'admin-auth-token': token || '',
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to create page.');
  }
};

// Function to fetch all pages with pagination
export const fetchPages = async (page = 1, size = 10) => {
  try {
    const token = getToken();
    const response= await apiClient.get('/page', {
      params: { page, size },
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch pages.');
  }
};

// Function to fetch a specific page by ID
export const fetchPageById = async (id: string): Promise<Page> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/page/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch page.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch page.');
  }
};

// Function to update an existing page
export const updatePage = async (id: string, page: Page): Promise<ApiResponse> => {
  const rawData = {
    title: page.title,
    slug: page.slug,
    description: page.description,
    is_active: page.is_active,
  };

  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.put(`/page/${id}`, rawData, {
      headers: {
        'Content-Type': 'application/json', // Corrected to 'application/json'
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update page.');
  }
};

// Function to delete a page
export const deletePage = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.delete(`/page/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete page.');
  }
};

// Function to restore a soft-deleted page
export const restorePage = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post(`/page/${id}/restore`, {}, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to restore page.');
  }
};

// Function to fetch all providers
export const fetchProviders = async (): Promise<Provider[]> => {
  try {
    const token = getToken(); // Assume getToken() retrieves the auth token

    const response: AxiosResponse<ApiResponse> = await apiClient.get('/provider/all', {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    if (response.data.status) {
      return response.data.data; // Return the array of providers
    } else {
      throw new Error(response.data.message || 'Failed to fetch providers.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch providers.');
  }
};


// Fetch all users with optional pagination

export const fetchAllUsers = async (page = 1, size = 10) => {
  try {
    const token = getToken();
    const response= await apiClient.get('/user', {
      params: { page, size },
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users.');
  }
};




export const fetchAllUsersWithouPagination = async (): Promise<User[]> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get('/user/all', {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch banks.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch banks.');
  }
};


// Fetch a single user by ID
export const fetchUserById = async (id: string): Promise<User> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/user/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch user.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch user.');
  }
};

// Create a new user
export const createUser = async (user: User): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post('/user', user, {
      headers: {
        'Content-Type': 'application/json',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to create user.');
  }
};

// Update an existing user
export const updateUser = async (id: string, user: User): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.put(`/user/${id}`, user, {
      headers: {
        'Content-Type': 'application/json',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update user.');
  }
};

// Delete (soft-delete) a user by ID
export const deleteUser = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.delete(`/user/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete user.');
  }
};

// Restore a soft-deleted user by ID
export const restoreUser = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post(`/user/${id}/restore`, {}, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to restore user.');
  }
};



// Fetch all providers with optional pagination
export const fetchAllProviders = async (page = 1, size = 10) => {
  try {
    const token = getToken();
    const response = await apiClient.get('/provider', {
      params: { page, size },
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch providers.');
  }
};



// Function to fetch all banks
export const fetchAllProvidersWithoupagination = async (): Promise<Provider[]> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get('/provider/all', {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch banks.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch banks.');
  }
};


// Fetch a specific provider by ID
export const fetchProviderById = async (id: string): Promise<Provider> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/provider/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch provider.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch provider.');
  }
};

// Create a new provider
export const createProvider = async (provider: Provider): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post('/provider', provider, {
      headers: {
        'Content-Type': 'application/json',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to create provider.');
  }
};

// Update an existing provider
export const updateProvider = async (id: string, provider: Provider): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.put(`/provider/${id}`, provider, {
      headers: {
        'Content-Type': 'application/json',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update provider.');
  }
};

// Delete (soft-delete) a provider by ID
export const deleteProvider = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.delete(`/provider/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete provider.');
  }
};

// Restore a soft-deleted provider by ID
export const restoreProvider = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post(`/provider/${id}/restore`, {}, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to restore provider.');
  }
};


// Function to create a new VIP plan
export const createVIPPlan = async (vipPlan: VIPPlan): Promise<ApiResponse> => {
  const formData = new FormData();
  
  formData.append("plan_name", vipPlan.plan_name);
  formData.append("price", vipPlan.price.toString());
  
  // Optional discount price
  if (vipPlan.discount_price !== undefined) {
    formData.append("discount_price", vipPlan.discount_price.toString());
  }
  
  formData.append("description", vipPlan.description);
  formData.append("validity_period", vipPlan.validity_period.toString());
  formData.append("status", vipPlan.status ? "1" : "0");
  
  // New fields
  formData.append("platform_fees", vipPlan.platform_fees ? "1" : "0");
  formData.append("no_of_bookings", vipPlan.no_of_bookings.toString());

  // Add image file if available
  if (vipPlan.image) {
    formData.append("image", vipPlan.image);
  }

  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post("/vip", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "admin-auth-token": token || "",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to create VIP plan.");
  }
};

// Function to fetch all VIP plans with optional pagination
export const fetchVIPPlans = async (page = 1, size = 10) => {
  try {
    const token = getToken();
    const response: AxiosResponse = await apiClient.get("/vip", {
      params: { page, size },
      headers: {
        "admin-auth-token": token || "",
      },
    });
    return response.data;
  } catch (error:any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch providers.');
  }
};



// Function to fetch a single VIP plan by ID
export const fetchVIPPlanById = async (id: string): Promise<VIPPlan> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/vip/${id}`, {
      headers: {
        "admin-auth-token": token || "",
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || "Failed to fetch VIP plan.");
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch VIP plan.");
  }
};

// Function to update an existing VIP plan
export const updateVIPPlan = async (id: string, vipPlan: VIPPlan): Promise<ApiResponse> => {
  const formData = new FormData();

  formData.append("plan_name", vipPlan.plan_name);
  formData.append("price", vipPlan.price.toString());
  
  // Optional discount price
  if (vipPlan.discount_price !== undefined) {
    formData.append("discount_price", vipPlan.discount_price.toString());
  }
  
  formData.append("description", vipPlan.description);
  formData.append("validity_period", vipPlan.validity_period.toString());
  formData.append("status", vipPlan.status ? "1" : "0");

  // New fields
  formData.append("platform_fees", vipPlan.platform_fees ? "1" : "0");
  formData.append("no_of_bookings", vipPlan.no_of_bookings.toString());

  // Add image file if available
  if (vipPlan.image) {
    formData.append("image", vipPlan.image);
  }

  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.put(`/vip/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "admin-auth-token": token || "",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update VIP plan.");
  }
};

// Function to delete a VIP plan
export const deleteVIPPlan = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.delete(`/vip/${id}`, {
      headers: {
        "admin-auth-token": token || "",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to delete VIP plan.");
  }
};

// Function to restore a soft-deleted VIP plan
export const restoreVIPPlan = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post(`/vip/${id}/restore`, {}, {
      headers: {
        "admin-auth-token": token || "",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to restore VIP plan.");
  }
};



// Fetch all providers with optional pagination
export const fetchBanks = async (page = 1, size = 10) => {
  try {
    const token = getToken();
    const response = await apiClient.get('/bank', {
      params: { page, size },
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch bank.');
  }
};

// Function to fetch all banks
export const fetchAllBanks = async (): Promise<Bank[]> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get('/bank/all', {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch banks.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch banks.');
  }
};

// Function to fetch a single bank by ID
export const fetchBankById = async (id: string): Promise<Bank> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/bank/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch bank.');
  }
};

// Function to create a new bank
export const createBank = async (bank: Bank): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post('/bank', bank, {
      headers: {
        'Content-Type': 'application/json',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to create bank.');
  }
};

// Function to update an existing bank
export const updateBank = async (id: string, bank: Bank): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.put(`/bank/${id}`, bank, {
      headers: {
        'Content-Type': 'application/json',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update bank.');
  }
};



// Function to delete (soft-delete) a bank
export const deleteBank = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.delete(`/bank/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete bank.');
  }
};

// Fetch all provider bank details with optional pagination
export const fetchProviderBankDetails = async (provider_id: string, page = 1, size = 10) => {
  try {
    const token = getToken();
    const response = await apiClient.get('/provider-bank', {
      params: { provider_id, page, size },
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch provider bank details.');
  }
};

// Function to fetch a single provider bank detail by ID
export const fetchProviderBankDetailById = async (id: string): Promise<ProviderBankDetail> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/provider-bank/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch provider bank detail.');
  }
};

// Function to create a new provider bank detail
export const createProviderBankDetail = async (detail: ProviderBankDetail): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post('/provider-bank', detail, {
      headers: {
        'Content-Type': 'application/json',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to create provider bank detail.');
  }
};

// Function to update an existing provider bank detail
export const updateProviderBankDetail = async (
  id: string,
  detail: ProviderBankDetail
): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.put(`/provider-bank/${id}`, detail, {
      headers: {
        'Content-Type': 'application/json',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update provider bank detail.');
  }
};

// Function to delete (soft-delete) a provider bank detail
export const deleteProviderBankDetail = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.delete(`/provider-bank/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete provider bank detail.');
  }
};





// Add banner
export const createBanner = async (bannerData: Banner) => {
  const formData = new FormData();
  formData.append("title", bannerData.title);
  formData.append("description", bannerData.description);
  formData.append("is_active", bannerData.is_active ? "1" : "0");
  
  if (bannerData.media_type) {
    formData.append("media_type", bannerData.media_type as "image" | "video");
  }

  if (bannerData.display_order !== undefined) {
    formData.append("display_order", bannerData.display_order.toString());
  }
  
  if (bannerData.deep_link) {
    formData.append("deep_link", bannerData.deep_link);
  }

  if (bannerData.selection_type) {
    formData.append("selection_type", bannerData.selection_type);
  }

  if (bannerData.selection_id) {
    formData.append("selection_id", bannerData.selection_id.toString());
  }
  if (bannerData.image) {
    formData.append("media_file", bannerData.image); // The image file
  }

  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post(`/banner`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "admin-auth-token": token || "",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update VIP plan.");
  }
};


// Function to fetch a specific banner by ID
export const getBanner = async (id: string | number): Promise<Banner> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/banner/${id}`, {
      headers: {
        "admin-auth-token": token || "",
      },
    });
    return response.data.data; // Assuming banner data is under `data` key
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch banner.");
  }
};

// Function to update a specific banner by ID
export const updateBanner = async (id: string | number, bannerData: Banner): Promise<ApiResponse> => {
  const formData = new FormData();
  formData.append("title", bannerData.title);
  formData.append("description", bannerData.description);
  formData.append("is_active", bannerData.is_active ? "1" : "0");
  formData.append("media_type", bannerData.media_type);
  
  if (bannerData.display_order !== undefined) {
    formData.append("display_order", bannerData.display_order.toString());
  }

  if (bannerData.deep_link) {
    formData.append("deep_link", bannerData.deep_link);
  }

  if (bannerData.selection_type) {
    formData.append("selection_type", bannerData.selection_type);
  }

  if (bannerData.selection_id) {
    formData.append("selection_id", bannerData.selection_id.toString());
  }

  if (bannerData.image) {
    formData.append("image", bannerData.image);
  }

  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.put(`/banner/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "admin-auth-token": token || "",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update banner.");
  }
};


// Fetch all providers with optional pagination
export const fetchBanners = async (page = 1, size = 10) => {
  try {
    const token = getToken();
    const response = await apiClient.get('/banner', {
      params: { page, size },
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch banner.');
  }
};

// Function to fetch all banks
export const fetchBannerPromo = async (): Promise<Banner[]> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get('/banner/promocode', {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch banner.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch banner.');
  }
};
// Function to delete (soft-delete) a bank
export const deleteBanner = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.delete(`/banner/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete banner.');
  }
};


// Fetch all FAQs with optional pagination
export const fetchFAQs = async (page = 1, size = 10) => {
  try {
    const token = getToken();
    const response = await apiClient.get('/faq', {
      params: { page, size },
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch FAQs.');
  }
};

// Fetch a single FAQ by ID
export const fetchFAQById = async (id: string): Promise<FAQ> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/faq/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch FAQ.');
  }
};

// Create a new FAQ
export const createFAQ = async (faq: FAQ): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post('/faq', faq, {
      headers: {
        'Content-Type': 'application/json',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to create FAQ.');
  }
};

// Update an existing FAQ
export const updateFAQ = async (id: string, faq: FAQ): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.put(`/faq/${id}`, faq, {
      headers: {
        'Content-Type': 'application/json',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update FAQ.');
  }
};

// Delete an FAQ
export const deleteFAQ = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.delete(`/faq/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete FAQ.');
  }
};


// Fetch all carts with optional pagination
export const fetchCarts = async (page = 1, size = 10) => {
  try {
    const token = getToken(); // Retrieve the token
    const response = await apiClient.get('/cart', {
      params: { page, size },
      headers: {
        'admin-auth-token': token || '',
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch carts.');
  }
};

// Fetch a single cart by ID
export const fetchCartById = async (id: string) => {
  try {
    const token = getToken(); // Retrieve the token
    const response = await apiClient.get(`/cart/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch cart.');
  }
};

// Delete (soft-delete) a cart by ID
export const deleteCart = async (id: string) => {
  try {
    const token = getToken(); // Retrieve the token
    const response = await apiClient.delete(`/cart/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete cart.');
  }
};




// Fetch all onboarding entries with pagination
export const fetchOnboardings = async (page = 1, size = 10) => {
  try {
    const token = getToken();
    const response = await apiClient.get("/onboarding", {
      params: { page, size },
      headers: {
        "admin-auth-token": token || "",
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch onboarding entries.");
  }
};

// Fetch all onboarding entries without pagination
export const fetchAllOnboardings = async (): Promise<Onboarding[]> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get("/onboarding/all", {
      headers: {
        "admin-auth-token": token || "",
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || "Failed to fetch onboarding entries.");
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch onboarding entries.");
  }
};

// Fetch a single onboarding entry by ID
export const fetchOnboardingById = async (id: string): Promise<Onboarding> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/onboarding/${id}`, {
      headers: {
        "admin-auth-token": token || "",
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || "Failed to fetch onboarding entry.");
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch onboarding entry.");
  }
};

// Create a new onboarding entry
export const createOnboarding = async (onboarding: Onboarding): Promise<ApiResponse> => {
  const formData = new FormData();

  formData.append("title", onboarding.title);
  formData.append("description", onboarding.description);

  if (onboarding.image) {
    formData.append("image", onboarding.image);
  }

  // Add the active status field
  formData.append("is_active", onboarding.is_active ? "1" : "0");

  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post("/onboarding", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "admin-auth-token": token || "",
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to create onboarding entry.");
  }
};

// Update an existing onboarding entry
export const updateOnboarding = async (id: string, onboarding: Onboarding): Promise<ApiResponse> => {
  const formData = new FormData();

  formData.append("title", onboarding.title);
  formData.append("description", onboarding.description);

  if (onboarding.image) {
    formData.append("image", onboarding.image);
  }

  // Add the active status field
  formData.append("is_active", onboarding.is_active ? "1" : "0");

  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.put(`/onboarding/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "admin-auth-token": token || "",
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update onboarding entry.");
  }
};

// Delete an onboarding entry
export const deleteOnboarding = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.delete(`/onboarding/${id}`, {
      headers: {
        "admin-auth-token": token || "",
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to delete onboarding entry.");
  }
};


// Fetch all GST rates with optional pagination
export const fetchGstRates = async (page = 1, size = 10) => {
  try {
    const token = getToken();
    const response = await apiClient.get('/gst-rate', {
      params: { page, size },
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch GST rates.');
  }
};

// Fetch all GST rates without pagination
export const fetchAllGstRates = async (): Promise<GstRate[]> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get('/gst-rate/all', {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch GST rates.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch GST rates.');
  }
};

// Fetch a specific GST rate by ID
export const fetchGstRateById = async (id: string): Promise<GstRate> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/gst-rate/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });

    if (response.data.status) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch GST rate.');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch GST rate.');
  }
};

// Create a new GST rate
export const createGstRate = async (gstRate: GstRate): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post('/gst-rate', gstRate, {
      headers: {
        'Content-Type': 'application/json',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to create GST rate.');
  }
};

// Update an existing GST rate
export const updateGstRate = async (id: string, gstRate: GstRate): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.put(`/gst-rate/${id}`, gstRate, {
      headers: {
        'Content-Type': 'application/json',
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update GST rate.');
  }
};

// Delete (soft-delete) a GST rate
export const deleteGstRate = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.delete(`/gst-rate/${id}`, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete GST rate.');
  }
};

// Restore a soft-deleted GST rate
export const restoreGstRate = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post(`/gst-rate/${id}/restore`, {}, {
      headers: {
        'admin-auth-token': token || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to restore GST rate.');
  }
};



// Function to fetch delivery addresses by user ID
export const fetchUserAddresses = async (userId: number): Promise<{ id: number; full_address: string }[]> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`user/${userId}/addresses`, {
      headers: {
        "admin-auth-token": token || "",
      },
    });

    if (response?.data?.status && Array.isArray(response.data.data)) {
      return response.data.data.map((address: any) => {
        const { id, street_address, city, state, postal_code } = address;
        return {
          id,
          full_address: `${street_address || ""}, ${city || ""}, ${state || ""}, ${postal_code || ""}`.replace(/,\s*$/, ""),
        };
      });
    } else {
      throw new Error(response?.data?.message || "No addresses found for the specified user.");
    }
  } catch (error: any) {
    const errorMessage = error?.response?.data?.message || error.message || "Failed to fetch delivery addresses.";
    throw new Error(errorMessage);
  }
};

export const createBooking = async (booking: Booking): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post("/booking", booking, {
      headers: {
        "Content-Type": "application/json",
        "admin-auth-token": token || "",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to create booking.");
  }
};
export const fetchBookings = async (page = 1, size = 10) => {
  try {
    const token = getToken();
    const response = await apiClient.get("/booking", {
      params: { page, size },
      headers: {
        "admin-auth-token": token || "",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch bookings.");
  }
};
export const fetchBookingById = async (id: string): Promise<Booking> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/booking/${id}`, {
      headers: {
        "admin-auth-token": token || "",
      },
    });
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch booking.");
  }
};
export const updateBooking = async (id: string, booking: Booking): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.put(`/booking/${id}`, booking, {
      headers: {
        "Content-Type": "application/json",
        "admin-auth-token": token || "",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update booking.");
  }
};
export const deleteBooking = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.delete(`/booking/${id}`, {
      headers: {
        "admin-auth-token": token || "",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to delete booking.");
  }
};




// Add Promocode API
export const createPromocode = async (promocode: Promocode): Promise<ApiResponse> => {
  const formData = new FormData();

  formData.append("code", promocode.code);
  if (promocode.description) formData.append("description", promocode.description);
  formData.append("discount_type", promocode.discount_type);
  formData.append("discount_value", promocode.discount_value.toString());
  if (promocode.min_order_value !== undefined)
    formData.append("min_order_value", promocode.min_order_value?.toString() || "");
  formData.append("start_date", promocode.start_date);
  formData.append("end_date", promocode.end_date);
  formData.append("status", promocode.status);
  formData.append("selection_type", promocode.selection_type);
  formData.append("selection_id", promocode.selection_id?.toString() || "");
  formData.append("is_global", promocode.is_global ? "1" : "0");
  formData.append("display_to_customer", promocode.display_to_customer ? "1" : "0");
  formData.append("is_active", promocode.is_active ? "1" : "0");
  formData.append("provider_id", promocode.provider_id);

  // Add image if provided
  if (promocode.image) {
    formData.append("image", promocode.image);
  }

  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post("/promocode", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "admin-auth-token": token || "",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to create promocode.");
  }
};

// Fetch a single promocode by ID
export const fetchPromocodeById = async (id: string): Promise<Promocode> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.get(`/promocode/${id}`, {
      headers: {
        "admin-auth-token": token || "",
      },
    });
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch promocode.");
  }
};

// Update an existing promocode
export const updatePromocode = async (id: string, promocode: Promocode): Promise<ApiResponse> => {
  const formData = new FormData();

  formData.append("code", promocode.code);
  if (promocode.description) formData.append("description", promocode.description);
  formData.append("discount_type", promocode.discount_type);
  formData.append("discount_value", promocode.discount_value.toString());
  if (promocode.min_order_value !== undefined)
    formData.append("min_order_value", promocode.min_order_value?.toString() || "");
  formData.append("start_date", promocode.start_date);
  formData.append("end_date", promocode.end_date);
  formData.append("status", promocode.status);
  formData.append("selection_type", promocode.selection_type);
  formData.append("selection_id", promocode.selection_id?.toString() || "");
  formData.append("is_global", promocode.is_global ? "1" : "0");
  formData.append("display_to_customer", promocode.display_to_customer ? "1" : "0");
  formData.append("is_active", promocode.is_active ? "1" : "0");
  formData.append("provider_id", promocode.provider_id);

  // Add image if provided
  if (promocode.image) {
    formData.append("image", promocode.image);
  }

  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.put(`/promocode/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "admin-auth-token": token || "",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update promocode.");
  }
};

// Fetch all promocodes with optional pagination
export const fetchPromocodes = async (page = 1, size = 10) => {
  try {
    const token = getToken();
    const response: AxiosResponse = await apiClient.get("/promocode", {
      params: { page, size },
      headers: {
        "admin-auth-token": token || "",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch promocodes.");
  }
};

// Delete a promocode
export const deletePromocode = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.delete(`/promocode/${id}`, {
      headers: {
        "admin-auth-token": token || "",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to delete promocode.");
  }
};

// Restore a soft-deleted promocode
export const restorePromocode = async (id: string): Promise<ApiResponse> => {
  try {
    const token = getToken();
    const response: AxiosResponse<ApiResponse> = await apiClient.post(`/promocode/${id}/restore`, {}, {
      headers: {
        "admin-auth-token": token || "",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to restore promocode.");
  }
};

