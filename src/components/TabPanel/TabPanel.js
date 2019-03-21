import React, { useState } from "react";
import styled from "styled-components";

import Tab from "./Tab";
import TopBarItem from "./TopBarItem";
import BottomBar from "./BottomBar";

const TabPanel = ({ data, vertical }) => {
  const [activeTab, setActiveTab] = useState(0);

  const Container = styled.div`
    width: 500px;
    min-height: 500px;
    border: 1px solid black;
    border-radius: 5px;
    position: relative;
    display: ${vertical ? "block" : "flex"};
    transition: all 0.25s ease;
  `;

  const PanelBody = styled.div`
    padding: 10px;
    width: 100%;
  `;

  const TopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${vertical ? "center" : "flex-start"};
    flex-direction: ${vertical ? "row" : "column"};
    border-bottom: 1px solid black;
    background: #283d3b;
    padding: ${vertical ? 0 : "10px 0"};
  `;

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
