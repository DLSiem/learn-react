import React from "react";
import EventItem from "../components/EventItem";
import { json, redirect, useRouteLoaderData } from "react-router-dom";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    return json({ message: "Failed to fetch data" }, { status: 500 });
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const id = params.eventId;
  const method = request.method;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: method,
  });
  if (!response.ok) {
    throw json(
      {
        message: "Could not delete event.",
      },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}
