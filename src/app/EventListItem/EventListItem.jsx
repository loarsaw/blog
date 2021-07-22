import React from "react";
import { Link } from "react-router-dom";
import "./EventListItem.css";
import { Button } from "semantic-ui-react";
const EventListItem = ({ event }) => {
  return (
    <div className="post">
      <img className="postImg" src={event.img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">{event.title}</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
      <Button as={Link} to={`/event/${event.id}`} content="View" />
    </div>
  );
};

export default EventListItem;
