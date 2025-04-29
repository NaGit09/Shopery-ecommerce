import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
const QV = styled.button`
  background-color: var(--light-color);
  &:hover {
    background-color: var(--success-color);
    color: #fff;
  }
`;

const QuickView = () => {
  return (
    <QV className="shadow button-circle">
      <FontAwesomeIcon icon={faEye} />
    </QV>
  );
};

export default QuickView;
