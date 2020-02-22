import React from "react";
import PropTypes from "prop-types";
const user = props => {
  //   const userName = "Pradeep";
  return (
    <div>
      <p>{props.userName}</p>
      <p>{props.age}</p>
      <p>{props.children}</p>
    </div>
  );
};

user.propTypes = {
  userName: PropTypes.string,
  age: PropTypes.number
};
export default user;
