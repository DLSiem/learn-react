import classes from "./EventItem.module.css";
import React from "react";
import { Link, useSubmit } from "react-router-dom";

function EventItem({ event }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proced = window.confirm("Are you sure?");

    if (proced) {
      submit(null, {
        method: "delete",
      });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
