import React from "react";
import styled from "styled-components";

const BBar = styled.div`
  background: #283d3b;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Filler = styled.div`
  width: 100%;
`;

const Actions = styled.div`
  display: flex;
  padding: 5px;
  & button {
    background: #197278;
    border: 1px solid #197278;
    border-radius: 2px;
    color: white;
    padding: 5px 20px;
    margin-left: 5px;
    transition: all 0.25s ease;
    outline: none;
    &:hover {
      background: lightseagreen;
      cursor: pointer;
    }
  }
`;

const BottomBar = ({ actions }) => {
  return (
    <BBar>
      <Filler />
      <Actions>
        <button onClick={actions.yesAction}>Accept</button>
        <button onClick={actions.noAction}>Decline</button>
      </Actions>
    </BBar>
  );
};

export default BottomBar;
