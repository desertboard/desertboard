"use client";

import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FormData = {
  gtmId: string;
  googleAnalyticsId: string;
};

const GTMConfig = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [submitting, setIsSubmitting] = useState(false);
  const [refetch, setRefetch] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const url = `/api/admin/gtm-config`;
      const method = "POST";
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        setRefetch((prev) => !prev);
      } else {
        throw new Error("Failed to save GTM configuration");
      }
    } catch (error) {
      console.error("Error saving GTM configuration:", error);
      alert("Failed to update GTM configuration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/admin/gtm-config`);
        if (response.ok) {
          const data = await response.json();
          if (data && data.gtmConfig) {
            setValue("gtmId", data.gtmConfig.gtmId);
            setValue("googleAnalyticsId", data.gtmConfig.googleAnalyticsId);
          }
        } else {
          console.error("Failed to fetch GTM configuration");
        }
      } catch (error) {
        console.error("Error fetching GTM configuration:", error);
      }
    };

    fetchData();
  }, [setValue, refetch]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Google Tag Manager Configuration</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="gtmId">Google Tag Manager ID</Label>
          <Input id="gtmId" placeholder="GTM-XXXXXXX" {...register("gtmId", { required: "GTM ID is required" })} />
          {errors.gtmId && <p className="text-red-500 text-sm">{errors.gtmId.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="googleAnalyticsId">Google Analytics ID</Label>
          <Input
            id="googleAnalyticsId"
            placeholder="AW-XXXXXXXXX"
            {...register("googleAnalyticsId", { required: "Google Analytics ID is required" })}
          />
          {errors.googleAnalyticsId && <p className="text-red-500 text-sm">{errors.googleAnalyticsId.message}</p>}
        </div>

        <Button type="submit" disabled={submitting}>
          {submitting ? "Saving..." : "Save Configuration"}
        </Button>
      </form>
    </div>
  );
};

export default GTMConfig;
