import React from "react";
import EventList from "../EventList/EventList";
import Navbar from "../Navbar/Navbar";
import "./EventDashboard.css";
import { connect } from "react-redux";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";
import { Button } from "semantic-ui-react";
const mapState = (state) => ({
  events: state.events,
});
const actions = {
  createEvent,
  deleteEvent,
  updateEvent,
};
class EventDashboard extends React.Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        <Navbar />
        <div className="home">
          <EventList events={events} />
        </div>
        <div className="add">
          <Button
            icon="plus circle"
            size="massive"
            color="blue"
            circular
            inverted
          />
        </div>
      </div>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);
