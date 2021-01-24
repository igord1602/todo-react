import React from "react";

const StatePanel = ({ state }) => {
  const labels = {
    done: "This dodo was completed",
    "in-process": "You have to do this thing",
    postponed: "No need to do anything",
  };
  return (
    <React.Fragment>
      <dt>Status</dt>
      <dd>{labels[state]}</dd>
    </React.Fragment>
  );
};

export default StatePanel;
