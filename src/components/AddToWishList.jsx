import React, { useState } from "react";
import styled from "styled-components";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ATWL = styled.button`
  color: ${({ active }) =>
    active ? "var(--light-color)" : "var(--success-color)"};
  background: ${({ active }) =>
    active ? "var(--success-color)" : "var(--light-color)"};
  border: none;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
  
    background: var(--success-dark-color);
    cursor: pointer;
  }
`;

const AddToWishList = () => {
  const [active, setActive] = useState(false);
  return (
    <ATWL className="shadow button-circle" active={active} onClick={() => setActive(!active)}>
      {active ? (
        <FontAwesomeIcon icon={regularHeart} />
      ) : (
        <FontAwesomeIcon icon={solidHeart} />
      )}
    </ATWL>
  );
};

export default AddToWishList;
