import EventListItem from "../EventListItem/EventListItem";
import "./EventList.css";
import React, { Component } from "react";

export default class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div className="posts">
        {events.map((event) => (
          <EventListItem event={event} key={event.id} />
        ))}
      </div>
    );
  }
}
