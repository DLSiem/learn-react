import React from "react";
import EventItem from "../components/EventItem";
import { json } from "react-router-dom";

const EventDetailPage = () => {
  return <EventItem />;
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events" + id);
  if (!response.ok) {
    return json({ message: "Failed to fetch data" }, { status: 500 });
  } else {
    return response;
  }
}
