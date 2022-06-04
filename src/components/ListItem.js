import React from "react";
import PropTypes from "prop-types";
import "./ListItem.css";

const ListItem = ({ image, name, description, twitterLink }) => {
  return (
    <li className={"listItem__wrapper"}>
      <img alt={name} src={image} className={"listItem__image"} />
      <div>
        <h2 className={"listItem__name"}>{name}</h2>
        <p className={"listItem__description"}>{description}</p>
        <a href={twitterLink} className={"listItem__button"}>
          twitterLink
        </a>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  image: "default content for test",
  name: "default content for test",
  description: "default content for test",
  twitterLink: "default content for test",
}

export default ListItem;
