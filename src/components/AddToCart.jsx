import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
const ATCButton = styled.button`
  background-color: ${(props) =>
    props.active ? "var(--light-color)" : "  var(--success-color)"};
  color: ${(props) => (props.active ? "#000" : "#fff")};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--success-dark-color);
  }
`;

const AddToCart = () => {
  const [active, setActive] = useState(false);
  return (
    <ATCButton
      className="shadow button-circle"
      active={active}
      onClick={() => setActive(!active)}
    >
      <FontAwesomeIcon icon={faCartShopping} />
    </ATCButton>
  );
};

export default AddToCart;
