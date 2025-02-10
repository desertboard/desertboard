"use client";

import EventsForm from "../events-form";
import { useParams } from "next/navigation";

export default function EditEventsPage() {
  const { id } = useParams();
  return <EventsForm eventId={id as string} />;
}
