import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "../eventConstants";
import { createReducer } from "../common/reducerUtil";
const initialState = [
  {
    id: "1",
    author: "Lily Camplbell",
    title: "The Land of Blusing Sun",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quae ipsa dignissimos maxime expedita! Voluptas aperiam provident a dolor recusandae aliquam tempora veniam, hic expedita? Ipsum officiis blanditiis sint corrupti.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quae ipsa dignissimos maxime expedita! Voluptas aperiam provident a dolor recusandae aliquam tempora veniam, hic expedita? Ipsum officiis blanditiis sint corrupti.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quae ipsa dignissimos maxime expedita! Voluptas aperiam provident a dolor recusandae aliquam tempora veniam, hic expedita? Ipsum officiis blanditiis sint corrupti.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quae ipsa dignissimos maxime expedita! Voluptas aperiam provident a dolor recusandae aliquam tempora veniam, hic expedita? Ipsum officiis blanditiis sint corrupti.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quae ipsa dignissimos maxime expedita! Voluptas aperiam provident a dolor recusandae aliquam tempora veniam, hic expedita? Ipsum officiis blanditiis sint corrupti.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quae ipsa dignissimos maxime expedita! Voluptas aperiam provident a dolor recusandae aliquam tempora veniam, hic expedita? Ipsum officiis blanditiis sint corrupti.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quae ipsa dignissimos maxime expedita! Voluptas aperiam provident a dolor recusandae aliquam tempora veniam, hic expedita? Ipsum officiis blanditiis sint corrupti.",
    photoUrl: "text",
    img: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: "2",
    author: "Thomas Edison",
    title: "The Mind Map",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quae ipsa dignissimos maxime expedita! Voluptas aperiam provident a dolor recusandae aliquam tempora veniam, hic expedita? Ipsum officiis blanditiis sint corrupti.",
    photoUrl: "text",
    img: "https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "3",
    author: "Sarrah Washigton",
    title: "Your Freedom",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quae ipsa dignissimos maxime expedita! Voluptas aperiam provident a dolor recusandae aliquam tempora veniam, hic expedita? Ipsum officiis blanditiis sint corrupti.",
    photoUrl: "text",
    img: "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: "4",
    author: "Sarrah Washigton",
    title: "The Call",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quae ipsa dignissimos maxime expedita! Voluptas aperiam provident a dolor recusandae aliquam tempora veniam, hic expedita? Ipsum officiis blanditiis sint corrupti.",
    photoUrl: "text",
    img: "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: "5",
    author: "Messi",
    title: "Mine Request",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quae ipsa dignissimos maxime expedita! Voluptas aperiam provident a dolor recusandae aliquam tempora veniam, hic expedita? Ipsum officiis blanditiis sint corrupti.",
    photoUrl: "text",
    img: "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: "6",
    author: "Sarrah Washigton",
    title: "Your Hobby",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quae ipsa dignissimos maxime expedita! Voluptas aperiam provident a dolor recusandae aliquam tempora veniam, hic expedita? Ipsum officiis blanditiis sint corrupti.",
    photoUrl: "text",
    img: "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];

export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)];
};

export const updatedEvent = (state, payload) => {
  return [
    ...state.filter((event) => event.id !== payload.event.id),
    Object.assign({}, payload.event),
  ];
};

export const deleteEvent = (state, payload) => {
  return [...state.filter((event) => event.id !== payload.eventId)];
};

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updatedEvent,
  [DELETE_EVENT]: deleteEvent,
});
