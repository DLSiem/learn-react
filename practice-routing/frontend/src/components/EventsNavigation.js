import classes from "./EventsNavigation.module.css";
import { NavLink } from "react-router-dom";

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? classes.active : "")}
            end
          >
            All Events
          </NavLink>
          <NavLink
            to="new"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Add New Event
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
