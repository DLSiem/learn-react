import React from "react";
import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const events = useLoaderData();
  return <EventsList events={events} />;
};

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    return json({ message: "Failed to fetch data" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};
