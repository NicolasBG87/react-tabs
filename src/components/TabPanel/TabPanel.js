import React, { useState } from "react";
import styled from "styled-components";

import Tab from "./Tab";
import TopBarItem from "./TopBarItem";
import BottomBar from "./BottomBar";

const Container = styled.div`
  height: 500px;
  width: 500px;
  border: 1px solid black;
  border-radius: 5px;
  position: relative;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  background: #283d3b;
`;

const PanelBody = styled.div`
  padding: 10px;
`;

const TabPanel = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  const createTopBar = () => {
    const topBar = data.map((item, index) => {
      return (
        <TopBarItem
          title={item.title}
          active={activeTab === index}
          key={index}
          id={index}
          setActiveTab={setActiveTab}
        />
      );
    });
    return topBar;
  };

  const createPanelBody = () => {
    const panelBody = data.map((item, index) => {
      return (
        <Tab
          key={index}
          content={item.content}
          active={activeTab === index}
          bBar={item.bBar ? <BottomBar actions={item.bBar} /> : null}
        />
      );
    });
    return panelBody;
  };

  return (
    <Container>
      <TopBar>{createTopBar()}</TopBar>
      <PanelBody>{createPanelBody()}</PanelBody>
    </Container>
  );
};

export default TabPanel;
