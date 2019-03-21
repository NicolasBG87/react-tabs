import React from "react";
import styled from "styled-components";

const TopBarItem = ({ active, title, id, setActiveTab }) => {
  const StyledTopBarItem = styled.div`
    color: ${active ? "white" : "gray"};
    background: ${active ? "#197278" : "#283D3B"};
    padding: 10px;
    cursor: pointer;
    transition: all 0.25s ease;
  `;

  return (
    <StyledTopBarItem onClick={e => setActiveTab(id)}>
      <span>{title}</span>
    </StyledTopBarItem>
  );
};

export default TopBarItem;
