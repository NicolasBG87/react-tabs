import React from "react";

const Tab = ({ active, content, bBar }) => {
  return active ? (
    <div>
      {content}
      {bBar || null}
    </div>
  ) : null;
};

export default Tab;
