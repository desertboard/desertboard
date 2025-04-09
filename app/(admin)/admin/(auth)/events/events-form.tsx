"use client";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/app/components/ui/image-uploader";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface EventsFormData {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  tickets: string;
  website: string;
  imageAlt: string;
}

interface EventsFormProps {
  eventId?: string;
}

const EventsForm = ({ eventId }: EventsFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const handleTimeChange = (time: Date) => {
    console.log("selectedTime", time)
    setSelectedTime(time)
    setValue("time", time.toISOString());
  }

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<EventsFormData>({
    defaultValues: {
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      image: "",
      tickets: "",
      website: "",
      imageAlt: ""
    },
  });

  useEffect(() => {
    const fetchEvent = async () => {
      if (!eventId) return;

      const response = await fetch(`/api/admin/events/byid?id=${eventId}`);
      const data = await response.json();

      // Format the date to YYYY-MM-DD
      const eventDate = data.data.date ? new Date(data.data.date).toISOString().split("T")[0] : "";

      setValue("title", data.data.title);
      setValue("date", eventDate);
      // setValue("time", data.data.time);
      setValue("location", data.data.location);
      setValue("description", data.data.description);
      setValue("image", data.data.image);
      setValue("tickets", data.data.tickets)
      setValue("website", data.data.website)
      setValue("imageAlt", data.data.imageAlt)

      if (data.data.time) {
        setSelectedTime(new Date(data.data.time));
        const time = new Date(data.data.time) // Convert string to Date
        const parsedTime = time?.toISOString()
        setValue("time", parsedTime ?? "")
      }
    };
    fetchEvent();
  }, [eventId, setValue]);

  const onSubmit = async (data: EventsFormData) => {
    try {
      setIsLoading(true);
      if (eventId) {
        const response = await fetch(`/api/admin/events/byid?id=${eventId}`, {
          method: "PATCH",
          body: JSON.stringify(data),
        });
        const res = await response.json();
        console.log(res);
        router.push("/admin/events");
      } else {
        const response = await fetch(`/api/admin/events`, {
          method: "POST",
          body: JSON.stringify(data),
        });
        const res = await response.json();
        console.log(res);
        router.push("/admin/events");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-4xl mx-auto p-6">
      <div className="space-y-4">
        {/* Title Field */}
        <div>
          <Label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </Label>
          <Input
            {...register("title", { required: "Title is required" })}
            type="text"
            id="title"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
        </div>

        {/* Date Field */}
        <div>
          <Label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </Label>
          <Input
            {...register("date", { required: "Date is required" })}
            type="date"
            id="date"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
          {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>}
        </div>

        {/* Time Field */}
        <div>
          <Label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Time
          </Label>
          {/* <Input
            {...register("time", { required: "Time is required" })}
            type="time"
            id="time"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          /> */}
          <DatePicker
            selected={selectedTime}
            onChange={(time) => time ? handleTimeChange(time) : null}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={1}
            timeCaption="Time"
            dateFormat="h:mm aa" // 12-hour format with AM/PM
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
          {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>}
        </div>

        {/* Location Field */}
        <div>
          <Label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </Label>
          <Input
            {...register("location", { required: "Location is required" })}
            type="text"
            id="location"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
          {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>}
        </div>

        {/* Description Field */}
        <div>
          <Label className="block text-sm font-medium text-gray-700">Description</Label>
          <Controller
            name="description"
            control={control}
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="mt-1 block w-full" />
            )}
          />
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
        </div>

        <div>
          <Label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Tickets
          </Label>
          <Input
            {...register("tickets", { required: "Tickets is required" })}
            type="text"
            id="location"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
          {errors.tickets && <p className="mt-1 text-sm text-red-600">{errors.tickets.message}</p>}
        </div>

        <div>
          <Label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Website
          </Label>
          <Input
            {...register("website", { required: "Website is required" })}
            type="text"
            id="location"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
          {errors.website && <p className="mt-1 text-sm text-red-600">{errors.website.message}</p>}
        </div>

        {/* Image Field */}
        <div className="space-y-2">
          <Label>Image</Label>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <ImageUploader
                value={field.value}
                onChange={(url) => {
                  field.onChange(url);
                  setValue("image", url);
                }}
              />
            )}
          />
        </div>

            <div>
        <Label>Image Alt</Label>
        <Input {...register("imageAlt")}></Input>
        </div>

      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isLoading}
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isLoading ? "Saving..." : "Save"}
        </Button>
      </div>
    </form>
  );
};

export default EventsForm;
