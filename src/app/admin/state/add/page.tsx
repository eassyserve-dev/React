"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Save, Loader2 } from "lucide-react";
import { createState, State, fetchAllCountriesWithoutPagination, Country } from "@/lib/api";

const AddStateForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [country_id, setCountryId] = useState<string>("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [is_active, setIsActive] = useState<boolean>(true); // Active switch state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await fetchAllCountriesWithoutPagination();
        setCountries(data);
      } catch (error: any) {
        toast({
          variant: "error",
          title: "Error",
          description: error.message || "Failed to fetch countries.",
        });
      }
    };

    fetchCountries();
  }, [toast]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!name || !country_id) {
      toast({
        variant: "error",
        title: "Validation Error",
        description: "State name and country ID are required.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Construct the state object
      const newState: State = {
        name,
        country_id,
        is_active, // Set the is_active status
      };

      await createState(newState);

      toast({
        variant: "success",
        title: "Success",
        description: "State created successfully!",
      });

      // Redirect to state list
      router.push("/admin/state");
    } catch (error: any) {
      toast({
        variant: "error",
        title: "Error",
        description: error.message || "Failed to create state.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">State Management</h1>
        <p className="text-gray-500">Create a new state</p>

        <Card className="border-none shadow-xl bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle>New State</CardTitle>
            <CardDescription>Fill in the details below to create a new state entry.</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="text-sm font-medium text-gray-700">State Name</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter state name"
                  required
                />
              </div>

              {/* Country ID Field */}
              <div>
                <label className="text-sm font-medium text-gray-700">Country</label>
                <select
                  value={country_id}
                  onChange={(e) => setCountryId(e.target.value)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring"
                  required
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Active Status */}
              <div className="flex items-center space-x-2">
                <Switch checked={is_active} onCheckedChange={setIsActive} />
                <span className="text-sm text-gray-700">Active</span>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Saving...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Save className="w-4 h-4" />
                    <span>Save State</span>
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

export default AddStateForm;